const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com/');

const intput = document.getElementById('inputID');
const btnSend = document.querySelector('.btn-send');
const btnGeo = document.querySelector('.btn-geo');

function writeToScreen(message) {
    let pre = document.createElement("p");
    pre.className = "userP";
    pre.innerHTML = message;
    output.appendChild(pre);
  }

  function answerServer(message) {
    let pre2 = document.createElement("p");
    pre2.className = "serverP";
    pre2.innerHTML = message;
    output.appendChild(pre2);
  }

  btnSend.addEventListener('click', () => {
    
    let message = intput.value;
    writeToScreen("User: " + message);
    websocket.send(message);
    answerServer("Server: " + message);
    websocket.send(message);
  });

  function writeGeo(location) {
    let pre3 = document.createElement("a");
    pre3.className = "geoP";
    pre3.innerHTML = location;
    output.appendChild(pre3);
  };

  btnGeo.addEventListener('click', () => {
    
    let location = '';    

    writeGeo(location);

    const geoTrue = document.querySelector('.geoP');

    
      geoTrue.textContent = 'Определение местоположения…';
      
          const success = (position) => {
        console.log('position', position);
        
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(latitude);
      
        geoTrue.setAttribute('href', `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
        geoTrue.textContent = 'Гео-локация';
        
         }

      navigator.geolocation.getCurrentPosition(success);

    websocket.send(location);
    
        });
