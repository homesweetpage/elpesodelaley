 function loaderSpinner() {
    $(window).load(function () {
        var loader = $('.loader');
        var preloader = $('#preloader');
        loader.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){ consoel.log('trans') });
        loader.on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(){ consoel.log('anim') });
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        var i = 0;
        /*Center loader on half screen */
        loader.css({
            top: wHeight / 2 - 2.5,
            left: wWidth / 2 - 200
        })

        var plt = $('.preloadertop');
        var plb = $('.preloaderbottom');

        plt.css({
            top: 0,
            left: 0,
            right: 0,
            bottom: wHeight / 2 + 2.5
        });
        
        plb.css({
            top: wHeight / 2 + 7.5,
            left: 0,
            right: 0,
            bottom: 0
        })

        do {
            loader.animate({
                width: i
            }, 10)
            i += 3;
        } while (i <= 400)
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
                    bottom: '100%'
                })
                plb.animate({
                    top: '100%'
                })
            })
            loader.animate({
                top: '0',
                height: '100vh'
            },function(){
                $('body').css({
                    overflow: 'visible'
                })
            })
            
        }

        /* This line hide loader and show content */
        setTimeout(function () {
            $('#preloader').fadeOut('fast');
            (loader).fadeOut('slow');
            /*Set time in milisec */
        }, 3500);
    });

}

loaderSpinner();