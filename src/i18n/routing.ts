import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from '@/lib/i18n/config';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Use locale prefix only when necessary (default locale doesn't need it)
  localePrefix: 'as-needed',

  // Disable automatic locale detection
  localeDetection: false,
});
