$(function() {
	$.scrollify({
		section: ".scroll",
	});
});

$('.arrow').click(function() {
	$.scrollify.move('#2');
});

$(document).ready(function() {
	$('h1').fadeOut( 2000, function() {
		$('h1').css("color", "white");
		$('h1').css("text-shadow", "5px 5px 15px #736c7a");
	    $('h1').fadeIn(1000);
	});
});

