'use strict';

function loaderSpinner() {
    $(window).load(function () {
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

        do {
            loader.animate({
                width: i
            }, 10);
            i += 3;
        } while (i <= 400);
        if (i === 402) {
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
            });

        }
    });

}

loaderSpinner();
