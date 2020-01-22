# Memory Game ♠️

A memory card game built with [Vue.js](https://vuejs.org/), [Vuex](https://vuex.vuejs.org/), and [Tailwind CSS](https://tailwindcss.com/).

There are 12 paired playing cards that start face down. Use a mouse or keyboard to click two cards to compare. If they match, they are removed from play. If they do not match, they flip back around.

Once all pairs have been found, you can play again.

To play faster, use the "cheat" button to reveal all card faces.

## Accessibility ⌨️

All cards are keyboard accessible. Names of cards are revealed to screen readers once flipped.

## Design 🎨

I'm using [Tailwind CSS](https://tailwindcss.com/) for quick utility classes and [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) to layout the cards.

## Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/503c6994-4ba3-4b3d-9c1b-60b6d6699d13/deploy-status)](https://app.netlify.com/sites/colt-memory-game/deploys)

This project is deployed by [Netlify](https://www.netlify.com/) to [memory-game.coltborg.com](https://memory-game.coltborg.com).

## Project setup 🏗
Before doing anything, make sure dependencies are installed.

```bash
yarn install

# or

npm install
```

### Compiles and hot-reloads for development 🧪
To run this app locally, start the local server.

```bash
yarn serve

# or

npm serve
```

### Compiles and minifies for production 📦
Used to build for production, in this case [Netlify](https://www.netlify.com/).

```bash
yarn build

# or

npm build
```

### Run your unit tests 🔬
```bash
yarn test:unit

# or

npm test:unit
```

If you watch to watch tests while developing.

```bash
yarn test:unit --watch

# or

npm test:unit --watch
```

### Lints and fixes files 🧼
Using [ESLint](https://eslint.org/) to lint and [VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to fix on save. Using [AirBnB](https://github.com/airbnb/javascript) and [Vue code style guide](https://eslint.vuejs.org/).

```bash
yarn lint

# or

npm lint
```
