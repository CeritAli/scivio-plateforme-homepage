# SCIVIO Homepage Template

Template de homepage professionnel pour SCIVIO et ses plateformes, créé avec Next.js 14, Tailwind CSS et Framer Motion.

## 🚀 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 📁 Structure du Projet

```
├── app/
│   ├── layout.tsx          # Layout principal avec métadonnées
│   ├── page.tsx            # Page d'accueil assemblant toutes les sections
│   └── globals.css         # Styles globaux Tailwind
├── components/
│   ├── Navbar.tsx          # Barre de navigation flottante
│   ├── Logo.tsx            # Composant logo SVG SCIVIO
│   ├── Hero.tsx            # Section hero avec animations
│   ├── MissionVision.tsx   # Section mission/vision et valeurs
│   ├── Platforms.tsx       # Présentation des 3 plateformes
│   ├── Contact.tsx         # Formulaire de contact
│   └── Footer.tsx          # Footer du site
├── tailwind.config.js      # Configuration Tailwind (couleurs SCIVIO)
└── package.json            # Dépendances du projet
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js` :
- `primary` : #a8d5ba (vert pastel EDN.chat)
- `primary-dark` : #8fc4a3 (vert foncé)
- `primary-light` : #c8e6c9 (vert clair)
- `secondary` : #7fb383 (vert secondaire)

Pour modifier les couleurs pour une autre plateforme, éditez simplement ces valeurs.

### Contenu

Chaque composant contient son propre contenu. Pour personnaliser :

1. **Hero** (`components/Hero.tsx`) :
   - Modifier le titre, sous-titre et description
   - Ajuster les textes des boutons CTA

2. **Mission/Vision** (`components/MissionVision.tsx`) :
   - Personnaliser la mission et vision
   - Modifier les 4 valeurs affichées

3. **Platforms** (`components/Platforms.tsx`) :
   - Modifier les informations des 3 plateformes
   - Changer les icônes, descriptions et features
   - Ajuster les URLs

4. **Contact** (`components/Contact.tsx`) :
   - Mettre à jour email, téléphone et adresse
   - Personnaliser les liens réseaux sociaux

5. **Footer** (`components/Footer.tsx`) :
   - Modifier les liens et informations

### Logo

Le logo SVG est dans `components/Logo.tsx`. Pour le remplacer :
1. Ouvrir le fichier
2. Remplacer le contenu SVG par votre nouveau logo
3. Ajuster les props `width` et `height` si nécessaire

## 🎭 Animations

Les animations Framer Motion sont configurées pour :
- Apparition en fondu au scroll (fade-in)
- Montée progressive des éléments (slide-up)
- Effets de hover sur les cards
- Scroll smooth entre les sections

## 📱 Responsive

Le template est entièrement responsive avec des breakpoints Tailwind :
- Mobile first design
- Adapté tablette (md:)
- Adapté desktop (lg:)

## 🔧 Technologies

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique
- **Tailwind CSS** : Utility-first CSS
- **Framer Motion** : Animations fluides
- **Lucide React** : Icônes modernes

## 📋 Commandes

```bash
npm run dev      # Développement
npm run build    # Build production
npm run start    # Serveur production
npm run lint     # Linter
```

## 📝 Notes pour Réutilisation

Ce template est conçu pour être facilement copié et modifié :

1. **Pour créer une nouvelle homepage** (ex: Medstart) :
   - Copier tout le dossier
   - Modifier les couleurs dans `tailwind.config.js`
   - Adapter le contenu dans chaque composant
   - Remplacer le logo

2. **Structure simple** :
   - Pas de complexité inutile
   - Code clair et commenté
   - Facile à comprendre et modifier

3. **Sections modulaires** :
   - Chaque section est indépendante
   - Possibilité de réorganiser facilement
   - Ajout/suppression de sections simple

## 🎯 Support

Pour toute question sur l'utilisation de ce template, contactez l'équipe SCIVIO.

---

**SCIVIO** - Innovation en Éducation Médicale

