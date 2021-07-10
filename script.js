'use strict'

let modal = document.getElementById('myModal');


let btn = document.getElementById("myBtn");
let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");


let span = document.getElementsByClassName("cls")[0];
let span1 = document.getElementsByClassName("cls1")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
span1.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const slides = document.querySelectorAll('.slide')
slides.forEach(slide => {
    slide.addEventListener('click', () =>{
        closeActiveClasses()
        slide.classList.add('slide-active')
    })
})
function closeActiveClasses() {
    slides.forEach(slide => {
        slide.classList.remove('slide-active')
    })
}
new Glide(".images",{
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 40,
    breakpoints: {
     
      800:{
        perView: 1
      }
    }
  }).mount();
  new Glide(".images1",{
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    gap: 40,
    breakpoints: {
     
      800:{
        perView: 1
      }
    }
  }).mount();