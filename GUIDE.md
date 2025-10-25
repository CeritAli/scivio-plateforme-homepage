# Guide de Démarrage Rapide - SCIVIO Homepage

## 🎉 Félicitations !

Votre template de homepage SCIVIO est prêt à l'emploi. Voici comment démarrer et personnaliser pour vos autres plateformes.

## 🚀 Démarrage

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

Votre site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📝 Personnalisation pour vos autres plateformes

### Pour créer la homepage de Medstart.fr :

1. **Copier le projet** dans un nouveau dossier `medstart-homepage`

2. **Modifier les couleurs** dans `tailwind.config.js` :
```javascript
colors: {
  primary: {
    DEFAULT: '#votre-couleur-medstart',
    dark: '#version-foncee',
    light: '#version-claire',
  },
}
```

3. **Mettre à jour le contenu** :
   - `app/layout.tsx` : Changer title et description
   - `components/Hero.tsx` : Titre et slogan de Medstart
   - `components/MissionVision.tsx` : Mission spécifique à Medstart
   - `components/Platforms.tsx` : Remplacer par les features de Medstart
   - `components/Contact.tsx` : Email et coordonnées Medstart
   - `components/Logo.tsx` : Logo Medstart

4. **Ajuster les sections** selon vos besoins (vous pouvez supprimer la section "Platforms" puisque vous ne présenterez qu'une seule plateforme)

### Pour EDN.chat et ClinicalSearch.fr :

Répéter le même processus avec les couleurs et contenus appropriés.

## 🎨 Zones de Personnalisation Principales

### 0. Navbar (components/Navbar.tsx)
La barre de navigation en haut avec :
- Logo SCIVIO cliquable
- Liens de navigation vers les sections
- Bouton "Contactez-nous" mis en avant
- Effet translucide au scroll
- Responsive (le menu se cache sur mobile pour l'instant)

### 1. Couleurs (tailwind.config.js)
```javascript
primary: {
  DEFAULT: '#107bb3',  // ← Changez ici
  dark: '#005492',      // ← Et ici
  light: '#3d9bcf',     // ← Et ici
}
```

### 2. Métadonnées (app/layout.tsx)
```typescript
export const metadata: Metadata = {
  title: 'Votre titre',           // ← Changez ici
  description: 'Votre description', // ← Et ici
}
```

### 3. Hero (components/Hero.tsx)
- Ligne 20-23 : Titre principal
- Ligne 28-35 : Sous-titre et slogan
- Ligne 40-47 : Description
- Ligne 52-65 : Boutons CTA

### 4. Mission/Vision (components/MissionVision.tsx)
- Ligne 43-62 : Texte de la mission
- Ligne 66-85 : Texte de la vision
- Ligne 92-151 : Les 4 valeurs

### 5. Platforms (components/Platforms.tsx)
- Ligne 10-44 : Informations des 3 plateformes
  - `name` : Nom de la plateforme
  - `icon` : Icône (importée de lucide-react)
  - `color` : Couleur du gradient
  - `description` : Description courte
  - `features` : Liste des fonctionnalités
  - `url` : Lien vers la plateforme

### 6. Contact (components/Contact.tsx)
- Ligne 73 : Email
- Ligne 85 : Téléphone
- Ligne 97 : Adresse

### 7. Footer (components/Footer.tsx)
- Ligne 13-16 : Description
- Ligne 21-43 : Liens des plateformes
- Ligne 48-60 : Liens du menu

## 🎯 Conseils d'Utilisation

### Garder la Structure Simple
Le code est volontairement simple et direct. Évitez d'ajouter trop de complexité pour faciliter la maintenance.

### Réutiliser les Composants
Tous les composants sont dans `/components/`. Vous pouvez les réutiliser dans d'autres pages si nécessaire.

### Animations Framer Motion
Les animations sont déjà configurées. Si vous voulez en ajouter :
- Importez `motion` et `useInView` de framer-motion
- Utilisez `<motion.div>` au lieu de `<div>`
- Ajoutez les propriétés `initial`, `animate`, `transition`

Exemple :
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Votre contenu
</motion.div>
```

### Modifier les Icônes
Toutes les icônes viennent de [Lucide React](https://lucide.dev/). Pour en changer :
1. Visitez https://lucide.dev/icons/
2. Trouvez votre icône
3. Importez-la : `import { VotreIcone } from 'lucide-react'`
4. Utilisez-la : `<VotreIcone className="w-6 h-6" />`

## 📱 Responsive Design

Le template est déjà responsive. Les breakpoints Tailwind utilisés :
- **Mobile** : Par défaut (< 640px)
- **Tablette** : `sm:` (≥ 640px) et `md:` (≥ 768px)
- **Desktop** : `lg:` (≥ 1024px) et `xl:` (≥ 1280px)

## 🏗️ Build et Déploiement

### Build de production
```bash
npm run build
```

### Tester le build
```bash
npm run start
```

### Déploiement
Le projet peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- Ou tout autre service supportant Next.js

Pour Vercel :
1. Créez un compte sur vercel.com
2. Connectez votre repository GitHub
3. Vercel détectera automatiquement Next.js
4. Déployez en un clic

## 🔍 Checklist Avant Déploiement

- [ ] Toutes les URLs sont correctes
- [ ] Les couleurs correspondent à la marque
- [ ] Le logo est à jour
- [ ] Les métadonnées (title, description) sont personnalisées
- [ ] L'email et les coordonnées de contact sont corrects
- [ ] Les textes sont relus et sans fautes
- [ ] Le site est testé sur mobile et desktop
- [ ] Les liens externes s'ouvrent dans un nouvel onglet

## 🆘 Problèmes Courants

### Le site ne démarre pas
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules
npm install
```

### Les animations ne fonctionnent pas
Vérifiez que framer-motion est bien installé :
```bash
npm install framer-motion
```

### Les icônes ne s'affichent pas
Vérifiez que lucide-react est installé :
```bash
npm install lucide-react
```

## 📞 Support

Pour toute question sur ce template, n'hésitez pas à consulter :
- La documentation Next.js : https://nextjs.org/docs
- La documentation Tailwind : https://tailwindcss.com/docs
- La documentation Framer Motion : https://www.framer.com/motion/

---

**Bon développement ! 🚀**

