
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

// const titleOne = document.querySelector('.article__h2--one').textContent;
// const titleTwo = document.querySelector('.article__h2--two').textContent;
// const titleThree = document.querySelector('.article__h2--three').textContent;
// const titleFour = document.querySelector('.article__h2--four').textContent;
// const descriptionOne = document.querySelector(".description__p--one").textContent;
// const descriptionTwo = document.querySelector(".description__p--two").textContent;
// const descriptionThree = document.querySelector(".description__p--three").textContent;
// const descriptionFour = document.querySelector(".description__p--four").textContent;
// document.querySelector('.btn__one').addEventListener("click", function () {
//  document.querySelector('.modal-wrap').classList.add('active');
//  const top = document.querySelector('.top');
//  const middle=document.querySelector('.middle');
//  top.classList.add('activeTitle');
//  top.textContent=titleOne;
//  middle.textContent= descriptionOne;
// })


// document.querySelector('.btn__two').addEventListener("click", function () {
//  document.querySelector('.modal-wrap').classList.add('active');
//  const top = document.querySelector('.top');
//  const middle=document.querySelector('.middle');
//  top.classList.add('activeTitle');
//  top.textContent=titleTwo;
//  middle.textContent= descriptionTwo;
// })



// document.querySelector('.btn__three').addEventListener("click", function () {
//  document.querySelector('.modal-wrap').classList.add('active');
//  const top = document.querySelector('.top');
//  const middle=document.querySelector('.middle');
//  top.classList.add('activeTitle');
//  top.textContent=titleThree;
//  middle.textContent= descriptionThree;
// })


// document.querySelector('.btn__four').addEventListener("click", function () {
//  document.querySelector('.modal-wrap').classList.add('active');
//  const top = document.querySelector('.top');
//  const middle=document.querySelector('.middle');
//  top.classList.add('activeTitle');
//  top.textContent=titleFour;
//  middle.textContent= descriptionFour;
// })
// document.querySelector('span.hide').addEventListener("click", function () {
//  document.querySelector('.modal-wrap').classList.remove('active');

// })

//pobieram wszystkie przyciski
const btn = document.querySelectorAll(...['.btn']);
const titleOne = document.querySelector('.article__h2--one').textContent;
const titleTwo = document.querySelector('.article__h2--two').textContent;
const titleThree = document.querySelector('.article__h2--three').textContent;
const titleFour = document.querySelector('.article__h2--four').textContent;
const descriptionOne = document.querySelector(".description__p--one").textContent;
const descriptionTwo = document.querySelector(".description__p--two").textContent;
const descriptionThree = document.querySelector(".description__p--three").textContent;
const descriptionFour = document.querySelector(".description__p--four").textContent;
const descriptionOneCours = document.querySelector(".description__p--coursOne").textContent;


//ustawiam nasłuchiwanie na pojedyńczy przycisk
btn.forEach(elements=>elements.addEventListener('click', function(e){
e.preventDefault();
//pobranie wszystkich textContent
document.querySelector('.modal-wrap').classList.add('active');
 const top = document.querySelector('.top');
 const middle=document.querySelector('.middle');
//pobieram aktualnie kliknięty przycisk
const show =e.target.name;
console.log(show);
top.classList.add('activeTitle');
if(e.target.name==="one"){
 top.textContent=titleOne;
 middle.textContent=descriptionOne;
 
}
    else if (e.target.name==="two"){
        top.textContent=titleTwo;
 middle.textContent= descriptionTwo;
        
    }
    else if (e.target.name==="three"){
        
        top.textContent=titleThree;
 middle.textContent= descriptionThree;
    }
    else if (e.target.name==="four"){
        top.textContent=titleFour;
 middle.textContent= descriptionFour;
    }else{
        return 0;
    }


}))
document.querySelector('span.hide').addEventListener("click", function () {
     document.querySelector('.modal-wrap').classList.remove('active');
    
    });


    //funkcja na article__photo

    const article = document.querySelectorAll(...['.article__photo']);
    let view = screen.width;
    console.log(view);
    
    if(screen.width>1024){
    article.forEach(elements=>elements.addEventListener('click', function(e){
        e.preventDefault();
        //pobranie wszystkich textContent
        document.querySelector('.modal-wrap').classList.add('active');
         const top = document.querySelector('.top');
         const middle=document.querySelector('.middle');
        //pobieram aktualnie kliknięty przycisk
        const show =e.target.name;
        const h2 = document.querySelector('.article__h2');
        // h2.classList.add('active__h2');
        // const h2Hover = document.querySelector('.article__h2--hover');
        // h2Hover.classList.add('active__h2');
        document.querySelectorAll(...['.article__h2--hover']).forEach(element=>element.style.display="none");  
        
        
        // h2.style.display="none";
        // console.log(show);
        top.classList.add('activeTitle');
    
        if(e.target.name==="one"){
            
            
        
         top.textContent=titleOne;
         middle.textContent= descriptionOne;
        }
            else if (e.target.name==="two"){
                top.textContent=titleTwo;
         middle.textContent= descriptionTwo;
                
            }
            else if (e.target.name==="three"){
                
                top.textContent=titleThree;
         middle.textContent= descriptionThree;
            }
            else if (e.target.name==="four"){
                top.textContent=titleFour;
         middle.textContent= descriptionFour;
            }else{
                return 0;
            }
        
        
        }))
        document.querySelector('span.hide').addEventListener("click", function () {
             document.querySelector('.modal-wrap').classList.remove('active');
             document.querySelectorAll(...['.article__h2--hover']).forEach(element=>element.style.display="block"); 
            
            });}