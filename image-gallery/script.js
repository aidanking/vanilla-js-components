const galleryFigure = document.querySelector('.image-gallery__figure');
const images = [
  { src: 'https://unsplash.it/500/400', alt: 'Image One' },
  { src: 'https://unsplash.it/500/500', alt: 'Image Two' },
  { src: 'https://unsplash.it/600/600', alt: 'Image Three' },
];
let currentImageIndex = 0;

document.body.addEventListener('keyup', updateToNextImage);
galleryFigure.addEventListener('click', updateToRandomImage);

updateImage();

function updateToNextImage(e) {
  const { code } = e;

  if (code === 'Space') {
    updateToRandomImage();
  }

  if (code === 'ArrowRight') {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    updateImage();
  }

  if (code === 'ArrowLeft') {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    updateImage();
  }
  console.log(currentImageIndex);
}

function updateToRandomImage() {
  let randomIndex;
  do {
    randomIndex = getRandomInt(images.length);
  } while (randomIndex === currentImageIndex);
  currentImageIndex = randomIndex;
  updateImage();
}

function updateImage() {
  const currentImage = galleryFigure.querySelector('.image-gallery__image');
  if (currentImage) {
    currentImage.remove();
  }

  const currentImageData = images[currentImageIndex];
  const galleryImage = document.createElement('img');
  galleryImage.className = 'image-gallery__image';
  galleryImage.height = 400;
  galleryImage.width = 500;
  galleryImage.src = currentImageData.src;
  galleryImage.alt = currentImageData.alt;
  galleryFigure.append(galleryImage);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
