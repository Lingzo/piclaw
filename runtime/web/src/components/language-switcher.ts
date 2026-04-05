import { html } from '../vendor/preact-htm.js';
import { useLocale, type Locale, setLocale, t, languages } from '../utils/i18n.js';

export function LanguageSwitcher() {
  const [locale] = useLocale();

  const handleChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    setLocale(target.value as Locale);
  };

  const currentLang = languages.find(l => l.code === locale) || languages[0];

  return html`
    <select 
      class="language-switcher-select"
      value=${locale}
      onChange=${handleChange}
      aria-label=${t('language')}
    >
      ${languages.map((lang) => html`
        <option value=${lang.code} key=${lang.code}>${lang.name}</option>
      `)}
    </select>
  `;
}
