//ANIMSITION
$(".animsition").animsition({
	linkElement: 'header a',
	inClass: 'fade-in-left-lg',
	outClass: 'fade-out-right-lg',
	inDuration: 1000,
	outDuration: 500
});
//STICKY
$(".header").sticky({getWidthFrom: '.container', responsiveWidth: true});
$(".grid-full h5").sticky({topSpacing:64, getWidthFrom: '.container', responsiveWidth: true});
$(".header").on("sticky-start", function(){
	$(".description").html("We build <strong>great</strong> apps.");
});
$(".header").on("sticky-end", function(){
	$(".description").html("We build apps.");
	$(".grid-full h5").html("Want us to work on your project?");
});
$(".grid-full h5").on("sticky-start", function(){
	$(this).append(' <a href="mailto: johnrmedcraft@gmail.com"><strong>Email Us</strong></a>')
});
$(".grid-full h5").on("sticky-end", function(){
	$('.email-text').remove();
});
//SLICK
