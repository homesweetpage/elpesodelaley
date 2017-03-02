'use strict';

var inAnimate = {
  Home: false,
  Logo: false
};

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

function getWindowWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

function getWindowHeight() {
  return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

function animateResponsive() {
  return (getWindowWidth() < 768);
}

function animate(st, wa) {
  return (st > wa);
}

function animateHome(st) {
  var $home = $('#home .title');
  var $img = $home.children('.box-homeLogo').children('img');
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

function animateNav() {
  var $nav = $('.navbar');

  $nav.removeClass('hidden').addClass('animated slideInDown');
}

function animateCast(st) {
  var $cast = $('.cast');
  var $box = $cast.children('.box-pj');
  var wa = $cast.offset().top - (getWindowHeight() * 2/3);

  if (animate(st, wa)) {
    $box.each(function(i) {
      var $self = $(this);
      setTimeout(function() {
        $self.removeClass('hidden').addClass('animated fadeIn');
      }, 200*i);
    });
  }
}

// function animateCrew(st) {
//   var $crew = $('.crew .table');
//   var $tr = $crew.find('tr');
//   var wa = $crew.offset().top - (getWindowHeight() * 2/3);

//   if (animate(st, wa)) {
//     $tr.each(function(i) {
//       var $self = $(this);
//       setTimeout(function() {
//         $self.removeClass('hidden').addClass('animated zoomIn');
//       }, 90*i);
//     });
//   }
// }

function animateFooter() {
  var $footer = $('#logos-footer');
  var wa = ((window.innerHeight + window.scrollY) >= document.body.offsetHeight);

  if (wa) {
    $footer.removeClass('hidden').addClass('animated slideInUp').one(animationEnd, function() {
        $(this).removeClass('animated slideInUp');
      });
  }
  else{
    if(!$footer.hasClass('hidden')){
      $footer.addClass('animated slideOutDown').one(animationEnd, function() {
        $(this).removeClass('animated slideOutDown');
        $footer.addClass('hidden');
      });
    }
  }
}

function animateActive(st) {
  $('section').each(function() {
    if (animate(st+100, $(this).offset().top)) {
      $('li.active').removeClass('active');
      $('a[href="#'+this.id+'"]').parent().addClass('active');
    }
  });
}

function animateHandler() {
  var st = $(window).scrollTop();

  if (!animateResponsive()) {

    animateCast(st);
    //animateCrew(st);
    animateFooter();
  }

  animateHome(st);
  animateLogo(st);
  animateActive(st);
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
  animateNav();
}

$(document).ready(animateReady);
