import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { mergeWithFallback } from '@/lib/i18n/fallback';

// Module-level cache for merged messages to improve TTFB
const messagesCache = new Map<string, any>();

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale as typeof routing.locales[number])) {
    locale = routing.defaultLocale;
  }

  // Return cached messages if available to hit < 600ms TTFB
  if (messagesCache.has(locale)) {
    return {
      locale,
      messages: messagesCache.get(locale),
      timeZone: 'UTC',
      now: new Date(),
    };
  }

  // Load the messages for the requested locale
  let localeMessages: any;
  try {
    if (locale === 'en') {
      const en = await import(`../../messages/en.json`);
      localeMessages = en.default || en;
    } else {
      const [en, target] = await Promise.all([
        import(`../../messages/en.json`),
        import(`../../messages/${locale}.json`)
      ]);
      const enMessages = en.default || en;
      const targetMessages = target.default || target;
      localeMessages = mergeWithFallback(targetMessages, enMessages);
    }
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    const en = await import(`../../messages/en.json`);
    localeMessages = en.default || en;
  }

  // Cache the results for subsequent requests
  messagesCache.set(locale, localeMessages);

  return {
    locale,
    messages: localeMessages,
    // Configure time zone and formats
    timeZone: 'UTC',
    now: new Date(),
  };
});
