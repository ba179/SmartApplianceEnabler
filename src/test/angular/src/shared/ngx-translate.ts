const config = require('../../../../main/angular/src/assets/i18n/de.json');

export function getTranslation(key: string, prefix?: string) {
  const resolvedKey = prefix ? `${prefix}${key}` : key;
  return config[resolvedKey];
}
