import en from "./en.json";
import es from "./es.json";
import pt from "./pt.json";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "pt"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

const locales = { en, es, pt };

export const trans = (locale: Locale) => locales[locale];
