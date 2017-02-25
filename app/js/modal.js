$('.modal-close').click(function(event) {
  event.preventDefault();
  $(this).parent().fadeOut(1000,'swing');
});

function mostrarModal(){
  $('.modal-generico').fadeIn(1000,'swing');
}

var createModal = {
  img: function() {
    var image = $('<img >');
    return image;
  },
  video: function() {
    var trailer = $('<iframe src="https://player.vimeo.com/video/63602119?title=0&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
    return trailer;
  }
}

function insertModal($el) {
  $('#Modal').css('display','block');;
  $('.mcontainer').empty();
  $el.appendTo('.mcontainer');
}

$(document).ready(function () {
  $('#afiche').click(function () {
    var $img = createModal.img();
    $img.attr("src", this.src);
    insertModal($img);
  });

  $('#avance').click(function () {
    var $video = createModal.video();
    insertModal($video);
  });
});
