$(function() {
	var posEdu = $('#edu-cube').offset().top;
	$('.mouse').click(function(event) {
		/* Act on the event */
		console.log("day ne");
		$('html,body').animate({scrollTop:$('#edu-cube').offset().top},700);
	});
	$('.abt-me').click(function(event) {
		/* Act on the event */
		$('html,body').animate({scrollTop:$('#edu-cube').offset().top},700);
	});
	$('.mybl').click(function(event){
		event.preventDefault();
		alert('Sorry , I havent had blog :(');
	});

});