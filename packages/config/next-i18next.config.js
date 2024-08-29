const path = require("path");

/** @type {import("next-i18next").UserConfig} */
const config = {
  i18n: {
    defaultLocale: "zh-CN",
    locales: [
      "ar",
      "cs",
      "da",
      "de",
      "en",
      // "es-419", // Disabled until Crowdin reaches at least 80% completion
      "es",
      "et",
      "fr",
      "he",
      "hu",
      "it",
      "ja",
      "km",
      "ko",
      "nl",
      "no",
      "pl",
      "pt-BR",
      "pt",
      "ro",
      "ru",
      "sr",
      "sv",
      "tr",
      "uk",
      "vi",
      "zh-CN",
      "zh-TW",
    ],
  },
  fallbackLng: {
    default: ["zh-CN"],
    en: ["en"],
  },
  reloadOnPrerender: process.env.NODE_ENV !== "production",
};

module.exports = config;
