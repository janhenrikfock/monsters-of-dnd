## Monsters of DnD

This is a companion-app for players of "dungeons and dragons 5e".
Using the API `https://github.com/bagelbits/5e-srd-api`, it lets the user search
for Monsters and makes the Data accessible as pdf, for better use in prep for the next session.

The App is optimized for mobile use, please switch your browser to responsive mode (iPhone 6/7/8)

## Impressions

![gif](screenshots/video_functionality.gif)

## Tech-Stack

- React
- React-Hooks
- React-Router
- styled-components
- uuid
- storybook
- Jest
- React Testing Library
- Cypress
- Fuse.js
- react-to-print

## Setup

- Clone this repository
- Install all dependencies using

```
$ npm install
```

- Run the app in development-mode with:

```
$ npm start
```

then open `http://localhost:3000` to view the app in your browser.

- Run unit tests with

```
$ npm run test
```

- open Storybook on a localhost with

```
$ npm run storybook
```

- to create a build ready for deploying:

```
npm run build
```
