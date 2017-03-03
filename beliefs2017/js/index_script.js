// zippy scroll to each section
// $.scrollify({
//     section: ".scroll"
// });

var mySiema = new Siema({
    selector: '.mySiema',
    duration: 200,
    easing: 'ease-out',
    perPage: 3,
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: true,
});

document.querySelector('.js-prev').addEventListener('click', function() {mySiema.prev()});
document.querySelector('.js-next').addEventListener('click', function() {mySiema.next()});
