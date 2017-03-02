'use strict';

function smoothScrolling() {

	var inScroll = false;

	function scrollToAnchor(target) {
		if (!inScroll) {
			inScroll = true;
			$('html, body').animate({scrollTop: target.offset().top}, 1100, 'swing', function() {
				inScroll = false;
			});
		}    
	}

	$('.nav-item').click(function(event) {
		event.preventDefault();
		var $parent = $(this).parent();
		var $target = $(this.hash);

		if (!$parent.hasClass('active') && !$parent.hasClass('disable')) {
			scrollToAnchor($target);
		}
	});

	$('#logo > a').click(function(event) {
		event.preventDefault();

		scrollToAnchor($('body'));
	});
}

function documentReady() {
	smoothScrolling();
}

$(document).ready(documentReady);
