import axios from 'axios';

const apiKey = '' // Enter your api-key from Unsplash. https://unsplash.com/documentation#creating-a-developer-account

const unsplashApiUrl =
`https://api.unsplash.com/photos/random?client_id=${apiKey}`;

export async function getRandomImage() {
  try {
    const response = await axios.get(unsplashApiUrl);
    // console.log(response);
    const imgUrl = response.data.urls.regular;
    return imgUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const imageButton = document.querySelector('.new-image-button');
const body = document.querySelector('body');

imageButton.addEventListener('click', async () => {
  const randomImage = await getRandomImage();
  // console.log('Bild knappen lyssnar');
  body.style.backgroundImage = `url('${randomImage || 'https://source.unsplash.com/sn9A10W1Lmk'}')`;
});
