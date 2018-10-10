import 'bootstrap';
// Alternatively we can import features individually.
// Also make sure to update the project.config.js if you are going to take this approach
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

// import App from './App';
// import { TimelineMax, CSSPlugin, ScrollToPlugin, Draggable } from "gsap/all";

$("a[href*='#']:not([href='#']):not('.carousel-control-next'):not('.carousel-control-prev')").click(function(e) {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    e.preventDefault();
    
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 80
      }, 1000);
      window.location.hash = this.hash;
      return false;
    }
  }
});