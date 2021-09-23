const slideList = [{
 img: "./assets/2.jpg",
},
{
 
 img: "./assets/man.jpg",
},

{img: "./assets/zawrat.jpg",
},
{
 img: "./assets/widok.jpg",
}];

const image = document.querySelector('.banner__img');
// Interfejs
const time = 4000;
let active = 0;

const changeSlide = () => {
 active++;
 if (active === slideList.length) {
  active = 0;
 }
 image.src = slideList[active].img;


}
setInterval(changeSlide, time)