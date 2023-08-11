const btn = document.querySelector('.btn-zoneAndTime');
const zoneInfo = document.querySelector('#zone');
const timeInfo = document.querySelector('#time');

const success = (position) => {

    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const href = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`;

    btn.addEventListener('click', () => {

      fetch(href)
      
          .then((response) => {

          const result = response.json();
          return result;
          })
      
          .then((data) => {

          zoneInfo.textContent = 'Your Time Zone:' + ' ' + data.timezone;
 
          timeInfo.textContent = 'Your Time Information:' + ' ' + data.date_time_txt;
          
          })
          });
};

navigator.geolocation.getCurrentPosition(success);
