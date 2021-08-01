

let modal = document.getElementById('myModal');


let modal2 = document.getElementById('myModal2');

let btn1 = document.getElementById("myBtn1");
let btn2 = document.getElementById("myBtn2");

let Btn2 = document.getElementById("Btn2");

let span = document.getElementsByClassName("cls")[0];
let span1 = document.getElementsByClassName("cls1")[0];
let span3 = document.getElementsByClassName("cls3")[0];

// btn.onclick = function() {
//     modal.style.display = "block";
// }
btn1.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
Btn2.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
    modal2.style.display = "none"
}
span1.onclick = function() {
    modal.style.display = "none";
}

span3.onclick = function() {
  modal2.style.display = "none";
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
var go_down = jQuery('body');
jQuery(function() {
  $("#Go_Top").hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $("#Go_Top").fadeIn("slow")
  var scrollDiv = $("#Go_Top");
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $("#Go_Bottom").hide().removeAttr("href");
  if ($(window).scrollTop() <= go_down.height()-"999") $("#Go_Bottom").fadeIn("slow")
  var scrollDiv_2 = $("#Go_Bottom");
  $(window).scroll(function() {
   if ($(window).scrollTop() >= go_down.height()-"999") $(scrollDiv_2).fadeOut("slow")
   else $(scrollDiv_2).fadeIn("slow")
  });
  $("#Go_Top").click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
  $("#Go_Bottom").click(function() {
   $("html, body").animate({scrollTop: go_down.height()}, "slow")
  })
});


// new Glide(".images",{
//     type: 'carousel',
//     perView: 3,
//     focusAt: 'center',
//     gap: 40,
//     breakpoints: {
     
//       500:{
//         perView: 1
//       }
      
//     }
//   }).mount();
//   new Glide(".images1",{
//     type: 'carousel',
//     perView: 3,
//     focusAt: 'center',
//     gap: 40,
//     breakpoints: {
     
//       500:{
//         perView: 1
//       }
//     }
//   }).mount();
//   new Glide(".images3",{
//     type: 'carousel',
//     perView: 3,
//     focusAt: 'center',
//     gap: 40,
//     breakpoints: {
     
//       500:{
//         perView: 1
//       }
//     }
//   }).mount();
  
function initSlider(){ $('.center').slick({
  centerMode: true,
  dots: true,
  arrows:true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});}

$(document).on('ready', function () {
  initSlider();
});
$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();

    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
