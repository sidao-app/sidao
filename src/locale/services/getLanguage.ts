import * as Localization from 'expo-localization';

export default function getLanguage(): string {
  return Localization.locale.split('-')[0];
}
