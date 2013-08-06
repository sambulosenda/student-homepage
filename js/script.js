$(document).ready(function() {
	$window = $(window);
	$('section[data-type="background"]').each(function() {
		var $bgobj = $(this);
		$(window).scroll(function() {
			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			var coords = '50% '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
		});
	});
});

/* Create HTML5 Elements For IE */
document.createElement("article");
document.createElement("section");