// src/hooks/useFormTracking.js

import {
  useEffect,
  useRef,
} from "react";

import { useLocation } from "react-router-dom";

import {
  trackEvent,
  trackEventOnUnload,
} from "../analytics/analytics";

import { EVENTS } from "../analytics/events";

const useFormTracking = ({
  formName,
  sectionName,
  visibilityThreshold = 0.3,
}) => {
  const formRef = useRef(null);

  const location = useLocation();

  const hasViewedRef = useRef(false);

  const hasStartedRef = useRef(false);

  const hasSubmittedSuccessRef =
    useRef(false);

  const startTimeRef = useRef(null);

  const lastFieldRef = useRef(null);

  const interactedFieldsRef =
    useRef(new Set());

  const pagePathRef = useRef(
    location.pathname
  );

  useEffect(() => {
    pagePathRef.current =
      location.pathname;
  }, [location.pathname]);

  /**
   * FORM VIEW
   */
  useEffect(() => {
    const node = formRef.current;

    if (!node) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting &&
              !hasViewedRef.current
            ) {
              hasViewedRef.current = true;

              trackEvent(
                EVENTS.FORM_VIEW,
                {
                  form_name: formName,
                  section_name:
                    sectionName,
                  page_path:
                    pagePathRef.current,
                }
              );
            }
          });
        },
        {
          threshold:
            visibilityThreshold,
        }
      );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [
    formName,
    sectionName,
    visibilityThreshold,
  ]);

  /**
   * FORM ABANDON
   */
  useEffect(() => {
    const maybeFireAbandon = () => {
      if (
        hasStartedRef.current &&
        !hasSubmittedSuccessRef.current
      ) {
        const seconds =
          startTimeRef.current
            ? Math.floor(
                (Date.now() -
                  startTimeRef.current) /
                  1000
              )
            : 0;

        trackEventOnUnload(
          EVENTS.FORM_ABANDON,
          {
            form_name: formName,
            last_interacted_field:
              lastFieldRef.current ||
              "unknown",
            time_spent_seconds:
              seconds,
            page_path:
              pagePathRef.current,
          }
        );
      }
    };

    window.addEventListener(
      "beforeunload",
      maybeFireAbandon
    );

    return () => {
      window.removeEventListener(
        "beforeunload",
        maybeFireAbandon
      );

      // Route change
      maybeFireAbandon();
    };
  }, [formName]);

  /**
   * FIELD INTERACTION
   */
  const trackFieldFocus = (
    fieldName
  ) => {
    lastFieldRef.current =
      fieldName;

    if (!hasStartedRef.current) {
      hasStartedRef.current = true;

      startTimeRef.current =
        Date.now();

      trackEvent(
        EVENTS.FORM_START,
        {
          form_name: formName,
          section_name: sectionName,
          page_path:
            pagePathRef.current,
        }
      );
    }

    if (
      !interactedFieldsRef.current.has(
        fieldName
      )
    ) {
      interactedFieldsRef.current.add(
        fieldName
      );

      trackEvent(
        EVENTS.FORM_FIELD_INTERACTION,
        {
          form_name: formName,
          field_name: fieldName,
          page_path:
            pagePathRef.current,
        }
      );
    }
  };

  /**
   * SUBMIT
   */
  const trackSubmit = () => {
    trackEvent(
      EVENTS.FORM_SUBMIT,
      {
        form_name: formName,
        form_location:
          sectionName,
        page_path:
          pagePathRef.current,
      }
    );
  };

  /**
   * SUCCESS
   */
  const trackSubmitSuccess =
    () => {
      hasSubmittedSuccessRef.current =
        true;

      trackEvent(
        EVENTS.FORM_SUBMIT_SUCCESS,
        {
          form_name: formName,
          page_path:
            pagePathRef.current,
        }
      );

      if (startTimeRef.current) {
        trackEvent(
          EVENTS.FORM_COMPLETION_TIME,
          {
            form_name: formName,
            duration_seconds:
              Math.floor(
                (Date.now() -
                  startTimeRef.current) /
                  1000
              ),
            page_path:
              pagePathRef.current,
          }
        );
      }
    };

  /**
   * ERROR
   */
  const trackSubmitError = (
    errorType,
    fieldName
  ) => {
    trackEvent(
      EVENTS.FORM_ERROR,
      {
        form_name: formName,
        error_type: errorType,
        field_name: fieldName,
        page_path:
          pagePathRef.current,
      }
    );
  };

  return {
    formRef,
    trackFieldFocus,
    trackSubmit,
    trackSubmitSuccess,
    trackSubmitError,
  };
};

export default useFormTracking;