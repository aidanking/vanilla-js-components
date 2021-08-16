const btn = document.querySelector('.card__btn');
const text = document.querySelector('.card__text');
const textArea = document.querySelector('#text');

let isTextVisible = true;

function toggleText() {
  isTextVisible = !isTextVisible;

  if (isTextVisible) {
    btn.innerText = 'Hide Text';
  } else {
    btn.innerText = 'Show Text';
  }
  text.classList.toggle('hide');
}

function changeText() {
  const { value } = textArea;
  text.innerText = value;
}

btn.addEventListener('click', toggleText);
textArea.addEventListener('input', changeText);
