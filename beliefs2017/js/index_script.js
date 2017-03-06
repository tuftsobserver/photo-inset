// zippy scroll to each section
// $.scrollify({
//     section: ".scroll"
// });

var mySiema = new Siema({
    selector: '.siema',
    duration: 800,
    easing: 'ease-out',
    perPage: {
    	480: 1,
    	768: 2,
    	1024: 3
    },
    startIndex: 0,
    draggable: false,
    threshold: 20,
    loop: false,
});



document.querySelector('.js-prev').addEventListener('click', function() {
	mySiema.prev();
	console.log(mySiema.currentSlide);

	// Update arrows 
	if (mySiema.currentSlide == 0){
		document.getElementById('prev').innerHTML = '';
	} else if (mySiema.currentSlide != 7) {
		document.getElementById('next').innerHTML = '>';
	}

	document.getElementById('text').innerHTML = updateText(mySiema.currentSlide);

	// opacity
	if (mySiema.perPage > 2) {
		document.getElementById('image'+(mySiema.currentSlide + 1).toString()).style.opacity = 1;
		document.getElementById('image'+(mySiema.currentSlide + 2).toString()).style.opacity = 0.5;
	}
});
document.querySelector('.js-next').addEventListener('click', function() {
	mySiema.next();
	console.log(mySiema.currentSlide);

	// Update arrows
	if (mySiema.currentSlide == 7){
		console.log('bye');
		document.getElementById('next').innerHTML = '';
	} else if (mySiema.currentSlide != 0) {
		console.log('hi');
		document.getElementById("prev").innerHTML = '<';
	}

	document.getElementById('text').innerHTML = updateText(mySiema.currentSlide);

	// opacity
	if (mySiema.perPage > 2) {
		document.getElementById('image'+(mySiema.currentSlide + 1).toString()).style.opacity = 1;
		document.getElementById('image'+(mySiema.currentSlide).toString()).style.opacity = 0.5;
		document.getElementById('image'+(mySiema.currentSlide + 2).toString()).style.opacity = 0.5;
	}

});

function updateText(index) {
 	if (index < 2) {
 		return "";
 	}
 	else if (index == 1){
		return "Storms affirm that I am alive.<br />Natural, emotional, interpersonal.";
	}
	else if (index == 2){
		return "Summer.";
	}
	else if (index == 3){
		return "It's sad that when people live here long enough, they get used to it.";
	}
	else if (index == 4){
		return "I loved the way he looked at his double-neck guitar;<br />he cherised it more than the whole world he had.";
	}
	else if (index == 5){
		return "I was filled with a calm gratitude - but also a hint<br />of shame, like towards someone you've spent fifteen<br />years with but know so little about their life.";
	}
	else if (index == 6){
		return "This is a man I was in love with. I am no longer in<br />love, but I think I love him still.";
	}
	else {
		return "";
	}
}

// console.log(mySiema.currentSlide);