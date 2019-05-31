//PARALLAX
$(window).scroll(function() {
  parallax();
});

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--bg').css('background-position', 'center '+(wScroll*0.5)+'px');
}


//Smooth Scrolling
$(document).ready(function() {

  $('.scroll').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000 );
});
});


//Highlight Page Links
$(document).ready(function(){
  $('.nav-item').click(function(){
    $('.nav-item').removeClass("active");
    $(this).addClass("active");

  });
});


//Grid Links
$(".grid-portfolio-item").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});
