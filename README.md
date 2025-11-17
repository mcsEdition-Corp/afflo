# Afflo - GitHub Pages Website

Site web statique bilingue (FR/EN) pour l'application Afflo, contenant les pages de politique de confidentialité, suppression de données, et support.

## Structure du projet

```
github_pages/
├── assets/
│   ├── css/
│   │   └── style.css          # Styles avec le thème de l'app
│   ├── js/
│   │   └── lang.js            # Système de gestion de langue FR/EN
│   └── images/
│       └── logo.png           # Logo de l'application
├── index.html                 # Page d'accueil
├── privacy.html               # Politique de confidentialité (RGPD)
├── data-deletion.html         # Instructions de suppression de compte
├── support.html               # FAQ et support
└── README.md                  # Ce fichier
```

## Caractéristiques

- **Bilingue** : Français et Anglais avec switcher de langue
- **Thème de l'app** : Utilise les mêmes couleurs (teal, coral, purple)
- **Responsive** : S'adapte aux mobiles, tablettes et desktop
- **RGPD Compliant** : Politique de confidentialité complète
- **Pas de tracking** : Aucun cookie, aucune analyse

## Déploiement sur GitHub Pages

### Étape 1 : Créer un nouveau repository (ou utiliser le repository existant)

**Option A : Repository dédié (recommandé)**
```bash
# Créer un nouveau repository sur GitHub nommé "afflo-website" ou "afflo-pages"
# Puis :
cd github_pages
git init
git add .
git commit -m "Initial commit: Afflo website"
git branch -M main
git remote add origin https://github.com/mcsedition-corp/afflo-website.git
git push -u origin main
```

**Option B : Utiliser le repository existant de l'app**
```bash
# Si vous voulez héberger le site dans le même repository que l'app
cd /Users/stefen/afflo
git add github_pages/
git commit -m "Add GitHub Pages website"
git push
```

### Étape 2 : Activer GitHub Pages

1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez :
   - **Branch** : `main`
   - **Folder** : `/github_pages` (si Option B) ou `/` (si Option A)
5. Cliquez sur **Save**

### Étape 3 : Attendre le déploiement

GitHub Pages prend généralement 1-5 minutes pour déployer votre site. Vous verrez un message avec l'URL :

**URLs du site déployé** :
```
https://mcsedition-corp.github.io/afflo/
```

### Étape 4 : Tester les URLs

✅ Le site est déployé et fonctionnel aux URLs suivantes :

- `https://mcsedition-corp.github.io/afflo/index.html` - Page d'accueil
- `https://mcsedition-corp.github.io/afflo/privacy.html` - Politique de confidentialité
- `https://mcsedition-corp.github.io/afflo/data-deletion.html` - Suppression de compte
- `https://mcsedition-corp.github.io/afflo/support.html` - Support

### Étape 5 (Optionnel) : Configurer un domaine personnalisé

Si vous voulez utiliser un domaine personnalisé (ex: `afflo.app`) :

1. Dans **Settings > Pages**, sous **Custom domain**, entrez votre domaine
2. Configurez les DNS de votre domaine :
   ```
   Type: CNAME
   Name: @
   Value: mcsedition-corp.github.io
   ```
3. Attendez la propagation DNS (peut prendre 24-48h)

## URLs à mettre à jour dans l'application

Une fois le site déployé, vous devez mettre à jour les URLs dans votre app Flutter :

### 1. Politique de confidentialité

**Fichier** : `lib/presentation/screens/settings/widgets/account_section.dart`

Remplacez l'URL actuelle par la nouvelle :
```dart
// Ligne ~290
launchUrl(
  Uri.parse('https://mcsedition-corp.github.io/afflo/privacy.html'),
  mode: LaunchMode.externalApplication,
);
```

### 2. Instructions de suppression de compte

**Fichier** : `lib/presentation/screens/profile/profile_screen.dart`

Si vous avez un lien vers les instructions de suppression, mettez à jour :
```dart
Uri.parse('https://mcsedition-corp.github.io/afflo/data-deletion.html')
```

### 3. Support / FAQ

Si vous avez un lien vers le support dans l'app :
```dart
Uri.parse('https://mcsedition-corp.github.io/afflo/support.html')
```

### 4. App Store Connect & Google Play Console

✅ **URLs à fournir lors de la soumission de votre app** :

**Pour Apple App Store Connect** :
- Privacy Policy URL : `https://mcsedition-corp.github.io/afflo/privacy.html`
- Support URL : `https://mcsedition-corp.github.io/afflo/support.html`

**Pour Google Play Console** :
- Privacy Policy URL : `https://mcsedition-corp.github.io/afflo/privacy.html`
- Data Deletion Instructions : `https://mcsedition-corp.github.io/afflo/data-deletion.html`

## Mises à jour du site

Pour modifier le contenu du site après déploiement :

```bash
# Modifier les fichiers HTML/CSS/JS
# Puis :
cd github_pages  # ou cd /Users/stefen/afflo
git add .
git commit -m "Update privacy policy"  # ou autre message
git push

# Le site se met à jour automatiquement en 1-5 minutes
```

## Fonctionnalités du site

### Système de langue

Le système de langue est géré par `assets/js/lang.js` :

- **Stockage** : La langue choisie est sauvegardée dans `localStorage`
- **Persistance** : La langue reste active entre les pages
- **Événements** : Dispatch `languageChanged` pour les contenus page-spécifiques

### Ajout de traductions

Pour ajouter des traductions communes (header, footer, nav) :

**Fichier** : `assets/js/lang.js`

```javascript
const translations = {
  fr: {
    // Ajoutez vos clés ici
    new_key: 'Texte en français',
  },
  en: {
    // Traduction anglaise
    new_key: 'Text in English',
  }
};
```

Dans le HTML, utilisez l'attribut `data-i18n` :
```html
<p data-i18n="new_key">Texte en français</p>
```

### Contenu page-spécifique

Pour le contenu principal bilingue, utilisez les divs `.lang-content` :

```html
<!-- Contenu français -->
<div class="lang-content" data-lang="fr">
  <h1>Titre en français</h1>
  <p>Contenu en français...</p>
</div>

<!-- Contenu anglais -->
<div class="lang-content" data-lang="en" style="display: none;">
  <h1>English Title</h1>
  <p>English content...</p>
</div>
```

Le script de langue gère automatiquement l'affichage/masquage.

## Couleurs du thème

Les couleurs de l'app sont définies dans `assets/css/style.css` :

```css
:root {
  --primary-teal: #2DD4BF;      /* Couleur principale de l'app */
  --primary-coral: #FF6B6B;     /* Accent coral */
  --primary-purple: #9B59B6;    /* Accent purple */
  --accent-yellow: #FDB462;     /* Jaune */
  --accent-mint: #A8E6CF;       /* Mint */
  --accent-lavender: #C7CEEA;   /* Lavande */
}
```

## Support

Si vous rencontrez des problèmes avec le déploiement :

1. Vérifiez que GitHub Pages est bien activé dans Settings
2. Assurez-vous que le dossier source est correct (`/github_pages` ou `/`)
3. Attendez 5-10 minutes après le push
4. Consultez l'onglet **Actions** de votre repository pour voir les logs de déploiement

## Conformité légale

Ce site inclut :

- **Politique de confidentialité RGPD** : Droits des utilisateurs, collecte de données, sécurité
- **Instructions de suppression de compte** : Requis par Apple et Google pour les apps avec comptes
- **Support et FAQ** : Aide les utilisateurs et réduit les demandes de support

Ces pages sont **obligatoires** pour la soumission sur App Store et Google Play.

## Licence

Copyright 2025 Afflo. Tous droits réservés.
