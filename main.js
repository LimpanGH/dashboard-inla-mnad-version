// unsplash
import { getRandomImage } from './getBkgImage.js';

// Time/date
import { updateDateTime } from './clock.js';
import { updateDateDate } from './clock.js';

// Weather
import { weatherFunction, Wsymb2 } from './weather.js';

// Chuck
import { chuck } from './chuck.js';

// Links
import {
  displayLinks,
  removeLink,
  displayInputFields,
  saveNewLink,
} from './links.js';
import axios from 'axios';

// Väder ⬇ ----------------------------

const weatherElement = document.querySelector('[data-weather]');
weatherElement.id = 'weather-items';

function renderWeather(weatherData) {
  const todayIcon = weatherData.today.parameters.find(
    (p) => p.name === 'Wsymb2'
  );
  const tomorrowIcon = weatherData.tomorrow.parameters.find(
    (p) => p.name === 'Wsymb2'
  );
  const day3Icon = weatherData.day3.parameters.find((p) => p.name === 'Wsymb2');

  weatherElement.innerHTML = `
    <div class="weather-cards">
      <div class="icon">${Wsymb2[todayIcon.values[0]].icon}</div> 
      <div class="info">
        <div class="dag">Idag:</div>
        <div class="temp">${weatherData.tempToday}°C</div>
        <div class="weather-text-card">${Wsymb2[todayIcon.values[0]].name}</div>
      </div>
    </div>

    <div class="weather-cards">
      <div class="icon">${Wsymb2[tomorrowIcon.values[0]].icon}</div> 
      <div class="info">
        <div class="dag">Imorgon:</div>  
        <div class="temp">${weatherData.tempTomorrow}°C</div>
        <div class="weather-text-card">${
          Wsymb2[tomorrowIcon.values[0]].name
        }</div>
      </div>
    </div>

    <div class="weather-cards">
      <div class="icon">${Wsymb2[day3Icon.values[0]].icon}</div> 
      <div class="info">
        <div class="dag">I övermorgon:</div>  
        <div class="temp">${weatherData.tempDayAfterTomorrow}°C</div>
        <div class="weather-text-card">${Wsymb2[day3Icon.values[0]].name}</div>
      </div>
    </div>
  `;
}

// Väder ----------------------------

// Runs function for random bkg image -------------------------
async function init() {
  const randomImage = await getRandomImage();
  // console.log(randomImage);
  const weatherData = await weatherFunction();
  renderWeather(weatherData);
}
init();

// Links area ⬇ --------------------------

const linkButton = document.querySelector('#add-link');

// Knappen "Lägg till länk"
document.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.matches('#add-link')) {
    e.preventDefault();
    displayInputFields();
    // saveLink();
  }
});

// Kör knappen spara-länk
document.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.matches('#save-new-link-btn')) {
    e.preventDefault();
    saveNewLink();
  }
});

//Kör remove-knapp"
document.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target.matches('#remove-button')) {
    e.preventDefault();
    removeLink();
  }
  displayLinks();
});
// Links area   --------------------------

// Function-calls ---------------------------------------
updateDateTime();
updateDateDate();

// Text-area ⬇ ----------
function saveToLocalStorage() {
  const noteTextarea = document.querySelector('.note-area');
  const noteText = noteTextarea.value.trim();

  if (noteText) {
    localStorage.setItem('savedNote', noteText);
  } else {
    localStorage.removeItem('savedNote');
  }
}

const noteTextarea = document.querySelector('.note-area');
noteTextarea.addEventListener('input', saveToLocalStorage);
// Text-area ----------

// Name-area ⬇ ----------
function saveNameToLocalstorage() {
  const nameInput = document.querySelector('.nameSection');
  const name = nameInput.value.trim();

  if (name) {
    localStorage.setItem('enteredName', name);
  } else {
    localStorage.removeItem('enteredName');
  }
}

const nameInput = document.querySelector('.nameSection');
nameInput.addEventListener('input', saveNameToLocalstorage);
// Name-area    ----------

// Window.onload for saveToLocalStorage and saveNameToLocalstorage
window.onload = function () {
  const savedNote = localStorage.getItem('savedNote');
  if (savedNote) {
    noteTextarea.value = savedNote;
  }

  const savedName = localStorage.getItem('enteredName');
  if (savedName) {
    nameInput.value = savedName;
  }
};

const chuckArea = document.querySelector('.chuck-area');
chuckArea.value = await chuck();
