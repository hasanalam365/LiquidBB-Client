// src/analytics/trackers.js

import { trackEvent } from "./analytics";

import { EVENTS } from "./events";

export const trackContactClick = ({
  buttonName,
  buttonLocation,
  sectionName,
  pagePath,
}) => {
  return trackEvent(
    EVENTS.CONTACT_CLICK,
    {
      button_name: buttonName,
      button_location: buttonLocation,
      section_name: sectionName,
      page_path: pagePath,
    }
  );
};

export const trackAdvisorClick = ({
  buttonName,
  buttonLocation,
  sectionName,
  pagePath,
}) => {
  return trackEvent(
    EVENTS.ADVISOR_CLICK,
    {
      button_name: buttonName,
      button_location: buttonLocation,
      section_name: sectionName,
      page_path: pagePath,
    }
  );
};

export const trackEmailClick = ({
  emailType = "general",
  sectionName,
  pagePath,
}) => {
  return trackEvent(
    EVENTS.EMAIL_CLICK,
    {
      email_type: emailType,
      section_name: sectionName,
      page_path: pagePath,
    }
  );
};

export const trackExternalLink = ({
  url,
  linkText,
  sectionName,
  pagePath,
}) => {
  let domain = "";

  try {
    domain = new URL(url).hostname;
  } catch {
    domain = "";
  }

  return trackEvent(
    EVENTS.EXTERNAL_LINK_CLICK,
    {
      link_url_domain: domain,
      link_text: linkText,
      section_name: sectionName,
      page_path: pagePath,
    }
  );
};

export const trackFaqOpen = ({
  faqId,
  faqQuestion,
  sectionName,
  pagePath,
}) => {
  return trackEvent(
    EVENTS.FAQ_OPEN,
    {
      faq_id: faqId,
      faq_question: faqQuestion,
      section_name: sectionName,
      page_path: pagePath,
    }
  );
};

export const trackFaqClose = ({
  faqId,
  faqQuestion,
  sectionName,
  pagePath,
}) => {
  return trackEvent(
    EVENTS.FAQ_CLOSE,
    {
      faq_id: faqId,
      faq_question: faqQuestion,
      section_name: sectionName,
      page_path: pagePath,
    }
  );
};