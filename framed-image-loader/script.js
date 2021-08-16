const image = document.querySelector('.image');

const urlInput = document.querySelector('#url');
const colorInput = document.querySelector('#color');

const widthInput = document.querySelector('#width');

const imageData = {
  url: image.src,
  color: '#ffffff',
  width: '10px',
};

function init() {
  const { url, color, width } = imageData;

  urlInput.value = url;
  colorInput.value = color;
  widthInput.value = width;
}

urlInput.addEventListener('change', function () {
  const { value } = urlInput;

  imageData.url = value;

  image.src = imageData.url;
});

colorInput.addEventListener('change', function () {
  const { value } = colorInput;

  imageData.color = value;

  image.style.borderColor = imageData.color;
});

widthInput.addEventListener('change', function () {
  const { value } = widthInput;

  imageData.width = `${value}px`;

  image.style.borderWidth = imageData.width;
});

init(imageData);
