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
setInterval(changeSlide, time);

const title = document.querySelector('.article__h2').textContent;
const description = document.querySelector(".description__p--opis").textContent;
document.querySelector('.article button').addEventListener("click", function () {
 document.querySelector('.modal-wrap').classList.add('active');
 const top = document.querySelector('.top');
 const middle=document.querySelector('.middle');
 top.classList.add('activeTitle');
 top.textContent=title;
 middle.textContent= description;
 
 
})


document.querySelector('span.hide').addEventListener("click", function () {
 document.querySelector('.modal-wrap').classList.remove('active');

})