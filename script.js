//PARALLAX

$(window).scroll(function() {
  parallax();
});

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--bg').css('background-position', 'center '+(wScroll*0.5)+'px');
}



$(document).ready(function() {

  $('.scroll').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top});
});
});

//ACTIME LINK SWITCHING
$(window).scroll(function() {
  var scrollbarLocation = $(this).scrollTop();

  scrollLink.each(function() {

    var sectionOffset = (this.hash).offset().top;

    if (sectionOffset <= scrollbarLocation ) {
      $(this).parent().addClass('active');
    }
  });

});
