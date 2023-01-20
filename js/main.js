const swiper = new Swiper('.swiper', {
  // Optional parameters
direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
  // If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    slidesPerView: 1, 
    /* breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 4,
            spaceBetween: 20
        },
    } */
});