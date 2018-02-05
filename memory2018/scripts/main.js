jQuery( document ).ready(function($) {
    var contWidth = $('#main-content').width();
    var winWidth = $(window).width();
    var docWidth = $(document).width();
    $(window).resize(function() { reseed() });
    $('#exit').css('left', contWidth + winWidth);

    $('.photo').mouseenter(function(e) {
        $('.photo').not(this).addClass('no-focus');
    });
    $('.photo').mouseleave(function(e) {
        $('.photo').removeClass('no-focus');
    })

    var secScrollCounter = 1;
    $('.right-arrow').click(function() {
        if (winWidth > 800 && secScrollCounter == 2 || secScrollCounter == 4) {
            secScrollCounter = secScrollCounter + 2;
        } else {
            secScrollCounter = secScrollCounter + 1;
        }
        scrollSection(secScrollCounter, docWidth, winWidth, contWidth);
    });
    $('.left-arrow').click(function() {
        if (winWidth > 800 && secScrollCounter == 2 || secScrollCounter == 4) {
            secScrollCounter = secScrollCounter - 2;
        } else {
            secScrollCounter = secScrollCounter - 1;
        }

        scrollSection(secScrollCounter, docWidth, winWidth, contWidth)
    });
});

$.fn.isInViewport = function() {
    var elementLeft = $(this).offset().left;
    var elementRight = elementLeft + $(this).outerWidth();
    var viewportLeft = $(window).scrollLeft();
    var viewportRight = viewportLeft + $(window).width();
    return elementRight > viewportLeft && elementLeft < viewportRight;
};

function checkVisible() {
    if ($('#intro').isInViewport()) {
        $('.left-arrow').addClass('faded');
        $('.right-arrow').removeClass('faded');
    }
    if ($('#main-content').isInViewport()) {
        $('.left-arrow').removeClass('faded');
        $('.right-arrow').removeClass('faded');
    }
    if ($('#exit').isInViewport()) {
        $('.right-arrow').addClass('faded');
        $('.left-arrow').removeClass('faded');
    }
}
function scrollSection(counter, docWidth, winWidth, contWidth) {
    var target = 0;
    if (counter == 1) {
        $('.left-arrow').addClass('faded');
        $('.right-arrow').removeClass('faded');
        target = 0;
    } else if (counter == 2) {
        $('.left-arrow').removeClass('faded');
        $('.right-arrow').removeClass('faded');
        target = winWidth;
    } else if (counter == 3 && winWidth < 800) {
        target = winWidth + ((contWidth / 4) - (winWidth / 2))
    } else if (counter == 4) {
        target = winWidth + ((contWidth / 2) - (winWidth / 2));
    } else if (counter == 5 && winWidth < 800) {
        target = winWidth + (3 * (contWidth / 4) - (winWidth / 2))
    } else if (counter == 6) {
        $('.left-arrow').removeClass('faded');
        $('.right-arrow').removeClass('faded');
        target = docWidth - winWidth;
    } else if (counter == 7) {
        $('.right-arrow').addClass('faded');
        $('.left-arrow').removeClass('faded');
        target = docWidth;
    }
    $('html, body').animate({
        scrollLeft: target
     }, 1500);
}

function reseed() {
    docWidth = $(document).width();
    contWidth = $('#main-content').width();
    winWidth = $(window).width();
}