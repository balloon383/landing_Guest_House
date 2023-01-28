
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
const yourAge = prompt("how old are you?")
const yourName = prompt("what is your name?")
const yourSecondName = prompt("what is your second name?")

console.log("User bio: user first name is " + yourName + ", user second name is " + yourSecondName + ", user age of birth is " + (2023 - +yourAge))
