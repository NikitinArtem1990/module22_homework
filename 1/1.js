const btn = document.querySelector('.j-btn-test');
const chart = document.querySelector('.j-chart');

btn.addEventListener('click', () => {
  chart.innerHTML = `
  
<div>
  <h3>Россия</h3>
  <svg height="120" width="180">
    <line style="stroke:rgb(255,255,255);stroke-width:80"
      x1="0" y1="0"
      x2="180" y2="0"
    />
    <line style="stroke:rgb(0,0,255);stroke-width:40"
      x1="0" y1="60"
      x2="180" y2="60"
    />
     <line style="stroke:rgb(255,0,0);stroke-width:40"
      x1="0" y1="100"
      x2="180" y2="100"
    />
    <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="180" y2="0"
    />
     <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="0" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="180" y1="0"
      x2="180" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="120"
      x2="180" y2="120"
    />
  </svg>
  </div>
  
 <br/>

<div>
  <h3>Франция</h3>
  <svg height="120" width="180">
    <line style="stroke:rgb(0,0,255);stroke-width:120"
      x1="0" y1="0"
      x2="0" y2="180"
    />
    <line style="stroke:rgb(255,255,255);stroke-width:60"
      x1="120" y1="0"
      x2="120" y2="180"
    />
     <line style="stroke:rgb(255,0,0);stroke-width:60"
      x1="150" y1="0"
      x2="150" y2="180"
    />
    <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="180" y2="0"
    />
     <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="0" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="180" y1="0"
      x2="180" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="120"
      x2="180" y2="120"
    />
  </svg>
  </div>

<br/>

<div>
  <h3>Финляндия</h3>
  <svg height="120" width="180">
   <polygon points="20,50 60,50 60,20 80,20 80,50 160,50 160,70 80,70 80,100 60,100 60,70 20,70"
            style="fill:blue;"/>
    <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="180" y2="0"
    />
     <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="0" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="180" y1="0"
      x2="180" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="120"
      x2="180" y2="120"
    />
  </svg>
  </div>

<br/>

<div>
  <h3>Швейцария</h3>
  <svg class='swiss' height="120" width="180">
    
   <polygon points="45,45 75,45 75,15 105,15 105,45 135,45 135,75 105,75 105,105 75,105 75,75 45,75"
            style="fill:white;"/>
    <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="180" y2="0"
    />
     <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="0" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="180" y1="0"
      x2="180" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="120"
      x2="180" y2="120"
    />
  </svg>
  </div>

<br/>

<div>
  <h3>Япония</h3>
  <svg height="120" width="180">
    
   <circle cx="90" cy="60" r="40" style="fill:red;"/>
    <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="180" y2="0"
    />
     <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="0"
      x2="0" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="180" y1="0"
      x2="180" y2="120"
    />
      <line style="stroke:rgb(0,0,0);stroke-width:2"
      x1="0" y1="120"
      x2="180" y2="120"
    />
  </svg>
  </div>

<br/>`;
});
