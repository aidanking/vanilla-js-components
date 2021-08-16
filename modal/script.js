const overlay = document.querySelector('.overlay');
const modal  = document.querySelector('.modal');
const openButton = document.querySelector('.open-btn');
const closeButton = document.querySelector('.modal__btn');

openButton.addEventListener('click', function() {
  overlay.style.display = 'flex';
});

closeButton.addEventListener('click', function() {
  overlay.style.display = 'none';
});

overlay.addEventListener('click', function(e) {
  const { target } = e;

  if(target.contains(modal)) {
    overlay.style.display = 'none';
  }
});