var data = [];
const myLocalStorage = window.localStorage.getItem('anon-responses');
if (myLocalStorage && myLocalStorage.length && myLocalStorage.length > 0) {
  data = JSON.parse(window.localStorage.getItem('anon-responses'));
}

const showButton = () => {
  document.getElementById('button').style.visibility = 'visible';
};

const enter = () => {
  const value = document.getElementById('input').value;
  if (value) {
    data.push(value);
    shuffle(data);
    window.localStorage.setItem('anon-responses', JSON.stringify(data));
  }
  document.getElementById('input').value = '';
  document.getElementById('button').style.visibility = 'hidden';
};

const inputEnter = (e) => {
  const hitEnter = (e.which === 13 || e.keyCode === 13);
  if (hitEnter) {
    enter();
  }
};

const clearData = () => {
  window.localStorage.setItem('anon-responses', JSON.stringify([]));
  data = [];
};

const shuffle = (array) => { // Fisher-Yates shuffle
  // i = from right to left
  for (let i = array.length - 1; i > 0; i--) {
    // j = any of the "unvisited" indices to the left of i
    const j = Math.floor(Math.random() * (i + 1)); // range from 0 to i (not 1 since floor of random 0 to 0.999...)
    // swap at i and j:
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
