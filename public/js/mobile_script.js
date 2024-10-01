// Select all images with the class 'open-lightbox'
const lightboxLinks = document.querySelectorAll('.open-lightbox');
const lightbox = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// When an image is clicked, open the lightbox with the clicked image's src
lightboxLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const imgSrc = this.querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex'; // Show the modal
  });
});

// Close the lightbox when the 'x' button is clicked
closeBtn.addEventListener('click', function () {
  lightbox.style.display = 'none'; // Hide the modal
});

// Close the lightbox if clicked outside the image
lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

console.log("Script file working");
