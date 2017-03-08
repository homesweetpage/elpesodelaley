'use strict';
var audio;

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

function soundHandle() {
	var $control = $('#soundControl');

	$control.click(function(event) {
		event.preventDefault();
		var $i = $(this).children('i');
		if ($i.hasClass('icon-volume-up')) {
			$i.removeClass('icon-volume-up').addClass('icon-volume-off');
			audio.pause();
		} else {
			$i.removeClass('icon-volume-off').addClass('icon-volume-up');
			audio.play();
		}
	});
}

function documentReady() {
	smoothScrolling();
	soundHandle();
}

$(document).ready(documentReady);
