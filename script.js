<script>
// Auto Image Slider for Hero Section
const hero = document.querySelector('.hero');
const images = [
  'https://source.unsplash.com/random/1920x1080?nature',
  'https://source.unsplash.com/random/1920x1080?city',
  'https://source.unsplash.com/random/1920x1080?technology',
  'https://source.unsplash.com/random/1920x1080?business'
];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
}, 5000); // Change every 5 seconds
</script>
