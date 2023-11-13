const gallery = document.querySelector('.photo-gallery');
const viewer = document.querySelector('.photo-viewer');
const viewerImg = viewer.querySelector('img');
const viewerLegend = viewer.querySelector('.photo-legend');
const closeBtn = viewer.querySelector('.close-button');
const prevBtn = viewer.querySelector('.prev-button');
const nextBtn = viewer.querySelector('.next-button');
const photos = gallery.querySelectorAll('.photo');

let currentPhotoIndex = 0;

photos.forEach((photo, index) => {
  photo.addEventListener('click', () => {
    currentPhotoIndex = index;
    const imgSrc = photo.querySelector('img').getAttribute('src');
    const legend = photo.querySelector('img').getAttribute('alt');
    viewerImg.setAttribute('src', imgSrc);
    viewerLegend.textContent = legend;
    viewer.style.display = 'block';
  });
});

function closePhotoViewer() {
    viewer.style.display = 'none';
    document.body.style.overflow = 'auto'; // Відновити прокручування
  }
  
  viewer.addEventListener('click', (e) => {
    if (e.target === viewer) {
      closePhotoViewer();
    }
  });
  
  closeBtn.addEventListener('click', () => {
    closePhotoViewer();
  });

function disableScroll() {
    document.body.style.overflow = 'hidden';
  }
  
  function enableScroll() {
    document.body.style.overflow = 'auto';
  }
  
  photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
      currentPhotoIndex = index;
      const imgSrc = photo.querySelector('img').getAttribute('src');
      const legend = photo.querySelector('img').getAttribute('alt');
      viewerImg.setAttribute('src', imgSrc);
      viewerLegend.textContent = legend;
      viewer.style.display = 'block';
      disableScroll(); // Заборонити прокручування
    });
  });

prevBtn.addEventListener('click', () => {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  const imgSrc = photos[currentPhotoIndex].querySelector('img').getAttribute('src');
  const legend = photos[currentPhotoIndex].querySelector('img').getAttribute('alt');
  viewerImg.setAttribute('src', imgSrc);
  viewerLegend.textContent = legend;
});

nextBtn.addEventListener('click', () => {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  const imgSrc = photos[currentPhotoIndex].querySelector('img').getAttribute('src');
  const legend = photos[currentPhotoIndex].querySelector('img').getAttribute('alt');
  viewerImg.setAttribute('src', imgSrc);
  viewerLegend.textContent = legend;
});

