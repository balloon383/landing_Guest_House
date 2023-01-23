const swiper = new Swiper('.swiper', {
  // Optional parameters
direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
  // If we need pagination
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});