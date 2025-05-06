// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const images = document.querySelectorAll('img');
  const element = document.getElementById("horn-select");
  const image1 = images[0];
  const image2 = images[1];
  const bar = document.getElementById('volume');
  const button = document.querySelector('button');
  const audio_air_horn = new Audio('assets/audio/air-horn.mp3');
  const audio_car_horn = new Audio('assets/audio/car-horn.mp3');
  const audio_party_horn = new Audio('assets/audio/party-horn.mp3');
  const jsConfetti = new JSConfetti();

  // to change photo when selecting horn
  element.addEventListener("change", () => {
    if (element.value=="air-horn") {
      image1.src = 'assets/images/air-horn.svg';
    }
    if (element.value == "car-horn") {
      image1.src = 'assets/images/car-horn.svg';
    }
    if (element.value == "party-horn") {
      image1.src = 'assets/images/party-horn.svg'
    }
  });

  // to change volume icon and sound level 
  bar.addEventListener("input", () => {
    if (bar.value == 0) {
      image2.src = 'assets/icons/volume-level-0.svg';
    }  
    if (bar.value >= 1 && bar.value < 33) {
      image2.src = 'assets/icons/volume-level-1.svg';
    }
    if (bar.value >= 33 && bar.value <= 67) {
      image2.src = 'assets/icons/volume-level-2.svg';
    }
    if (bar.value >= 67) {
      image2.src = 'assets/icons/volume-level-3.svg';
    }
    const volume = bar.value / 100;
    audio_air_horn.volume = volume;
    audio_car_horn.volume = volume;
    audio_party_horn.volume = volume;
  });

  // adding the button to make the sound
  button.addEventListener('click', () => {
    if (element.value=="air-horn") {
      audio_air_horn.play();     
    }
    if (element.value == "car-horn") {
      audio_car_horn.play();
    }
    if (element.value == "party-horn") {
      audio_party_horn.play();
      jsConfetti.addConfetti()
    }
  });

};

