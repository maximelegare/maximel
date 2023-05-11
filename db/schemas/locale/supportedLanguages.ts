const supportedLanguages = [
  {id:'fr', title:'French', isDefault: true},
  {id: 'en', title: 'English' },
]

export default supportedLanguages


export const lang = ['fr','en'] as const;

export type Lang = (typeof lang)[number];