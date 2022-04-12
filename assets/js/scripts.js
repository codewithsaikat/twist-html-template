$(document).ready(function () {
    $('.homepage-slides').slick({
       autoplay: false,
       dots: true,
    });

   $('.team-list').slick({
     autoplay: false,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     dots: true,
       
   });

   $('.testimonial-list').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,

   })
   $('.logo-carousel').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    

   })
  
  $('.team-list-2').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,

   })

  
 

  
     
});

let search = document.querySelector(".search-icon");


search.onclick = function () {
  document.querySelector(".search-box").classList.toggle('active');
}


 
 