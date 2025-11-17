// Language management for Afflo GitHub Pages
const translations = {
  fr: {
    // Header
    tagline: 'Affirmations quotidiennes pour TDAH',

    // Navigation
    nav_home: 'Accueil',
    nav_privacy: 'Confidentialité',
    nav_data_deletion: 'Suppression de données',
    nav_support: 'Support',

    // Footer
    footer_about: 'À propos',
    footer_about_text: 'Afflo est une application d\'affirmations quotidiennes spécialement conçue pour les personnes avec TDAH.',
    footer_links: 'Liens',
    footer_legal: 'Légal',
    footer_contact: 'Contact',
    footer_email: 'Email',
    footer_rights: 'Tous droits réservés.',
  },
  en: {
    // Header
    tagline: 'Daily affirmations for ADHD',

    // Navigation
    nav_home: 'Home',
    nav_privacy: 'Privacy',
    nav_data_deletion: 'Data Deletion',
    nav_support: 'Support',

    // Footer
    footer_about: 'About',
    footer_about_text: 'Afflo is a daily affirmations app specifically designed for people with ADHD.',
    footer_links: 'Links',
    footer_legal: 'Legal',
    footer_contact: 'Contact',
    footer_email: 'Email',
    footer_rights: 'All rights reserved.',
  }
};

// Get current language from localStorage or default to French
let currentLang = localStorage.getItem('afflo_lang') || 'fr';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);

  // Add click listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });
});

// Set language and update UI
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('afflo_lang', lang);

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Trigger custom event for page-specific translations
  document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// Get translation
function t(key) {
  return translations[currentLang]?.[key] || key;
}

// Export for use in other scripts
window.affloLang = {
  currentLang: () => currentLang,
  setLanguage,
  t
};
