'use strict';

function isLoaded() {
    var salida;
    switch (document.readyState) {
        case 'loading':
            // The document is still loading.
            salida = false;
            break;
        case 'interactive':
            // The document has finished loading. We can now access the DOM elements.
            salida = false;
            break;
        case 'complete':
            // The page is fully loaded.
            salida = true;
            break;
    }
    return salida;
}



function loaderSpinner() {
    var loader = $('.loader');
    var preloader = $('#preloader');
    var plt = $('.preloadertop');
    var plb = $('.preloaderbottom');
    var wHeight = $(window).height();
    var wWidth = $(window).width();
    var i = 0;
    /*Center loader on half screen */
    loader.css({
        top: wHeight / 2 - 2.5,
        left: wWidth / 2 - 200
    });

    plt.css({
        top: 0,
        left: 0,
        right: 0,
        minHeight: wHeight / 2 - 2.5
    });

    plb.css({
        minHeight: wHeight / 2 - 2.5,
        left: 0,
        right: 0,
        bottom: 0
    });

    function loadedHandle() {
        loader.animate({
            left: 0,
            width: '100%'
        },function(){
            preloader.css({
                backgroundColor: 'transparent'
            });
            loader.css({
                backgroundColor: 'transparent'
            });
            plt.animate({
                minHeight: '0px'
            });
            plb.animate({
                minHeight: '0px'
            });
        });
        loader.animate({
            top: '0',
            height: '100vh'
        },function(){
            $('body').css({
                overflow: 'visible'
            });
            preloader.addClass('hidden');
            playMusic();
        });
    }

    function loadingHandler() {
        var isL = isLoaded();
        if (isL) {
            i = 400;
        } else {
            i += 6;
            if (i > 400) {
                i = 0;
            }
        }
        loader.animate({
            width: i
        }, 66, function() {
            if (isL) {
                loadedHandle();
            } else {
                loadingHandler();
            }
        });
    }

    loadingHandler();
}

loaderSpinner();