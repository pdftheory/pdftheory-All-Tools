import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from '@/lib/i18n/config';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Ensure the locale prefix is always present to match the [locale] folder structure
  // This prevents 404 errors at the root path by automatically redirecting / to /en/
  localePrefix: 'always',

  // Disable automatic locale detection
  localeDetection: false,
});
