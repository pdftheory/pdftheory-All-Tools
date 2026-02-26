import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from '@/lib/i18n/config';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // OPTIMIZATION: Use 'as-needed' to serve the default locale (en) at the root path (/)
  // without a prefix. This reduces unnecessary redirects and provides a cleaner URL.
  localePrefix: 'as-needed',

  // Disable automatic locale detection to give users manual control
  localeDetection: false,
});
