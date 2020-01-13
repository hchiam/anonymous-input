/* eslint-disable require-jsdoc, no-unused-vars */

let data = [];
const myLocalStorage = window.localStorage.getItem('anon-responses');
if (myLocalStorage && myLocalStorage.length && myLocalStorage.length > 0) {
  data = JSON.parse(window.localStorage.getItem('anon-responses'));
}

function showButtons() {
  lock();
  const value = document.getElementById('input').value;
  if (value) {
    document.getElementById('input-button').style.visibility = 'visible';
  } else {
    document.getElementById('input-button').style.visibility = 'hidden';
  }
  if (data.length > 0) {
    document.getElementById('get-data').style.visibility = 'visible';
  } else {
    document.getElementById('get-data').style.visibility = 'hidden';
  }
};

function enter() {
  const value = document.getElementById('input').value;
  if (value) {
    data.push(value);
    shuffle(data);
    window.localStorage.setItem('anon-responses', JSON.stringify(data));
  }
  document.getElementById('input').value = '';
  document.getElementById('input-button').style.visibility = 'hidden';
  document.getElementById('input').focus();
};

function inputEnter(e) {
  const hitEnter = (e.which === 13 || e.keyCode === 13);
  if (hitEnter) {
    enter();
  }
};

function clearData() {
  window.localStorage.setItem('anon-responses', JSON.stringify([]));
  data = [];
  document.getElementById('output').value = '';
};

function shuffle(array) { // Fisher-Yates shuffle
  // i = from right to left
  for (let i = array.length - 1; i > 0; i--) {
    // j = any of the "unvisited" indices to the left of i
    // Range from 0 to i (not 1 since floor of random 0 to 0.999...):
    const j = Math.floor(Math.random() * (i + 1));
    // swap at i and j:
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

function showData() {
  document.getElementById('output').style.visibility = 'visible';
  document.getElementById('output').value = data.join('\n\n');
  document.getElementById('lock').style.visibility = 'visible';
  document.getElementById('password').value = '';
  document.getElementById('password').style.visibility = 'hidden';
  document.getElementById('password-prompt').style.visibility = 'hidden';
  document.getElementById('clear-data').style.visibility = 'visible';
};

let password = null;
// eslint-disable-next-line prefer-const
let dictionary = ['prompt,answer'];
function generatePassword() {
  const i = getRandomNumber(0, dictionary.length);
  const entry = dictionary[i].split(',');
  const prompt = obfuscatePrompt(entry[0]);
  password = entry[1];
  document.getElementById('password-prompt').textContent = prompt;
};

function requirePassword() {
  document.getElementById('get-data').style.visibility = 'hidden';
  document.getElementById('password').value = '';
  document.getElementById('password').style.visibility = 'visible';

  document.getElementById('password-prompt').style.visibility = 'visible';
  document.getElementById('lock').style.visibility = 'hidden';
  generatePassword();
  window.setTimeout(function() {
    document.getElementById('password').focus();
  }, 100);
};

function lock() {
  document.getElementById('get-data').style.visibility = 'visible';
  document.getElementById('password').value = '';
  document.getElementById('password').style.visibility = 'hidden';
  document.getElementById('password-prompt').style.visibility = 'hidden';
  document.getElementById('output').value = '';
  document.getElementById('output').style.visibility = 'hidden';
  document.getElementById('lock').style.visibility = 'hidden';
  document.getElementById('clear-data').style.visibility = 'hidden';
  document.getElementById('input').focus();
};

function checkPassword() {
  const input = document.getElementById('password').value;
  if (password.startsWith(input)) {
    if (input === password) {
      showData();
    }
  } else {
    lock();
  }
};

function getRandomNumber(min, max) {
  return min + Math.floor(Math.random() * max);
}

// eslint-disable-next-line prefer-const
let obfuscationMapping = {'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd',
  'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k',
  'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r',
  's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y',
  'z': 'z'};
function obfuscatePrompt(prompt) {
  let newPrompt = '';
  let useObfuscation = true;
  let len = getRandomNumber(1, 3);
  let i = 0;
  while (i < prompt.length) {
    if (useObfuscation) {
      const newLetter = obfuscationMapping[prompt[i]];
      newPrompt += newLetter;
    } else {
      newPrompt += prompt[i];
    }
    if (i >= len) {
      useObfuscation = !useObfuscation;
      len = i + getRandomNumber(1, 3);
    }
    i++;
  }
  return newPrompt;
}
