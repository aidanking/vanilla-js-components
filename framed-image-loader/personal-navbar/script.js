const nameInput = document.querySelector('#name');
const nameText = document.querySelector('.name-text');

nameInput.addEventListener('change', function () {
  const { value } = nameInput;
  nameText.innerText = value;
});
