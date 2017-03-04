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
    var $video = $('<iframe src="https://player.vimeo.com/video/63602119?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    var $div = $('<div class="video-container"></div>');
    $video.appendTo($div);
    return $div;
  },
  carouselRodaje: function() {
    var $carouselRodaje = $('<section id="mgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/prensa/prensa-barrientos, grandinetti, onetto.jpg" data-color="lightblue" alt="Barrientos - Grandinetti - Onetto"></div><div class="item"><img src="images/prensa/prensa-barrientos.jpg" data-color="lightyellow" alt="Paola Barrientos"></div><div class="item"><img src="images/prensa/prensa-grandinetti.jpg" data-color="lightred" alt="Darío Grandinetti"></div><div class="item"><img src="images/prensa/prensa-onetto.jpg" data-color="lightgreen" alt="María Onetto"></div><div class="item"><img src="images/prensa/prensa-miras.jpg" data-color="green" alt="Fernán Mirás"></div><div class="item"><img src="images/prensa/prensa-miras1.jpg" data-color="green" alt="Fernán Mirás"></div><div class="item"><img src="images/prensa/prensa-todos.jpg" data-color="red" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div><div class="item"><img src="images/prensa/prensa-todos1.jpg" data-color="yellow" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div></div><a class="left carousel-control carousel-control-left" href="#mgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselRodaje;
  },
  carouselPrensa: function() {
    var $carouselPrensa = $('<section id="mgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/prensa/prensa-barrientos, grandinetti, onetto.jpg" data-color="lightblue" alt="Barrientos - Grandinetti - Onetto"></div><div class="item"><img src="images/prensa/prensa-barrientos.jpg" data-color="lightyellow" alt="Paola Barrientos"></div><div class="item"><img src="images/prensa/prensa-grandinetti.jpg" data-color="lightred" alt="Darío Grandinetti"></div><div class="item"><img src="images/prensa/prensa-onetto.jpg" data-color="lightgreen" alt="María Onetto"></div><div class="item"><img src="images/prensa/prensa-miras.jpg" data-color="green" alt="Fernán Mirás"></div><div class="item"><img src="images/prensa/prensa-miras1.jpg" data-color="green" alt="Fernán Mirás"></div><div class="item"><img src="images/prensa/prensa-todos.jpg" data-color="red" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div><div class="item"><img src="images/prensa/prensa-todos1.jpg" data-color="yellow" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div></div><a class="left carousel-control carousel-control-left" href="#mgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselPrensa;
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
  $('#avance').click(function () {
    var $video = createModal.video();
    var $container = createModal.container($video);
    modalInsert($container);
  });
}

function modalCarousel() {
  $('#rodaje').click(function () {
    var $carouselRodaje = createModal.carouselRodaje();
    var $container = createModal.container($carouselRodaje);
    modalInsert($container);
  });
  $('#prensa').click(function () {
    var $carouselPrensa = createModal.carouselPrensa();
    var $container = createModal.container($carouselPrensa);
    modalInsert($container);
  });
}

function modalCast() {
  $('#pj-barrientos').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/lldll_a02_032526.jpg');
    modalInsert($container);
  });
  $('#pj-onetto').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/lldll_a03_035879.jpg');
    modalInsert($container);
  });
  $('#pj-grandinetti').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/lldll_a03_035764.jpg');
    modalInsert($container);
  });
  $('#pj-miras').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/lldll_a03_028969.jpg');
    modalInsert($container);
  });
  $('#pj-aruzzi').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/aruzzi.jpg');
    modalInsert($container);
  });
  $('#pj-barassi').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/lldll_a03_034472.jpg');
    modalInsert($container);
  });
  $('#pj-rosso').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/nestor fabian.png');
    modalInsert($container);
  });
  $('#pj-lambertini').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/lambertini.png');
    modalInsert($container);
  });
}

function modalReady() {
  modalAfiche();
  modalTrailer();
  modalCarousel();
  modalCast();
}

$(document).ready(modalReady);
