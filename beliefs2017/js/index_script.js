// zippy scroll to each section
// $.scrollify({
//     section: ".scroll"
// });

var mySiema = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 3,
    startIndex: 0,
    draggable: false,
    threshold: 20,
    loop: true,
});

document.querySelector('.js-prev').addEventListener('click', function() {mySiema.prev()});
document.querySelector('.js-next').addEventListener('click', function() {mySiema.next()});

// for (var i = 0; i < howManySlides) {
// 	if (i != currentSlide)
// }