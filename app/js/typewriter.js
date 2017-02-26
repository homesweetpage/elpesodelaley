$(document).ready(function () {

    var enAnimBarrientos = { val: false };
    var enAnimGrandinetti = { val: false };
    var enAnimOnetto = { val: false };
    var enAnimMiras = { val: false };
    var enAnimAruzzi = { val: false };
    var enAnimBarassi = { val: false };

    function typeWriter(elem,text,i,enAnim) {
        
        if (i < (text.length)) {
                elem.html(text.substring(0, i+1));
                setTimeout(function() {
                    typeWriter(elem,text, i + 1,enAnim)
                }, 20);
        }
        else{
            enAnim.val = false;
        }
    };

    function typeWrite(pj,estado,enAnim){
        var elem = pj.parent().next().find('.typewriter');
        var str = pj.children().attr("alt").split('-');
        if(enAnim.val == false){
            if(elem.html() !== str[estado]){
                enAnim.val = true;
                console.log(enAnimBarrientos.val,enAnimGrandinetti.val,enAnimMiras.val,enAnimAruzzi.val,enAnimBarassi.val);
                typeWriter(elem,str[estado],0,enAnim);
            }      
        }
    }

    $('#pj-barrientos').hover(function(){
        typeWrite($(this),1,enAnimBarrientos);
    },function(){
         typeWrite($(this),0,enAnimBarrientos);
    });

    $('#pj-grandinetti').hover(function(){
        typeWrite($(this),1,enAnimGrandinetti);
    },function(){
         typeWrite($(this),0,enAnimGrandinetti);
    });

    $('#pj-onetto').hover(function(){
        typeWrite($(this),1,enAnimOnetto);
    },function(){
         typeWrite($(this),0,enAnimOnetto);
    });

    $('#pj-miras').hover(function(){
        typeWrite($(this),1,enAnimMiras);
    },function(){
         typeWrite($(this),0,enAnimMiras);
    });

    $('#pj-aruzzi').hover(function(){
        typeWrite($(this),1,enAnimAruzzi);
    },function(){
         typeWrite($(this),0,enAnimAruzzi);
    });

    $('#pj-barassi').hover(function(){
        typeWrite($(this),1,enAnimBarassi);
    },function(){
         typeWrite($(this),0,enAnimBarassi);
    });

});




