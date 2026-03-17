// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

export type GaEventCategory = 'download' | 'cta' | 'faq' | 'scroll';

export type GaEventAction =
  | 'download_click'
  | 'download_email_submit'
  | 'download_email_success'
  | 'download_email_error'
  | 'cta_click_trial'
  | 'faq_open'
  | 'faq_close'
  | 'scroll_reach_cta';

export interface GaEventOptions {
  category: GaEventCategory;
  action: GaEventAction;
  label?: string;
  value?: number;
}

/**
 * Track an event to Google Analytics 4
 */
export function trackEvent({ category, action, label, value }: GaEventOptions): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

/**
 * Track download button clicks
 */
export function trackDownload(osType: 'macos' | 'macos_intel' | 'windows'): void {
  trackEvent({
    category: 'download',
    action: 'download_click',
    label: osType,
  });
}

/**
 * Track email submission attempts
 */
export function trackEmailSubmit(status: 'start' | 'success' | 'error'): void {
  const actionMap = {
    start: 'download_email_submit',
    success: 'download_email_success',
    error: 'download_email_error',
  } as const;

  trackEvent({
    category: 'download',
    action: actionMap[status],
  });
}

/**
 * Track CTA button clicks
 */
export function trackCtaClick(type: 'trial'): void {
  trackEvent({
    category: 'cta',
    action: 'cta_click_trial',
    label: type,
  });
}

/**
 * Track FAQ interactions
 * @param questionIndex - The FAQ question index (0-6)
 * @param isOpen - Whether the question is being opened (true) or closed (false)
 */
export function trackFaqInteraction(questionIndex: number, isOpen: boolean): void {
  // Validate question index range (project has 7 FAQ items: 0-6)
  if (questionIndex < 0 || questionIndex > 6) {
    console.warn(`[GA4] Invalid FAQ index: ${questionIndex}. Must be between 0 and 6.`);
    return;
  }

  trackEvent({
    category: 'faq',
    action: isOpen ? 'faq_open' : 'faq_close',
    label: `question_${questionIndex}`,
  });
}

/**
 * Track scroll depth (CTA section reach)
 */
export function trackScrollReachCta(): void {
  trackEvent({
    category: 'scroll',
    action: 'scroll_reach_cta',
  });
}
