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
	} else if (mySiema.currentSlide != 6) {
		document.getElementById('next').innerHTML = '>';
	}

	updateText(mySiema.currentSlide);

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
	if (mySiema.currentSlide == 6){
		console.log('bye');
		document.getElementById('next').innerHTML = '';
	} else if (mySiema.currentSlide != 0) {
		console.log('hi');
		document.getElementById("prev").innerHTML = '<';
	}

	if (mySiema.currentSlide == 2){
		document.getElementById('text').innerHTML = "Storms affirm that I am alive. <br /> Natural, emotional, interpersonal.";
	}

	console.log(mySiema.currentSlide);

	// opacity
	if (mySiema.perPage > 2) {
		document.getElementById('image'+(mySiema.currentSlide + 1).toString()).style.opacity = 1;
		document.getElementById('image'+(mySiema.currentSlide).toString()).style.opacity = 0.5;
		document.getElementById('image'+(mySiema.currentSlide + 2).toString()).style.opacity = 0.5;
	}

});

function updateText(index) {
 	if (index < 2) {
 		document.getElementById('text').innerHTML = "";
 	}
 	else if (index == 2){
		document.getElementById('text').innerHTML = "Storms affirm that I am alive. <br /> Natural, emotional, interpersonal.";
	}

}

// console.log(mySiema.currentSlide);