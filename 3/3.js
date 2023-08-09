const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');
const btn = document.querySelector('.j-btn-test');
const wah = document.querySelector('#wah');

const error = () => {
  status.textContent = 'Информация о местоположении недоступна';
}

const success = (position) => {
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  const width = window.screen.width;
  const height = window.screen.height;

  status.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
   wah.textContent = `Ширина экрана: ${width}, Высота экрана: ${height}`;
}
 

btn.addEventListener('click', () => {
  mapLink.href = '';
  mapLink.textContent = '';
  
  if (!navigator.geolocation) {
    status.textContent = 'Geolocation не поддерживается вашим браузером';
  } else {
    status.textContent = 'Определение местоположения…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
