const themeLink = document.querySelector('#theme');
const themeSelect = document.querySelector('#theme-select');

themeSelect.addEventListener('change', function () {
  const { value } = themeSelect;
  themeLink.href = `theme-${value}.css`;
});
