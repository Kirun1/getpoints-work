$(document).ready(function() {
         $('.mobile-side-menu').slideFromTop({
            menuBtn: $('.toggleMenu'),
            navbar: $('.navbar'),
            menuSpeed: 500,
            bodyOverlay: $('.overlay')
         });
      });