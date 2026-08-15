// src/analytics/events.js

export const EVENTS = {
  // Page / Navigation
  PAGE_VIEW: "page_view",
  NAVIGATION: "navigation_click",
  EXTERNAL_LINK_CLICK: "external_link_click",

  // Section
  SECTION_VIEW: "section_view",
  SECTION_ENGAGEMENT: "section_engagement",
  SECTION_EXIT: "section_exit",

  // Scroll
  SCROLL_DEPTH: "scroll_depth",

  // Video
  VIDEO_START: "video_start",
  VIDEO_PROGRESS: "video_progress",
  VIDEO_PAUSE: "video_pause",
  VIDEO_RESUME: "video_resume",
  VIDEO_COMPLETE: "video_complete",

  // FAQ
  FAQ_OPEN: "faq_open",
  FAQ_CLOSE: "faq_close",

  // Benefit cards (mobile accordion)
  BENEFIT_CARD_TOGGLE: "benefit_card_toggle",

  // CTA / Contact
  CONTACT_CLICK: "contact_click",
  EMAIL_CLICK: "email_click",
  ADVISOR_CLICK: "advisor_click",

  // Form
  FORM_VIEW: "form_view",
  FORM_START: "form_start",
  FORM_FIELD_INTERACTION: "form_field_interaction",
  FORM_SUBMIT: "form_submit",
  FORM_SUBMIT_SUCCESS: "form_submit_success",
  FORM_ERROR: "form_error",
  FORM_ABANDON: "form_abandon",
  FORM_COMPLETION_TIME: "form_completion_time",
};

// NEVER send these keys to GA4.
export const BLOCKED_PARAM_KEYS = [
  "name",
  "full_name",
  "first_name",
  "last_name",
  "email",
  "email_address",
  "phone",
  "phone_number",
  "address",
  "message",
  "dob",
  "date_of_birth",
  "medical_history",
  "condition",
  "value",
];

export const scrollMilestones = [25, 50, 75, 90, 100];

export const videoMilestones = [25, 50, 75, 90, 100];

export const engagementThresholdsSeconds = [5, 15, 30, 60, 120];