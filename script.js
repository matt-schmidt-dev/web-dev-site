
/**
$(document).ready(function(){
  $('a[href*="#"]').one('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    //Scroll and show hash
    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function () {
      window.location.hash = target;
    });
  });
});


$(document).ready(function(){
  $('.nav-link').click(function(){
    $('.nav-item .nav-link').removeClass("active");
    $(this).addClass("active");

  })
});
**/

//PARALLAX

$(window).scroll(function() {
  parallax();
})

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--bg').css('background-position', 'center '+(wScroll*0.5)+'px')
}




$(document).ready(function() {

  var scrollLink = $('.scroll');

  //SMOOTH SCROLLING
  scrollLink.click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 )
  })

//ACTIME LINK SWITCHING
$(window).scroll(function() {
  var scrollbarLocation = $(this).scrollTop();

  scrollLink.each(function() {

    var sectionOffset = (this.hash).offset().top

    if (sectionOffset <= scrollbarLocation ) {
      $(this).parent().addClass('active');
    }
  })
})

})
