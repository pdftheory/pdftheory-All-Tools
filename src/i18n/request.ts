import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { mergeWithFallback } from '@/lib/i18n/fallback';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  // Load the messages for the requested locale
  let localeMessages: any;
  try {
    if (locale === 'en') {
      // For English, we don't need to load a fallback or merge
      localeMessages = (await import(`../../messages/en.json`)).default;
    } else {
      // Load English for fallback and the requested locale
      const [en, target] = await Promise.all([
        import(`../../messages/en.json`),
        import(`../../messages/${locale}.json`)
      ]);
      localeMessages = mergeWithFallback(target.default as any, en.default as any);
    }
  } catch {
    // Fallback to English if locale load fails
    localeMessages = (await import(`../../messages/en.json`)).default;
  }

  return {
    locale,
    messages: localeMessages,
    // Configure time zone and formats
    timeZone: 'UTC',
    now: new Date(),
  };
});
