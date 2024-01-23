import axios from 'axios';
const urlEntryPoint = 'https://opendata-download-metfcst.smhi.se';

const urlForeCast = `${urlEntryPoint}/api/category/pmp3g/version/2/geotype/point/lon/16/lat/58/data.json`;
const urlGetPointForecast = `${urlEntryPoint}/api/category/pmp3g/version/2/geotype/point/lon/16/lat/58/data.json`;
const urlGetParameter = `${urlEntryPoint}/api/category/pmp3g/version/2/parameter.json`;

export async function weatherFunction(long = 16, lat = 58) {
  try {
    const response = await axios.get(
      `${urlEntryPoint}/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`
    );

    return {
      today: response.data.timeSeries[0],
      tempToday: response.data.timeSeries[0].parameters[10].values[0],
      tomorrow: response.data.timeSeries[24],
      tempTomorrow: response.data.timeSeries[24].parameters[10].values[0],
      day3: response.data.timeSeries[48],
      tempDayAfterTomorrow:
        response.data.timeSeries[48].parameters[10].values[0],
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

const button = document.querySelector('.button');
button.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = Math.floor(position.coords.latitude);
    const long = Math.floor(position.coords.longitude);
    weatherFunction(long, lat);
    console.log(`Your current location is: ${long}, ${lat}`);
  });
});

const pcat = {
  0: 'No precipitation',
  1: 'Snow',
  2: 'Snow and rain',
  3: 'Rain',
  4: 'Drizzle',
  5: 'Freezing rain',
  6: 'Freezing drizzle',
};

export const Wsymb2 = {
  1: { name: 'Klar himmel', icon: '🌞' },
  2: { name: 'Nästan klar himmel', icon: '🌤️' },
  3: { name: 'Växlande molnighet', icon: '🌥️' },
  4: { name: 'Halvklar himmel', icon: '🌥️' },
  5: { name: 'Molnig himmel', icon: '☁️' },
  6: { name: 'Mulet', icon: '☁️' },
  7: { name: 'Dimma', icon: '🌫️' },
  8: { name: 'Lätt regnskurar', icon: '🌧️' },
  9: { name: 'Måttliga regnskurar', icon: '🌧️' },
  10: { name: 'Tunga regnskurar', icon: '🌧️' },
  11: { name: 'Åskväder', icon: '⛈️' },
  12: { name: 'Lätta snöblandade regnskurar', icon: '🌨️' },
  13: { name: 'Måttliga snöblandade regnskurar', icon: '🌨️' },
  14: { name: 'Tunga snöblandade regnskurar', icon: '🌨️' },
  15: { name: 'Lätta snöbyar', icon: '🌨️' },
  16: { name: 'Måttliga snöbyar', icon: '🌨️' },
  17: { name: 'Tunga snöbyar', icon: '🌨️' },
  18: { name: 'Lätt regn', icon: '🌧️' },
  19: { name: 'Måttligt regn', icon: '🌧️' },
  20: { name: 'Tungt regn', icon: '🌧️' },
  21: { name: 'Åska', icon: '⛈️' },
  22: { name: 'Lätt snöblandat regn', icon: '🌨️' },
  23: { name: 'Måttligt snöblandat regn', icon: '🌨️' },
  24: { name: 'Tungt snöblandat regn', icon: '🌨️' },
  25: { name: 'Lätt snöfall', icon: '🌨️' },
  26: { name: 'Måttligt snöfall', icon: '🌨️' },
  27: { name: 'Tungt snöfall', icon: '🌨️' },
};
