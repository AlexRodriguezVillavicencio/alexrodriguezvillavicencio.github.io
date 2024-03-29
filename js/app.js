/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'json/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

// parallax
(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector("#home");
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
      50 - (_mouseY - _h) * 0.06
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

// projects container
document.querySelector('#Data-Engineer').addEventListener('click', () =>{
  document.querySelector('#Dan').style.display = 'none'
  document.querySelector('#Ding').style.display = 'block'
  document.querySelector('#MLing').style.display = 'none'
  document.querySelector('#Sing').style.display = 'none'
})
document.querySelector('#Data-Analytics').addEventListener('click', () =>{
  document.querySelector('#Dan').style.display = 'block'
  document.querySelector('#Ding').style.display = 'none'
  document.querySelector('#MLing').style.display = 'none'
  document.querySelector('#Sing').style.display = 'none'
})
document.querySelector('#Software-Engineer').addEventListener('click', () =>{
  document.querySelector('#Dan').style.display = 'none'
  document.querySelector('#Ding').style.display = 'none'
  document.querySelector('#MLing').style.display = 'none'
  document.querySelector('#Sing').style.display = 'block'
})
document.querySelector('#Machine-learning-Engineer').addEventListener('click', () =>{
  document.querySelector('#Dan').style.display = 'none'
  document.querySelector('#Ding').style.display = 'none'
  document.querySelector('#MLing').style.display = 'block'
  document.querySelector('#Sing').style.display = 'none'
})