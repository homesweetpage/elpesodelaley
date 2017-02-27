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
                typeWriter(elem,str[estado],0,enAnim);
            }      
        }
    }

    $('#pj-barrientos').hover(function(){
        typeWrite($(this),1,enAnimBarrientos);
    },function(){
        typeWrite($(this),0,enAnimBarrientos);
        if(!$('#pj-barrientos').is(":hover")){
            setTimeout(function(){
            typeWrite($('#pj-barrientos'),0,enAnimBarrientos);
        },800);}
    });

    $('#pj-grandinetti').hover(function(){
        typeWrite($(this),1,enAnimGrandinetti);
    },function(){
        typeWrite($(this),0,enAnimGrandinetti);
        if(!$('#pj-grandinetti').is(":hover")){
            setTimeout(function(){
            typeWrite($('#pj-grandinetti'),0,enAnimGrandinetti);
        },800);}
    });

    $('#pj-onetto').hover(function(){
        typeWrite($(this),1,enAnimOnetto);
    },function(){
        typeWrite($(this),0,enAnimOnetto);
        if(!$('#pj-onetto').is(":hover")){
            setTimeout(function(){
            typeWrite($('#pj-onetto'),0,enAnimOnetto);
        },800);}
    });

    $('#pj-miras').hover(function(){
        typeWrite($(this),1,enAnimMiras);
    },function(){
        typeWrite($(this),0,enAnimMiras);
        if(!$('#pj-miras').is(":hover")){
            setTimeout(function(){
            typeWrite($('#pj-miras'),0,enAnimMiras);
        },800);}
    });

    $('#pj-aruzzi').hover(function(){
        typeWrite($(this),1,enAnimAruzzi);
    },function(){
        typeWrite($(this),0,enAnimAruzzi);
        if(!$('#pj-aruzzi').is(":hover")){
            setTimeout(function(){
            typeWrite($('#pj-aruzzi'),0,enAnimAruzzi);
        },800);}
    });

    $('#pj-barassi').hover(function(){
        typeWrite($(this),1,enAnimBarassi);
    },function(){
         typeWrite($(this),0,enAnimBarassi);
         if(!$('#pj-barassi').is(":hover")){
            setTimeout(function(){
            typeWrite($('#pj-barassi'),0,enAnimBarassi);
        },800);}
    });

});




