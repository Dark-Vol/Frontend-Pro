import { useContext } from 'react';
import { LanguageContext } from '../App';

function LanguageToggle() {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <button onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')}>
      {lang === 'ua' ? 'UA 🇺🇦' : 'EN 🇬🇧'}
    </button>
  );
}

export default LanguageToggle;