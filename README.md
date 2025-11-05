# 🚀 Rocket Decals

> Site web officiel de téléchargement et commande de stickers Rocket League personnalisés

Site développé avec **Next.js 14** (App Router), **React 18** et **TypeScript**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

**URL de production :** https://rocket-decals.com  
**URL locale :** http://localhost:3000

---

## 📋 Quick Start

```bash
# Installation des dépendances
npm install

# Lancer en mode développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start
```

---

## 🎯 Fonctionnalités

### Navigation & UI
- Navigation avec menu dropdown
- Multi-langue FR/EN avec localStorage
- Responsive (desktop, tablet, mobile)
- URLs propres sans hash accumulé

### Décals
- **Teams & Creators** avec modèles 3D Sketchfab
- **Clients** avec carousel d'images
- Recherche en temps réel avec messages vides
- Pagination (9 teams, 8 clients + CTA)
- Modal avec 3D ou carousel
- Boutons Share, Download

### Autres
- Reviews carousel infini
- Tutoriel 4 étapes
- Contact avec 4 cartes
- Vidéo promo autoplay on scroll
- Événements saisonniers (Halloween, Noël, etc.)

---

## 📁 Structure du Projet

```
rocket-decals/
├── app/                    # Pages et layouts Next.js
│   ├── layout.tsx          # Layout racine + SEO
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux (2790 lignes)
│
├── components/             # Composants React (19 composants)
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Sections page d'accueil
│   ├── decals/             # Grille, cartes, carousel
│   ├── modals/             # Modals décals + collection
│   ├── reviews/            # Cartes avis
│   ├── easter-egg/         # Système easter eggs
│   └── ui/                 # Composants UI génériques
│
├── contexts/               # Contexts React
│   ├── LanguageContext.tsx # i18n FR/EN avec localStorage
│   └── EasterEggContext.tsx # Gestion easter eggs
│
├── hooks/                  # Hooks personnalisés
│   ├── useLanguage.ts      # Hook multi-langue
│   ├── useLocalStorage.ts  # Hook localStorage
│   ├── useModal.ts         # Hook gestion modals
│   └── useIntersectionObserver.ts # Hook lazy loading
│
├── lib/                    # Utilitaires
│   ├── translations.ts     # Traductions FR/EN complètes
│   ├── utils.ts            # Fonctions utilitaires
│   └── github-api.ts       # API GitHub (admin - optionnel)
│
├── data/                   # Données du site
│   ├── teams-creators.ts   # 10 décals avec modèles 3D
│   ├── clients.ts          # 6 clients avec carousel
│   ├── reviews.ts          # 9 avis clients
│   ├── events.ts           # 5 événements saisonniers
│   └── easter-eggs.ts      # 7 cartes secrètes
│
├── types/                  # Types TypeScript
│   ├── decal.ts            # Types décals
│   ├── easter-egg.ts       # Types easter eggs
│   ├── review.ts           # Types avis
│   └── *.ts                # Autres types
│
├── styles/                 # Styles supplémentaires
│   └── easter-egg-animations.css # Animations CSS
│
├── public/                 # Assets statiques
│   ├── decals/             # Fichiers .rar/.zip à télécharger
│   ├── img/                # Images (logos, banners, etc.)
│   ├── video/              # Vidéos background
│   ├── fonts/              # Fonts personnalisées
│   ├── favicon.ico         # Icône du site
│   ├── robots.txt          # SEO robots
│   └── sitemap.xml         # SEO sitemap
│
├── .gitignore              # Configuration Git
├── CNAME                   # Configuration domaine
├── next.config.js          # Configuration Next.js
├── package.json            # Dépendances npm
├── tsconfig.json           # Configuration TypeScript
└── README.md               # Ce fichier
```

---

## 🌐 Déploiement

### GitHub Pages (Actuel)

Le site est déployé automatiquement sur **GitHub Pages** avec une configuration Next.js en mode **export statique**.

#### Configuration Actuelle

Le projet est configuré pour générer un site statique :

```javascript
// next.config.js
{
  output: 'export',  // Export statique pour GitHub Pages
  images: {
    unoptimized: true  // Images non optimisées (requis pour export)
  }
}
```

#### Déploiement Automatique

```bash
# Build et déploiement en une commande
npm run deploy
```

Cette commande :
1. ✅ Build le projet Next.js (`next build`)
2. ✅ Génère le dossier `out/` avec le site statique
3. ✅ Déploie automatiquement sur la branche `gh-pages`
4. ✅ Le site est accessible via GitHub Pages

#### Configuration GitHub Pages

Dans les paramètres du repository GitHub :
- **Settings** → **Pages**
- **Source** : Deploy from a branch
- **Branch** : `gh-pages` / `root`
- **Custom domain** : `rocket-decals.com` (configuré via fichier `CNAME`)

#### Déploiement Manuel

```bash
# 1. Build du projet
npm run build

# 2. Le dossier out/ contient le site statique
# 3. Déployer avec gh-pages
npm run deploy
```

### Domaine Personnalisé

Le site utilise un domaine personnalisé `rocket-decals.com` :

#### Configuration DNS

Chez votre fournisseur DNS, créez un enregistrement **CNAME** :

```
CNAME    rocket-decals.com    →    votre-username.github.io
```

Ou pour un sous-domaine :

```
CNAME    www    →    votre-username.github.io
```

#### Fichier CNAME

Le fichier `public/CNAME` contient le domaine :

```
rocket-decals.com
```

⚠️ **Important** : Ce fichier est copié automatiquement dans `out/` lors du build et est nécessaire pour que GitHub Pages reconnaisse le domaine personnalisé.

### Alternative : Vercel

Pour migrer vers Vercel :

```bash
npm i -g vercel
vercel

# Modifier next.config.js : retirer "output: 'export'"
```

---

## 📊 Statistiques

- **70+ fichiers** créés
- **~4000 lignes** TypeScript/TSX
- **2790 lignes** CSS
- **19 composants** React
- **2 contexts**, **5 hooks**

---

## 🛠️ Stack Technique

### Frontend
- **Next.js 14** - Framework React avec App Router
- **React 18** - Bibliothèque UI
- **TypeScript 5** - Typage statique

### Styling
- **CSS Modules** - Styles scopés
- **CSS Global** - Styles partagés (~2790 lignes)
- **Animations CSS** - Transitions et animations

### State Management
- **React Context API** - State global (langue, easter eggs)
- **React Hooks** - State local et effets
- **localStorage** - Persistance (langue, collection)

### SEO & Performance
- **Next.js SSR** - Rendu côté serveur
- **Metadata API** - SEO optimisé
- **Image Optimization** - Chargement optimisé

---

## 📝 Modifications du Contenu

### Ajouter un Décal

**Teams & Creators :**
```typescript
// data/teams-creators.ts
export const teamsCreators: TeamCreatorDecal[] = [
  {
    id: 'nouveau-decal',
    title: { fr: 'Titre FR', en: 'Title EN' },
    // ...
  }
];
```

**Clients :**
```typescript
// data/clients.ts
export const clients: ClientDecal[] = [
  {
    id: 'nouveau-client',
    images: ['/img/client1.png', '/img/client2.png', '/img/client3.png'],
    // ...
  }
];
```

### Ajouter une Traduction

```typescript
// lib/translations.ts
export const translations = {
  fr: {
    'nouvelle.cle': 'Texte français',
  },
  en: {
    'nouvelle.cle': 'English text',
  },
};
```

---

## 🔧 Commandes Utiles

```bash
# Développement
npm run dev                    # Lance le serveur de dev (http://localhost:3000)

# Build production
npm run build                  # Build optimisé → génère le dossier out/

# Export statique
npm run export                 # Alias de build (pour GitHub Pages)

# Déploiement
npm run deploy                 # Build + déploiement automatique sur GitHub Pages

# Linter
npm run lint                   # Vérification ESLint

# Clean
rm -rf .next out node_modules  # Nettoyage complet
npm install                    # Réinstallation des dépendances
```

---

## 📦 Dépendances

### Production
```json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "aos": "^2.3.4"
}
```

### Développement
```json
{
  "typescript": "^5.0.0",
  "@types/react": "^18.3.0",
  "@types/node": "^20.0.0",
  "gh-pages": "^6.3.0"
}
```

### Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Build de production → génère `out/` |
| `npm run export` | Alias de build (export statique) |
| `npm run deploy` | Build + déploiement sur GitHub Pages |
| `npm run lint` | Vérification ESLint |

---

## 🚀 Workflow de Développement

### 1. Développement Local

```bash
# Cloner le repo
git clone https://github.com/votre-username/rocket-decals.git
cd rocket-decals

# Installer les dépendances
npm install

# Lancer en mode dev
npm run dev
```

### 2. Modifications

- Modifier les composants dans `components/`
- Ajouter des décals dans `data/`
- Modifier les styles dans `app/globals.css`
- Tester localement sur `http://localhost:3000`

### 3. Déploiement en Production

```bash
# Commit et push des changements
git add .
git commit -m "Description des changements"
git push origin main

# Déploiement sur GitHub Pages
npm run deploy
```

Le site sera accessible sur `https://rocket-decals.com` après ~1-2 minutes.

### 4. Structure des Branches

- **`main`** : Code source et développement
- **`gh-pages`** : Site statique généré (créé automatiquement par `gh-pages`)

### 5. Vérification du Déploiement

Après le déploiement, vérifiez :

1. ✅ Actions GitHub : Vérifier que le workflow s'est exécuté sans erreur
2. ✅ Branche `gh-pages` : Vérifier que les fichiers sont bien dans `out/`
3. ✅ GitHub Pages : Settings → Pages → Site actif
4. ✅ Domaine : `https://rocket-decals.com` fonctionne
5. ✅ HTTPS : Certificat SSL activé automatiquement

### 6. Troubleshooting

**Problème : Le site ne se met pas à jour**
```bash
# Vider le cache et redéployer
rm -rf .next out
npm run deploy
```

**Problème : 404 sur GitHub Pages**
- Vérifier que la branche `gh-pages` existe
- Vérifier Settings → Pages → Branch = `gh-pages`
- Attendre 1-2 minutes pour la propagation

**Problème : Domaine personnalisé ne fonctionne pas**
- Vérifier le fichier `public/CNAME`
- Vérifier la configuration DNS (propagation peut prendre 24h)
- Vérifier Settings → Pages → Custom domain

---

## 📊 Statistiques Complètes

- **~4000 lignes** de TypeScript/TSX
- **2790 lignes** de CSS
- **70+ fichiers** au total
- **19 composants** React
- **7 types** TypeScript
- **4 hooks** personnalisés
- **2 contexts** React

---

## 👥 Contributeurs

- **Raito** - Artiste 3D et créateur de designs
- **Erlow** - Développeur web et intégration

---

## 📄 Licence

© 2025 Rocket Decals - Tous droits réservés

---

## 🔗 Liens Utiles

- **Site web** : https://rocket-decals.com
- **Discord** : https://discord.gg/hzwB24PfaG
- **Twitter Raito** : https://x.com/Raito_3D
- **Twitter Erlow** : https://x.com/Erlow_
- **TikTok Raito** : https://www.tiktok.com/@raito3d
- **TikTok Erlow** : https://www.tiktok.com/@erlow.btw

---

**Fait avec ❤️ pour la communauté Rocket League 🚗⚽**
