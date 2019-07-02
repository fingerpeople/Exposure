import lang from './lang.json'
export const i18n = (label: string) => {
  return (lang[label]) ? lang[label] : label
}
