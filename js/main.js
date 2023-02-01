
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
const yourName = prompt('What is your name?');
const yourSecondName = prompt('What is your second name?');
const yourDayOfBirth = +prompt('What is your day of birth');
const yourMonthOfBirth = +prompt('What is your month of birth');
const yourYearOfBirth = +prompt('What is your year of birth?');
const yourAge = 2023 - yourYearOfBirth;
let yourZodiac
if (yourDayOfBirth > 31 || yourMonthOfBirth > 12) {
  yourZodiac = 'Wrong day or month of birth'
} else if ((yourDayOfBirth >= 20 && yourMonthOfBirth == 1) || (yourDayOfBirth <= 18 && yourMonthOfBirth == 2)) {
    yourZodiac = 'Aquaris';
} else if ((yourDayOfBirth >= 19 && yourMonthOfBirth == 2) || (yourDayOfBirth <= 20 && yourMonthOfBirth == 3)){
    yourZodiac = 'Pisces';
} else if ((yourDayOfBirth >= 21 && yourMonthOfBirth == 3) || (yourDayOfBirth <= 19 && yourMonthOfBirth == 4)){
  yourZodiac = 'Aries';
} else if ((yourDayOfBirth >= 20 && yourMonthOfBirth == 4) || (yourDayOfBirth <= 20 && yourMonthOfBirth == 5)){
  yourZodiac = 'Taurus';
} else if ((yourDayOfBirth >= 21 && yourMonthOfBirth == 5) || (yourDayOfBirth <= 20 && yourMonthOfBirth == 6)){
  yourZodiac = 'Gemini';
} else if ((yourDayOfBirth >= 21 && yourMonthOfBirth == 6) || (yourDayOfBirth <= 22 && yourMonthOfBirth == 7)){
  yourZodiac = 'Cancer';
} else if ((yourDayOfBirth >= 23 && yourMonthOfBirth == 7) || (yourDayOfBirth <= 22 && yourMonthOfBirth == 8)){
  yourZodiac = 'Leo';
} else if ((yourDayOfBirth >= 23 && yourMonthOfBirth == 8) || (yourDayOfBirth <= 22 && yourMonthOfBirth == 9)){
  yourZodiac = 'Virgo';
} else if ((yourDayOfBirth >= 23 && yourMonthOfBirth == 9) || (yourDayOfBirth <= 22 && yourMonthOfBirth == 10)){
  yourZodiac = 'Libra';
} else if ((yourDayOfBirth >= 21 && yourMonthOfBirth == 10) || (yourDayOfBirth <= 22 && yourMonthOfBirth == 11)){
  yourZodiac = 'Scorpio';
} else if ((yourDayOfBirth >= 21 && yourMonthOfBirth == 11) || (yourDayOfBirth <= 22 && yourMonthOfBirth == 12)){
  yourZodiac = 'Saggitarius';
} else if ((yourDayOfBirth >= 23 && yourMonthOfBirth == 12) || (yourDayOfBirth <= 19 && yourMonthOfBirth == 1)){
  yourZodiac = 'Capricorn';
}

if ((yourYearOfBirth % 400 == 0) || ((yourYearOfBirth % 100) % 4 == 0)) {
  console.log(`User Bio: ${yourName} ${yourSecondName} ${yourAge} years old (loop year), ${yourZodiac}`)
} else {
  console.log(`User Bio: ${yourName} ${yourSecondName} ${yourAge} years old, ${yourZodiac}`)
}

