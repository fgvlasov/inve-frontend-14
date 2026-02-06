module.exports = {
  locales: ["ru", "en"],
  defaultLocale: "ru",
  localeDetection: false,
  /*loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),*/
  pages: {
    "*": ["common"],
  },
};
