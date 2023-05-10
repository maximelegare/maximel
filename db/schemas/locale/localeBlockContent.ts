import supportedLanguages from "./supportedLanguages";

const localeBlockContent = {
  name: "localeBlockContent",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields:
    // { name: "hasBoldText", title: "Has bold text", type: "boolean" },
    supportedLanguages.map((lang) => ({
      title: lang.title,
      name: lang.id,
      type: "blockContent",
      fieldset: lang.isDefault ? null : "translations",
    })),
};

export default localeBlockContent;
