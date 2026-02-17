import { writable, derived } from 'svelte/store';
import en from '../../messages/en.json';
import pt from '../../messages/pt.json';

export const defaultLang = 'pt';
export const languages = ['pt', 'en'];

export const locale = writable(defaultLang);

const translations = {
    en,
    pt
};

/**
 * @typedef {keyof typeof translations} Lang
 * @typedef {keyof typeof en} Key
 */

/** @type {import('svelte/store').Readable<(key: any, vars?: any) => string>} */
export const t = derived(locale, ($locale) => (key, vars = {}) => {
    // @ts-ignore
    const text = translations[$locale][key] || key;
    
    if (typeof text === 'function') {
         return text(vars); 
    }
    
    return text.replace(/{(\w+)}/g, (_, k) => vars[k] || `{${k}}`);
});

// Helper to switch language
export const setLocale = (lang) => {
    if (languages.includes(lang)) {
        locale.set(lang);
        if (typeof document !== 'undefined') {
             document.documentElement.lang = lang;
             localStorage.setItem('lang', lang);
        }
    }
};

// Initialize from localStorage or browser preference if available
if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('lang');
    if (stored && languages.includes(stored)) {
        setLocale(stored);
    } else {
        const browserLang = navigator.language.split('-')[0];
        if (languages.includes(browserLang)) {
            setLocale(browserLang);
        }
    }
}
