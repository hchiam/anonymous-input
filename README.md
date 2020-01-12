# anonymous-input

[![Build Status](https://travis-ci.org/hchiam/anonymous-input.svg?branch=master)](https://travis-ci.org/hchiam/anonymous-input)

A desktop app built using frontend web technologies (JS/HTML/CSS). Powered by Electron.js. Automatically tested with Travis CI, Spectron, and mocha. Built with electron-packager and npm/yarn. To learn more: [github.com/hchiam/learning](https://github.com/hchiam/learning#learning)

`npm install` or `yarn`

`npm start` or `yarn start` -> run locally

`npm build` or `yarn build` -> get executable file, e.g.: `anonymous-input-darwin-x64/anonymous-input.app`

`npm test` or `yarn test`

`npm manual-test` or `yarn manual-test`

## Optional files (you can add them for local testing/use)

* `dictionary.js`: `dictionary = ['prompt,answer', ...];`
* `obfuscationMapping.js`: `obfuscationMapping = {'a':'...', ...};`
