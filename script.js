const hero = document.getElementById("dynamic-hero");
const backgrounds = [
  "assets/bg1.jpg",
  "assets/bg2.jpg",
  "assets/bg3.jpg"
];

let index = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${backgrounds[index]}')`;
  index = (index + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000); // change every 5 seconds
changeBackground(); // Initial call
