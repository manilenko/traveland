const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,

   },

   slidesPerView: 4,
   spaceBetween: 60,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 320px
      320: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
         slidesPerView: 3,
         spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 4,
         spaceBetween: 40
      }
   }
});