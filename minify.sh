#!/usr/bin/env bash

minify style.css > minified-style.css;

if [[ -f "dictionary.js" && -f "obfuscationMapping.js" ]]; then
  minify index.js dictionary.js obfuscationMapping.js > minified-script.js
elif [[ -f "dictionary.js" ]]; then
  minify index.js dictionary.js > minified-script.js
elif [[ -f "obfuscationMapping.js" ]]; then
  minify index.js obfuscationMapping.js > minified-script.js
else
  minify index.js > minified-script.js
fi
