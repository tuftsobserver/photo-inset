// Only enable scrollify if screen has sufficient landscape width
// Otherwise page scrolling gets messed up when going from 2x2 to single column
if ($(window).width() / $(window).height() > 3/2) {
    $.scrollify({
        section: ".scroll"
    });
}

// Handle scrollify changes based on screen dimensions
$(window).resize(function() {
    if ($(window).width() / $(window).height() > 3/2) {
        $.scrollify.enable();
    } else {
        $.scrollify.disable();
    }
    reposition_artist_statement();
});

window.onscroll = function() {reposition_artist_statement()};

// Artist statement is fixed during gallery scrolling but disappears otherwise
function reposition_artist_statement() {
    if ($(window).width() / $(window).height() > 3/2) {
        if (document.body.scrollTop < $('#gallery1').position().top) {
            // scrolling to/from landing page
            $('.artist-statement').css("top", $('#gallery1').position().top);
            $('.artist-statement').css("position", "absolute");
        } else if (document.body.scrollTop > $('#gallery3').position().top) {
            // scrolling to/from parting page
            $('.artist-statement').css("top", $('#gallery3').position().top);
            $('.artist-statement').css("position", "absolute");
        } else {
            // scrolling through gallery
            $('.artist-statement').css("top", "0");
            $('.artist-statement').css("position", "fixed");
        }
    } else {
        $('.artist-statement').css("position", "static");
    }
}
