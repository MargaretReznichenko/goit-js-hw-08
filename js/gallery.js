//1.Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного
//зображення в модальному вікні.Подивись демовідео роботи галереї.
//2. Для створення елементів галереї тобі знадобляться дані. Додай цей масив об’єктів у свій JavaScript файл. Кожний об’єкт являє собою один елемент галереї.

//preview — посилання на маленьку версію зображення для картки галереї
//original — посилання на велику версію зображення для модального вікна
//description — текстовий опис зображення, для атрибута alt малого зображення та
//підпису великого зображення в модалці.

'use strict';
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

function task(arr) {
  const gallery = document.querySelector('.gallery');
  const galleryList = arr
    .map(
      elem => `<li class="gallery-item">
        <a class="gallery-link" href=${elem.original}>
          <img
            class="gallery-image"
            src=${elem.preview}
            data-source=${elem.original}
            alt=${elem.description}
          />
        </a>
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('afterbegin', galleryList);
  gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
      const largeImgPath = event.target.getAttribute('data-source');
      const instance = basicLightbox.create(`
    <img src=${largeImgPath} width="1112" height="640">
`);

      instance.show();
    }
  });
}

task(images);