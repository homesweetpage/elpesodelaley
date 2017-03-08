'use strict';

var createModal = {
  container: function($el) {
    var $div = $('<div class="mcontainer"></div>');
    $el.appendTo($div);
    return $div;
  },
  h1: function(title) {
    var $h1 = $('<h3 class="col-md-12">'+title+'</h3>');
    return $h1;
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
  musica: function(src) {
    var $musica = $('<iframe class="col-md-6" height="135" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+src+'&amp;auto_play=false&amp;color=3b5998&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false"></iframe>');
    return $musica;
  },
  carouselRodaje: function() {
    var $carouselRodaje = $('<section id="mrgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/rodaje/rodaje-1.JPG" data-color="red" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-3.JPG" data-color="yellow" al<<"Darío Grandinetti"></div><div class="item"><img src="images/rodaje/rodaje-4.JPG" data-color="green" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-5.JPG" data-color="turquoise" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-6.JPG" data-color="blue" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-7.JPG" data-color="purple" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-8.JPG" data-color="red" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-9.JPG" data-color="orange" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-10.JPG" data-color="yellow" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-11.JPG" data-color="green" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-12.JPG" data-color="turquoise" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-13.JPG" data-color="blue" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-14.JPG" data-color="purple" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-15.JPG" data-color="red" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-16.JPG" data-color="orange" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-18.JPG" data-color="green" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-19.JPG" data-color="turquoise" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-20.JPG" data-color="blue" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-21.JPG" data-color="purple" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-22.JPG" data-color="purple" alt="Foto de Rodaje"></div><div class="item"><img src="images/rodaje/rodaje-23.JPG" data-color="purple" alt="Foto de Rodaje"></div></div><a class="left carousel-control carousel-control-left" href="#mrgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mrgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselRodaje;
  },
  carouselRodaje2: function() {
    var $carouselRodaje2 = $('<section id="mr2galeria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/rodaje-bn/rodaje2-1.JPG" data-color="red" alt="Foto de rodaje - Blanco y Negro"></div><div class="item"><img src="images/rodaje-bn/rodaje2-3.JPG" data-color="yellow" al<<"Darío Grandinetti"></div><div class="item"><img src="images/rodaje-bn/rodaje2-4.JPG" data-color="green" alt="Foto de rodaje - Blanco y Negro"></div><div class="item"><img src="images/rodaje-bn/rodaje2-5.JPG" data-color="turquoise" alt="Foto de rodaje - Blanco y Negro"></div><div class="item"><img src="images/rodaje-bn/rodaje2-6.JPG" data-color="blue" alt="Foto de rodaje - Blanco y Negro"></div></div><a class="left carousel-control carousel-control-left" href="#mr2galeria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mr2galeria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
    return $carouselRodaje2;
  },
  carouselPrensa: function() {
    var $carouselPrensa = $('<section id="mpgaleria" class="carousel slide carousel-fade" data-ride="carousel"><div class="carousel-inner" role="listbox"><div class="item active"><img src="images/prensa/prensa-barrientos, grandinetti, onetto.jpg" data-color="red" alt="Barrientos - Grandinetti - Onetto"></div><div class="item"><img src="images/prensa/prensa-barrientos.jpg" data-color="orange" alt="Paola Barrientos"></div><div class="item"><img src="images/prensa/prensa-grandinetti.jpg" data-color="yellow" alt="Darío Grandinetti"></div><div class="item"><img src="images/prensa/prensa-onetto.jpg" data-color="green" alt="María Onetto"></div><div class="item"><img src="images/prensa/prensa-miras.jpg" data-color="turquoise" alt="Fernán Mirás"></div><div class="item"><img src="images/prensa/prensa-todos.jpg" data-color="blue" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div><div class="item"><img src="images/prensa/prensa-todos1.jpg" data-color="purple" alt="Fernán Mirás, Paola Barrientos, Darío Grandinetti, María Onetto"></div></div><a class="left carousel-control carousel-control-left" href="#mpgaleria" role="button" data-slide="prev"><img src="images/arrow-left-h.png" alt="Left Arrow" /><span class="sr-only">Previous</span></a><a class="right carousel-control carousel-control-right" href="#mpgaleria" role="button" data-slide="next"><img src="images/arrow-right-h.png" alt="Right Arrow" /><span class="sr-only">Next</span></a></section>');
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
  $('#rodaje1').click(function () {
    var $carouselRodaje = createModal.carouselRodaje();
    var $container = createModal.container($carouselRodaje);
    modalInsert($container);
  });
  $('#rodaje2').click(function () {
    var $carouselRodaje2 = createModal.carouselRodaje2();
    var $container = createModal.container($carouselRodaje2);
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
    $img.attr('src', 'images/postales/personajes/barrientos.jpg');
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
    $img.attr('src', 'images/postales/personajes/miras.jpg');
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
  $('#sinopsis-completa').click(function(event) {
    event.preventDefault();
    var $img = createModal.img();
    var $container = createModal.container($img);
    $img.attr('src', 'images/sinopsis.jpg');
    modalInsert($container);
  });
}

function modalMusica() {
  $('#musica-completa').click(function(event) {
    event.preventDefault();
    var playlist = [{
      title: 'Preludio Nro. 2 en Cm (Do menor) El Clave Bien Temperado Libro I (y piezas que a partir de él surgen):',
      list: ['310912563','310912558','310912556','310912554','310912552','310912546','310912541','310912535']
      },{
      title: 'Suite Francesa en Cm (Do menor) (ALLEMANDA Y SARABANDA):',
      list: ['310912531','310912522','310912513','310912507','310912503']
      },{
      title: 'Preludio Nro. 10 en Em (Mi menor) El Clave Bien Temperado Libro I (y piezas que a partir de él surgen):',
      list: ['310912500','310912498','310912496','310912494','310912488']
      },{
      title: 'Preludio en C#, El Clave Bien Temperado Libro I:',
      list: ['310912483','310912481']
      },{
      title: 'Fuga en C#, El Clave Bien Temperado Libro I:',
      list: ['310912474','310912470']
      },{
      title: 'Fuga en Em (Mi menor), El Clave Bien Temperado Libro I:',
      list: ['310912467']
      }];

    var $container = createModal.container(createModal.h1(playlist[0].title));
    for (var i = 0; i < playlist[0].list.length; i++) {
      createModal.musica(playlist[0].list[i]).appendTo($container);
    }

    for (var j = 1; j < playlist.length; j++) {
      createModal.h1(playlist[j].title).appendTo($container);
      for (var k = 0; k < playlist[j].list.length; k++) {
        createModal.musica(playlist[j].list[k]).appendTo($container);
      }
    }


    // var $h1 = $('<h1>title</h1>');
    // var $musica = ['310912563','310912558','310912556','310912554','310912552','310912546','310912541','310912535'];
    // var $container = createModal.container($h1);
    // for (var i = 0; i < $musica.length; i++) {
    //   createModal.musica($musica[i]).appendTo($container);
    // }
    modalInsert($container);
  });
}

function modalReady() {
  modalAfiche();
  modalTrailer();
  modalCarousel();
  modalCast();
  modalSinopsis();
  modalMusica();
}

$(document).ready(modalReady);
