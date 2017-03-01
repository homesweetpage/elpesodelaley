'use strict';

var createModal = {
  container: function($el) {
    var $div = $('<div class="mcontainer"></div>');
    $el.appendTo($div);
    return $div;
  },
  img: function() {
    var $image = $('<img >');
    return $image;
  },
  video: function() {
    var $trailer = $('<iframe src="https://player.vimeo.com/video/63602119?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    return $trailer;
  },
  carousel: function() {
    var $carousel = $('<section id="galeria2" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/postales/lldll_a01_035987.jpg" data-color="lightblue" alt="First Image"></div><div class="item"><img src="images/postales/lldll_a03_027544.jpg" data-color="lightyellow" alt="Second Image"></div><div class="item"><img src="images/postales/lldll_a03_035764.jpg" data-color="lightred" alt="Third Image"></div><div class="item"><img src="images/postales/lldll_a03_035879.jpg" data-color="lightgreen" alt="Fourth Image"></div></div><a class="left carousel-control carousel-control-left" href="#galeria2" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#galeria2" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carousel;
  }
};

function modalInsert($el) {
  $('#Modal').css('display','block');
  $('.mbody').empty();
  $el.appendTo('.mbody');
}

function modalAfiche() {
  $('#afiche').click(function () {
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', this.src);
    modalInsert($container);
  });
}

function modalTrailer() {
  // $('#avance').click(function () {
  //   var $video = createModal.video();
  //   modalInsert($video);
  // });
}

function modalCarousel() {
  $('#avance').click(function () {
    var $carousel = createModal.carousel();
    modalInsert($carousel);
  });
}

function modalReady() {
  modalAfiche();
  modalTrailer();
  modalCarousel();
}

$(document).ready(modalReady);
