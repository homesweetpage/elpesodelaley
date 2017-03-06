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
    var $video = $('<iframe src="https://player.vimeo.com/video/204567702?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    var $div = $('<div class="video-container"></div>');
    $video.appendTo($div);
    return $div;
  },
  carouselRodaje: function() {
    var $carouselRodaje = $('<section id="mrgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/rodaje/rodaje-1.JPG" data-color="red" alt="María Onetto"></div><div class="item"><img src="images/rodaje/rodaje-3.JPG" data-color="yellow" al<<"Darío Grandinetti"></div><div class="item"><img src="images/rodaje/rodaje-4.JPG" data-color="green" alt="Fernán Mirás"></div><div class="item"><img src="images/rodaje/rodaje-5.JPG" data-color="turquoise" alt="Reales"></div><div class="item"><img src="images/rodaje/rodaje-6.JPG" data-color="blue" alt="Comisario"></div><div class="item"><img src="images/rodaje/rodaje-7.JPG" data-color="purple" alt="Daniel Lambertini-Paola Barrientos"></div><div class="item"><img src="images/rodaje/rodaje-8.JPG" data-color="red" alt="Paola Barrientos"></div><div class="item"><img src="images/rodaje/rodaje-9.JPG" data-color="orange" alt="El nene"></div><div class="item"><img src="images/rodaje/rodaje-10.JPG" data-color="yellow" alt="Nestor Fabian"></div><div class="item"><img src="images/rodaje/rodaje-11.JPG" data-color="green" alt="El Nono"></div><div class="item"><img src="images/rodaje/rodaje-12.JPG" data-color="turquoise" alt="Paola Barrientos"></div><div class="item"><img src="images/rodaje/rodaje-13.JPG" data-color="blue" alt="Fernán Mirás"></div><div class="item"><img src="images/rodaje/rodaje-14.JPG" data-color="purple" alt="Daniel Lambertini-Paola Barrientos"></div><div class="item"><img src="images/rodaje/rodaje-15.JPG" data-color="red" alt="Paola Barrientos"></div><div class="item"><img src="images/rodaje/rodaje-16.JPG" data-color="orange" alt="El nene"></div><div class="item"><img src="images/rodaje/rodaje-18.JPG" data-color="green" alt="El Nono"></div><div class="item"><img src="images/rodaje/rodaje-19.JPG" data-color="turquoise" alt="Paola Barrientos"></div><div class="item"><img src="images/rodaje/rodaje-20.JPG" data-color="blue" alt="Fernán Mirás"></div><div class="item"><img src="images/rodaje/rodaje-21.JPG" data-color="purple" alt="Daniel Lambertini-Paola Barrientos"></div><div class="item"><img src="images/rodaje/rodaje-22.JPG" data-color="purple" alt="Daniel Lambertini-Paola Barrientos"></div><div class="item"><img src="images/rodaje/rodaje-23.JPG" data-color="purple" alt="Daniel Lambertini-Paola Barrientos"></div></div><a class="left carousel-control carousel-control-left" href="#mrgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mrgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselRodaje;
  },
  carouselPrensa: function() {
    var $carouselPrensa = $('<section id="mpgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/prensa/prensa-barrientos, grandinetti, onetto.jpg" data-color="red" alt="Barrientos - Grandinetti - Onetto"></div><div class="item"><img src="images/prensa/prensa-barrientos.jpg" data-color="orange" alt="Paola Barrientos"></div><div class="item"><img src="images/prensa/prensa-grandinetti.jpg" data-color="yellow" alt="Darío Grandinetti"></div><div class="item"><img src="images/prensa/prensa-onetto.jpg" data-color="green" alt="María Onetto"></div><div class="item"><img src="images/prensa/prensa-miras.jpg" data-color="turquoise" alt="Fernán Mirás"></div><div class="item"><img src="images/prensa/prensa-todos.jpg" data-color="blue" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div><div class="item"><img src="images/prensa/prensa-todos1.jpg" data-color="purple" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div></div><a class="left carousel-control carousel-control-left" href="#mpgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mpgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselPrensa;
  },
  sinopsis: function() {
    var $sinopsis = $('<img >');
    return $sinopsis;
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
    $img.attr('src', 'images/postales/personajes/lldll_a02_032526.jpg');
    modalInsert($container);
  });
  $('#pj-onetto').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/onetto.jpg');
    modalInsert($container);
  });
  $('#pj-grandinetti').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/grandinetti.jpg');
    modalInsert($container);
  });
  $('#pj-miras').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/lldll_a03_028969.jpg');
    modalInsert($container);
  });
  $('#pj-aruzzi').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/aruzzi.jpg');
    modalInsert($container);
  });
  $('#pj-barassi').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/barassi.jpg');
    modalInsert($container);
  });
  $('#pj-rosso').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/rosso.jpg');
    modalInsert($container);
  });
  $('#pj-lambertini').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/personajes/lambertini.jpg');
    modalInsert($container);
  });
}

function modalSinopsis() {
  $('#sinopsis-completa').click(function () {
    var $img = createModal.sinopsis();
    var $container = createModal.container($img);
    $img.attr('src', 'images/postales/galeria/test2 lldll_a02_000615.jpg');
    modalInsert($container);
  });
}

function modalReady() {
  modalAfiche();
  modalTrailer();
  modalCarousel();
  modalCast();
  modalSinopsis();
}

$(document).ready(modalReady);
