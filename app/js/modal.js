$('.modal-close').click(function(event) {
    event.preventDefault();
    $(this).parent().fadeOut(1000,'swing');
});

function mostrarModal(){
    $('.modal-generico').fadeIn(1000,'swing');
}