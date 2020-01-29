//Parallax
$(window).scroll(function() {
  parallax();
});

function parallax() {

  var wScroll = $(window).scrollTop();

  $('.parallax--bg').css('background-position', 'center ' + (wScroll * 0.5) + 'px');
}







//Smooth Scrolling
$(document).ready(function() {

  $('.scroll').click(function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
});








//Scroll Animation for Upper About Section
$(window).scroll(function() {
    
    var upperMidSectHeight = document.querySelector('.upper-mid-sect').offsetHeight;
    var innerMidSectHeight = document.querySelector('.inner-mid-sect').offsetHeight;
    var bottomSectionHeight = document.querySelector('.bottom-section').offsetHeight;
    var lowerBottomSectionHeight = document.querySelector('.lower-bottom-section').offsetHeight;
    
    if ( $(window).width() > 1000 ) {
    
        if ($(document).scrollTop() > upperMidSectHeight/4 ) {
            $('.lang-box').addClass('fade-in-scroll');
        }
        
        if ($(document).scrollTop() > upperMidSectHeight + (innerMidSectHeight/4)) {
            $('.about-me-head-2').addClass('fade-in-scroll');
            $('.about-me-title-line').addClass('fade-in-scroll-delay-100');
            $('.about-me-head-3').addClass('fade-in-scroll-delay-200');
            
            $('.about-img-descript').addClass('fade-in-scroll-delay-200');
            
            $('.ind-tech-skill:nth-child(1)').addClass('fade-in-scroll');
            $('.ind-tech-skill:nth-child(2)').addClass('fade-in-scroll-delay-100');
            $('.ind-tech-skill:nth-child(3)').addClass('fade-in-scroll-delay-200');
            $('.ind-tech-skill:nth-child(4)').addClass('fade-in-scroll-delay-300');
        }
        
        if ($(document).scrollTop() > upperMidSectHeight + innerMidSectHeight + (bottomSectionHeight/4)) {
            $('.port-head-h2').addClass('fade-in-scroll');
            $('.port-head-title-line').addClass('fade-in-scroll-delay-100');
            $('.port-head-h3').addClass('fade-in-scroll-delay-200');
            
            $('.port-head-two').addClass('fade-in-scroll-delay-100');
            
            $('.grid-portfolio').addClass('fade-in-scroll-delay-200');
        }
        
        if ($(document).scrollTop() > upperMidSectHeight + innerMidSectHeight + bottomSectionHeight + (lowerBottomSectionHeight/4)) {
            $('.aci-h2').addClass('fade-in-scroll');
            $('.aci-title-line').addClass('fade-in-scroll-delay-100');
            $('.aci-h3').addClass('fade-in-scroll-delay-200');
            
            $('.cfa-h2').addClass('fade-in-scroll');
            $('.cfa-title-line').addClass('fade-in-scroll-delay-100');
            $('.cfa-h3').addClass('fade-in-scroll-delay-200');
            
            $('.contact-form, .contact-info-ind, .social-media').addClass('fade-in-scroll-delay-200');
        }
    
    } else {
        $(document).ready(function () {
            $('.lang-box, .about-me-head-2, .about-me-title-line, .about-me-head-3, .about-img-descript, .ind-tech-skill, .port-head-h2, .port-head-title-line, .port-head-h3, .port-head-two, .grid-portfolio, .aci-h2, .aci-title-line, .aci-h3, .cfa-h2, .cfa-title-line, .cfa-h3, .contact-form, .contact-info-ind, .social-media').addClass('no-animation');
        });
    }
});






//Load Header on Page Load
$(document).ready(function() {
    $('.head-sect-info-h1').addClass('fade-in-scroll');
});






//Highlight Page Links
$(document).ready(function() {
  $('.nav-item').click(function() {
    $('.nav-item').removeClass("active");
    $(this).addClass("active");

  });
});






//Portfolio Popup Toggling
/***
$(document).ready(function() {
    

 document.querySelector('.pop-one-btn').addEventListener('click', () => {
    document.querySelector('.pop-one').classList.toggle('pop-active');
  });

  document.querySelector('.pop-two-btn').addEventListener('click', () => {
    document.querySelector('.pop-two').classList.toggle('pop-active');
  });

  document.querySelector('.pop-three-btn').addEventListener('click', () => {
    document.querySelector('.pop-three').classList.toggle('pop-active');
  });

  document.querySelector('.pop-four-btn').addEventListener('click', () => {
    document.querySelector('.pop-four').classList.toggle('pop-active');
  });

  document.querySelector('.pop-five-btn').addEventListener('click', () => {
    document.querySelector('.pop-five').classList.toggle('pop-active');
  });


  document.querySelector('.pop-six-btn').addEventListener('click', () => {
    document.querySelector('.pop-six').classList.add('pop-active');
  });
});
***/


$(document).ready(function() {
  $('.exit-pop').click(function() {
      
    /***$('.pop-one').removeClass('pop-active');
    $('.pop-two').removeClass('pop-active');
    $('.pop-three').removeClass('pop-active');
    $('.pop-four').removeClass('pop-active');
    $('.pop-five').removeClass('pop-active');***/
    
    $('.pop-six').removeClass('pop-active');
    
  });
});


/***
//Popup iframe pause
$(document).ready(function() {


  document.querySelector('.exit-pop').addEventListener('click', () => {
    document.querySelector('.pop-one-iframe-div').innerHTML = "";
    document.querySelector('.pop-one-iframe-div').innerHTML = '<iframe class="iframe-port" id="pop-iframe" src="https://www.youtube.com/embed/X4rU02088Xc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  });

  document.querySelector('.exit-pop').addEventListener('click', () => {
    document.querySelector('.pop-two-iframe-div').innerHTML = "";
    document.querySelector('.pop-two-iframe-div').innerHTML = '<iframe class="iframe-port" id="pop-iframe" src="https://www.youtube.com/embed/X4rU02088Xc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  });


  document.querySelector('.exit-pop').addEventListener('click', () => {
    document.querySelector('.pop-three-iframe-div').innerHTML = "";
    document.querySelector('.pop-three-iframe-div').innerHTML = '<iframe class="iframe-port" id="pop-iframe" src="https://www.youtube.com/embed/X4rU02088Xc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  });

  document.querySelector('.exit-pop').addEventListener('click', () => {
    document.querySelector('.pop-four-iframe-div').innerHTML = "";
    document.querySelector('.pop-four-iframe-div').innerHTML = '<iframe class="iframe-port" id="pop-iframe" src="https://www.youtube.com/embed/X4rU02088Xc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  });

  document.querySelector('.exit-pop').addEventListener('click', () => {
    document.querySelector('.pop-five-iframe-div').innerHTML = "";
    document.querySelector('.pop-one-iframe-div').innerHTML = '<iframe class="iframe-port" id="pop-iframe" src="https://www.youtube.com/embed/X4rU02088Xc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  });
  
  
});
***/





/*
//Grid Links
$(".grid-portfolio-item").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});*/







