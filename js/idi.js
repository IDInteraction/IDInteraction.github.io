$(function() {
	$('.home-header h1').animate({
		opacity: 1
	},4000);

	setTimeout(function() {
		$(".big-button").animate({
			opacity: 1,
			top: "-=30"
		}, 1000, function() {
			// Animation complete.
		});
	}, 1000);
	
	$('.site-nav .menu-icon').click(function() {
		$('#mobile-menu').toggle();
	});
	
	$('.info-link').click(function() {
		$('html, body').animate({
          scrollTop: $('#home-info').offset().top
        }, 1000);
	});
});