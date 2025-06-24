<!-- README.md -->

# SpreeFront

<!-- ![Logo SpreeFront](link-to-logo.png) -->

SpreeFront est un template d’application Angular moderne, conçu pour un développement web évolutif et personnalisable. Il exploite Angular 20, Tailwind CSS et PrimeNG pour offrir une expérience utilisateur riche, une gestion avancée des thèmes et une livraison rapide du frontend. L’intégration d’outils de linting, de formatage et d’automatisation des commits garantit une qualité de code constante et un workflow efficace.

## Table des matières

<!-- * [Démo](#démo) -->

- [Stack technique](#stack-technique)
- [Prise en main](#prise-en-main)
- [Lancement du projet](#lancement-du-projet)
- [Structure du projet](#structure-du-projet)
<!-- - [Documentation API](#documentation-api) -->
- [Tests](#tests)
- [Déploiement](#déploiement)
- [Variables d’environnement](#variables-denvironnement)
- [Contribuer](#contribuer)
- [Licence](#licence)
  <!-- * [Remerciements](#remerciements) -->
  <!-- * [Contact](#contact) -->

<!-- ## Démo

Lien vers une démo en ligne ou captures d’écran : -->

![Capture d’écran](link-to-screenshot.png)

## Stack technique

**Frontend :**

- [Angular 20](https://angular.io/)
- [PrimeNG](https://www.primefaces.org/primeng/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PrimeIcons](https://www.primefaces.org/primeicons/)

**Outils & automatisation :**

- ESLint (avec intégration Prettier)
- Husky (hooks Git)
- Commitizen & Commitlint (commits conventionnels)
- Lint-staged (vérifications pré-commit)
- Jasmine + Karma (tests unitaires)
- GitHub Actions (prêt pour CI/CD)

## Prise en main

### Prérequis

- Node.js (>=20.x)
- npm (>=9.x)
- [Angular CLI](https://angular.io/cli)

### Installation

```bash
git clone https://github.com/username/spree-front.git
cd spree-front
npm install
```

## Lancement du projet

Démarrer le serveur de développement :

```bash
npm start
```

Accédez à l’application sur [http://localhost:4200](http://localhost:4200).

## Structure du projet

```bash
├── src
│   ├── app              # Code principal de l’application Angular
│   ├── environments     # Fichiers de configuration d’environnement
│   ├── styles.css       # Styles globaux (Tailwind, PrimeIcons)
│   └── main.ts          # Bootstrap de l’application
├── public               # Assets statiques
├── angular.json         # Configuration Angular
├── package.json         # Scripts et dépendances
├── tsconfig*.json       # Configuration TypeScript
└── ...                  # Autres fichiers de configuration
```

<!--
## Documentation API

Ce template ne propose pas d’intégration API par défaut.
Ajoutez vos propres services ou liez la [documentation API](docs/api.md) ici si besoin. -->

## Tests

Les tests unitaires utilisent [Jasmine](https://jasmine.github.io/) et [Karma](https://karma-runner.github.io/) :

```bash
npm test
```

Configurez et lancez vos tests end-to-end selon vos besoins.

## Déploiement

Générez la version de production :

```bash
npm run build
```

Les fichiers prêts pour la production seront générés dans le dossier `dist/`. Déployez ce dossier sur l’hébergeur de votre choix.

## Variables d’environnement

Les variables sensibles ou spécifiques à l’environnement sont placées dans :

- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`

Exemple :

```ts
export const environment = {
  production: false,
  apiBaseUrl: "http://localhost:3000",
};
```

## Contribuer

En tant que collaborateur, on peut suivre ces étapes :

1. Clone le repo
2. S'assurer que la branche `dev` est à jour (`git pull origin dev`)
3. Créer une branche (`git checkout -b feat/nom-de-la-fonctionnalite`)
4. Commiter les changements (`git commit -m 'feat: ajoute la fonctionnalité'` ou `npm run commit`)
5. Pusher la branche (`git push origin feat/nom-de-la-fonctionnalite`)
6. Créer une Pull Request

Les contributions externes sont bienvenues ! Merci de suivre ces étapes :

1. Fork le repo
2. Crée une nouvelle branche (`git checkout -b feat/nom-de-la-fonctionnalite`)
3. Commiter les changements (`git commit -m 'feat: ajoute la fonctionnalité'`)
4. Push ta branche (`git push origin feat/nom-de-la-fonctionnalite`)
5. Crée une Pull Request

> **Commitizen** et **Commitlint** assurent la standardisation des messages de commit.

## Licence

UNLICENSED

<!-- ## Remerciements

Merci à :

* [Angular](https://angular.io/)
* [PrimeNG](https://www.primefaces.org/primeng/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Commitizen](http://commitizen.github.io/cz-cli/)
* [Jasmine](https://jasmine.github.io/) -->

<!-- ## Contact

Votre Nom – [your.email@example.com](mailto:your.email@example.com)
[Lien du projet](https://github.com/username/spree-front) -->

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
