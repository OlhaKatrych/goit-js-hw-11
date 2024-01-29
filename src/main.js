import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '42087776-9136d7523d21dc11bf8e1a72d';

const form = document.querySelector('.form');
const input = document.querySelector('input');
const list = document.querySelector('.list');

form.addEventListener('submit', handleSearch);

function handleSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const query = form.elements.query.value;
  searchPhotos(query)
    .then(data => {
      console.log(data);
      let markup = '';
      const datas = data.hits;
      for (const item of datas) {
        markup += createMarkup(item);
      }
      if (datas.length === 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
      }
      list.innerHTML = markup;
    })
    .catch(err => console.log(err))
    .finally(() => form.reset());
}

function searchPhotos(query) {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${urlParams}`).then(resp => {
    if (!resp.ok) {
      throw Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return ` <li class="gallery-item">
  <a class="gallery-link" href=${webformatURL}>
    <img
      class="gallery-image"
      src=${largeImageURL}
      alt=${tags}
      <p>${likes}</p>
      <p>${views}</p>
      <p>${comments}</p>
      <p>${downloads}</p>   
    />
  </a>
</li>`;
}
