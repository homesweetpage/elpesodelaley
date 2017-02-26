$(document).ready(function () {
    var typewriterEnAnimacion = false;
    
    function typeWriter(elem,text, i) {
        if (i < (text.length)) {
            elem.html(text.substring(0, i+1));
            setTimeout(function() {
                typeWriter(elem,text, i + 1)
            }, 70);
        }
        else{
            typewriterEnAnimacion = false;
        }
    };

    $('#pj-aruzzi').hover(function(){
        var elem = $(this).parent().next().find('.typewriter');
        if(typewriterEnAnimacion == false){
            if(elem.html() !== "Betty"){
                typewriterEnAnimacion = true;
                typeWriter(elem,"Betty",0);
            }      
        }
    },function(){
        var elem = $(this).parent().next().find('.typewriter');
        if(typewriterEnAnimacion == false){
            if(elem.html() !== "Jorgelina Aruzzi"){
                typewriterEnAnimacion = true;
                typeWriter(elem,"Jorgelina Aruzzi",0);
            }
        }
    });

});




