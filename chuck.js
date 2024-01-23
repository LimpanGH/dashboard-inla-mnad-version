import axios from 'axios';

const urlEntryPoint = 'https://api.chucknorris.io/jokes/random';

export async function chuck() {
  try {
    const response = await axios.get(urlEntryPoint);
    const randomJoke = response.data.value;
    // console.log(randomJoke);
    return randomJoke;
  } catch (error) {
    console.error(error);
    return null;
  }
}
