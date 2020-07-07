!(function(d) {
    var itemClassName = "carousel_photo";
        items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true;

    // set classes
    function setInitialClasses() {
        items[totalItems - 1].classList.add("prew");
        items[0].classList.add("active");
        items[1].classList.add("next");    
    }

    // Event Listeners
    function setEventListeners() {
        var next = d.getElementsByClassName('carousel_button--next')[0],
            prev = d.getElementsByClassName('carousel_button--prev');

        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);    
    }

    // 'Next' Navigation Handler
    function moveNext() {
        if (!moving) {
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }
        moveCarouselTo(slide);    
        }
    }

    // 'Prev' Navigation Handler
    function movePrev() {
        if (!moving) {
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide--;
            }
        moveCarouselTo(slide);    
        }
    }

    function disableInteraction() {
        moving = true;

        setTimeout(function() {
            moving = false
        }, 500);
    }

    /* Main Function with 'Medium' comments */
    // Check if carousel is moving; if not, allow interaction
    function moveCarouselTo(slide) {
        if (!moving) {
            disableInteraction();

            // Update 'old' adj. slides with 'new' ones
            var newPrevious = slide - 1,
                newNext = slide + 1,
                oldPrevious = slide - 2,
                oldNext = slide + 2;

            if ((totalItems - 1) > 3) {
                // Checks and updates if the new slides are out of bounds
                if (newPrevious <= 0) {
                    oldPrevious = (totalItems - 1);
                }   else if (newNext >= (totalItems - 1)) {
                    oldNext =0;
                }
                
            // Reset old Next/Prev elements to default classes
            items[oldPrevious].className = itemClassName;
            items[oldNext].className = itemClassName;   
            
            // Add new classes
            items[newPrevious].className = itemClassName + "prev";
            items[slide].className = itemClassName + "active";
            items[newNext].className = itemClassName + "next";
            }    
        }
    }

    function initCarousel() {
        setInitialClasses();
        setEventListeners();

        moving = false;
    }

    initCarousel();

}(document));