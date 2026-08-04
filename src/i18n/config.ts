import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/EN';
import fr from './locales/FR';

i18n
    // Détecte la langue du navigateur (si le PC est en FR, le site sera en FR)
    .use(LanguageDetector)
    // Passe l'instance i18n à react-i18next
    .use(initReactI18next)
    // Initialisation
    .init({
        resources: {
            en: en,
            fr: fr
        },
        fallbackLng: 'en', // Langue par défaut si la détection échoue

        interpolation: {
            escapeValue: false, // React protège déjà nativement contre les failles XSS
        }
    });

export default i18n;