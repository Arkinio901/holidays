
    //slider
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


                            //popup

//
// const btn= document.querySelectorAll(...['.btn']);
// btn.forEach(elements=>elements.addEventListener('click', ()=>{
//  console.log('dziala');
// }))

const titleOne = document.querySelector('.article__h2--one').textContent;
const titleTwo = document.querySelector('.article__h2--two').textContent;
const titleThree = document.querySelector('.article__h2--three').textContent;
const titleFour = document.querySelector('.article__h2--four').textContent;
const descriptionOne = document.querySelector(".description__p--one").textContent;
const descriptionTwo = document.querySelector(".description__p--two").textContent;
const descriptionThree = document.querySelector(".description__p--three").textContent;
const descriptionFour = document.querySelector(".description__p--four").textContent;
document.querySelector('.btn__one').addEventListener("click", function () {
 document.querySelector('.modal-wrap').classList.add('active');
 const top = document.querySelector('.top');
 const middle=document.querySelector('.middle');
 top.classList.add('activeTitle');
 top.textContent=titleOne;
 middle.textContent= descriptionOne;
})


document.querySelector('.btn__two').addEventListener("click", function () {
 document.querySelector('.modal-wrap').classList.add('active');
 const top = document.querySelector('.top');
 const middle=document.querySelector('.middle');
 top.classList.add('activeTitle');
 top.textContent=titleTwo;
 middle.textContent= descriptionTwo;
})



document.querySelector('.btn__three').addEventListener("click", function () {
 document.querySelector('.modal-wrap').classList.add('active');
 const top = document.querySelector('.top');
 const middle=document.querySelector('.middle');
 top.classList.add('activeTitle');
 top.textContent=titleThree;
 middle.textContent= descriptionThree;
})


document.querySelector('.btn__four').addEventListener("click", function () {
 document.querySelector('.modal-wrap').classList.add('active');
 const top = document.querySelector('.top');
 const middle=document.querySelector('.middle');
 top.classList.add('activeTitle');
 top.textContent=titleFour;
 middle.textContent= descriptionFour;
})
document.querySelector('span.hide').addEventListener("click", function () {
 document.querySelector('.modal-wrap').classList.remove('active');

})