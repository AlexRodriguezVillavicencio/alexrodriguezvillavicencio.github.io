const toggle_menu = document.querySelector('.hamburger-menu');
const nav_menu = document.querySelector('#nav-menu');
const aside_menu = document.querySelector('#aside-menu');

toggle_menu.addEventListener('click', () => {
  nav_menu.classList.toggle('nav-menu-visible');
  aside_menu.classList.toggle('aside-menu-visible');
});


$(function () {
  TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="color-text-dom">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.innerHTML = ".txt-rotate > .color-text-dom { color: red;}";
    document.body.appendChild(css);
  };
})


const d = document;
const home_link = d.getElementById('home-link');
const about_link = d.getElementById('about-link');
const project_link = d.getElementById('project-link');

const home = d.getElementById('home');
const about = d.getElementById('about');
const project = d.getElementById('project');


var audio_click = new Audio("./audio/click.mp3")
var audio_aire = new Audio("./audio/aire.mp3")
audio_aire.volume = 0.3;
var audio_calma = new Audio("./audio/calma.mp3")


about_link.addEventListener('click', () => {

  if (window.matchMedia("(max-width: 768px)").matches) {
    home_link.style.display = 'block';
    project_link.style.display = 'block';
    about_link.style.display = 'block';

    nav_menu.classList.remove('nav-menu-visible');
    aside_menu.classList.remove('aside-menu-visible');
  }
  else {
    home_link.style.display = 'block';
    project_link.style.display = 'block';
    about_link.style.display = 'none';
  }

  home.style.display = 'none';
  project.style.display = 'none';
  about.style.display = 'block';
  audio_calma.play();
});


home_link.addEventListener('click', () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    home_link.style.display = 'block';
    project_link.style.display = 'block';
    about_link.style.display = 'block';

    nav_menu.classList.remove('nav-menu-visible');
    aside_menu.classList.remove('aside-menu-visible');
  }
  else {
    home_link.style.display = 'none';
    project_link.style.display = 'block';
    about_link.style.display = 'block';
  }

  home.style.display = 'block';
  project.style.display = 'none';
  about.style.display = 'none';
  audio_calma.play();
});

project_link.addEventListener('click', () => {
  if (window.matchMedia("(max-width: 768px)").matches) {
    home_link.style.display = 'block';
    project_link.style.display = 'block';
    about_link.style.display = 'block';

    nav_menu.classList.remove('nav-menu-visible');
    aside_menu.classList.remove('aside-menu-visible');
  }
  else {
    home_link.style.display = 'block';
    project_link.style.display = 'none';
    about_link.style.display = 'block';
  }

  home.style.display = 'none';
  project.style.display = 'block';
  about.style.display = 'none';
  audio_calma.pause();
});


$(document).ready(function(){
  $('.btn-theme-outline').click(function(){
      var value = $(this).attr('data-categories');
      
      if(value == 'all'){
          $('.card').show('1');
      }else{
          $('.card').not('.' + value).hide('1');
          $('.card').filter('.' + value).show('1');
      }

      $(this).addClass('selected').siblings().removeClass('selected');
  })
})