# anonymous-input

[![Build Status](https://travis-ci.org/hchiam/anonymous-input.svg?branch=master)](https://travis-ci.org/hchiam/anonymous-input)

A desktop app built using frontend web technologies (JS/HTML/CSS). Powered by Electron.js. Automatically tested with Travis CI, Spectron, and mocha. Built with electron-packager and npm/yarn. To learn more: [github.com/hchiam/learning](https://github.com/hchiam/learning#learning)

[anonymous-input-darwin-x64.zip](https://github.com/hchiam/anonymous-input/blob/master/anonymous-input-darwin-x64.zip)

## Optional files (you can add them for local testing/use)

* `dictionary.js`: `dictionary = ['prompt,answer', ...];`
* `obfuscationMapping.js`: `obfuscationMapping = {'a':'...', ...};`

## Useful CLI commands

`yarn` or `npm install` -> initial one-time setup

`yarn start` or `npm run start` -> run the app locally from CLI (no file minification/build performed)

`yarn build` or `npm run build` -> get executable file, e.g.: `anonymous-input-darwin-x64/anonymous-input.app`, which you can run by clicking on it

`yarn test` or `npm run test` -> run automated tests

`yarn test` or `npm run manual-test` -> run the same version of the app that the automated tests run, but one that you can test manually

`yarn zip` or `npm run zip` -> zip the build (automatically detects the build folder with a name that starts with "anonymous-input-")
