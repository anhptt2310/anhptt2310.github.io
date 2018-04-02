$(function() {
	var posEdu = $('#edu-cube').offset().top;
	console.log(posEdu);
	$('.mouse').click(function(event) {
		/* Act on the event */
		console.log("day ne");
		$('html,body').animate({scrollTop:$('#edu-cube').offset().top},700);
	});
});