$(document).ready(function() {
    
    document.querySelector('.pop-six-btn').addEventListener('click', () => {
        document.querySelector('.pop-six').classList.add('pop-active');
    
    
        var track = document.querySelector('.carousel__track');
        var slides = Array.from(track.children);
        var nextButton = document.querySelector('.carousel__button--right');
        var prevButton = document.querySelector('.carousel__button--left');
        var dotsNav = document.querySelector('.carousel__nav');
        var dots = Array.from(dotsNav.children);
        
        
        var slideWidth = slides[0].getBoundingClientRect().width;
        
        
        //slides[0].style.left = slideWidth * 0 + 'px';
        //slides[1].style.left = slideWidth * 1 + 'px';
        //slides[2].style.left = slideWidth * 2 + 'px';
        
        
        var setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);
        
        
        var moveToSlide = (track, currentSlide, targetSlide) => {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        };
        
        var updateDots = (currentDot, targetDot) => {
            currentDot.classList.remove('current-slide');
            targetDot.classList.add('current-slide');
        };
        
        var hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
            if (targetIndex === 0) {
                prevButton.classList.add('carousel-buttons-hidden');
                nextButton.classList.remove('carousel-buttons-hidden');
            } else if (targetIndex === slides.length - 1) {
                prevButton.classList.remove('carousel-buttons-hidden');
                nextButton.classList.add('carousel-buttons-hidden');
            } else {
                prevButton.classList.remove('carousel-buttons-hidden');
                nextButton.classList.remove('carousel-buttons-hidden');
            }
        };
        
        
        
        prevButton.addEventListener('click', e => {
            var currentSlide = track.querySelector('.current-slide');
            var prevSlide = currentSlide.previousElementSibling;
            var currentDot = dotsNav.querySelector('.current-slide');
            var prevDot = currentDot.previousElementSibling;
            var prevIndex = slides.findIndex(slide => slide === prevSlide);
            
            moveToSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot);
            hideShowArrows(slides, prevButton, nextButton, prevIndex);
        });
        
        nextButton.addEventListener('click', e => {
            var currentSlide = track.querySelector('.current-slide');
            var nextSlide = currentSlide.nextElementSibling;
            var currentDot = dotsNav.querySelector('.current-slide');
            var nextDot = currentDot.nextElementSibling;
            var nextIndex = slides.findIndex(slide => slide === nextSlide);
            
            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
            hideShowArrows(slides, prevButton, nextButton, nextIndex);
        });
        
        
        dotsNav.addEventListener('click', e => {
            var targetDot = e.target.closest('button');
            
            if (!targetDot) return;
        
            var currentSlide = track.querySelector('.current-slide');
            var currentDot = dotsNav.querySelector('.current-slide');
            var targetIndex = dots.findIndex(dot => dot === targetDot);
            var targetSlide = slides[targetIndex];
            
            moveToSlide(track, currentSlide, targetSlide);
            updateDots(currentDot, targetDot);
            hideShowArrows(slides, prevButton, nextButton, targetIndex);
        });



});

});









