'use strict';

var inAnimate = {
  Home: false,
  Logo: false
};

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function getWindowWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function animateResponsive() {
  return (getWindowWidth() >= 768);
}

function animate(st, wa) {
  return (st > wa);
}

function animateHome(st) {
  var $home = $('#home .title');
  var $img = $home.children('img');
  var $span = $home.children('span');
  var wa = 60;

  if (!inAnimate.Home) {
    if ($home.hasClass('hidden')) {
      if (!animate(st, wa)) {
        inAnimate.Home = true;
        $home.removeClass('hidden');
        $span.addClass('hidden');
        $img.addClass('animated fadeInDown').one(animationEnd, function() {
          $(this).removeClass('animated fadeInDown');
          $span.removeClass('hidden').addClass('animated fadeIn').one(animationEnd, function() {
            $(this).removeClass('animated fadeIn');
            inAnimate.Home = false;
          });
        });
      }
    } else if (animate(st, wa)) {
      inAnimate.Home = true;
      $span.addClass('animated fadeOut').one(animationEnd, function() {
        $(this).removeClass('animated fadeOut');
      });
      $img.addClass('animated fadeOutUp').one(animationEnd, function() {
        $(this).removeClass('animated fadeOutUp');
        $home.addClass('hidden');
        inAnimate.Home = false;
      });
    }
  }
}

function animateLogo(st) {
  var $logo = $('#logo');
  var wa = 65;

  if (!inAnimate.Logo) {
    if ($logo.hasClass('hidden')) {
      if (animate(st, wa)) {
        inAnimate.Logo = true;
        $logo.removeClass('hidden').addClass('animated fadeInDown').one(animationEnd, function() {
          $(this).removeClass('animated fadeInDown');
          inAnimate.Logo = false;
        });
      }
    } else if (!animate(st, wa)) {
      inAnimate.Logo = true;
      $logo.addClass('animated fadeOutUp').one(animationEnd, function() {
        $(this).removeClass('animated fadeOutUp').addClass('hidden');
        inAnimate.Logo = false;
      });
    }
  }
}

function animateHandler() {
  if (animateResponsive()) {
    var st = $(window).scrollTop();

    animateHome(st);
    animateLogo(st);
  }
}

function animateScroll() {
  var scrollTimeout;

  function scrollThrottler() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function() {
        scrollTimeout = null;
        animateHandler();
      }, 66);
    }
  }

  $(window).scroll(scrollThrottler);
}

function animateReady() {
  animateHandler();
  animateScroll();
}

$(document).ready(animateReady);