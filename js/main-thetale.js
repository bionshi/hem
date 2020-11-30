jQuery(document).ready(function($) {
    //cache some jQuery objects
    var modalTrigger1 = $('.cd-modal-trigger-1');
    var modalWindow1 = $('.cd-modal#1');
    var modalTrigger2 = $('.cd-modal-trigger-2');
    var modalWindow2 = $('.cd-modal#2');
    var transitionLayer = $('.cd-transition-layer');
    var transitionBackground = transitionLayer.children();

    var frameProportion = 1.78, //png frame aspect ratio
        frames = 25, //number of png frames
        resize = false;

    //set transitionBackground dimentions
    setLayerDimensions();
    $(window).on('resize', function() {
        if (!resize) {
            resize = true;
            (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300): window.requestAnimationFrame(setLayerDimensions);
        }
    });

    //open modal window
    modalTrigger1.on('click', function(event) {
        event.preventDefault();
        transitionLayer.addClass('visible opening');
        var delay = ($('.no-cssanimations').length > 0) ? 0 : 600;
        setTimeout(function() {
            modalWindow1.addClass('visible');
        }, delay);
    });

    //close modal window
    modalWindow1.on('click', '.modal-close', function(event) {
        event.preventDefault();
        transitionLayer.addClass('closing');
        modalWindow1.removeClass('visible');
        transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            transitionLayer.removeClass('closing opening visible');
            transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
        });
    });

    //open modal window
    modalTrigger2.on('click', function(event) {
        event.preventDefault();
        transitionLayer.addClass('visible opening');
        var delay = ($('.no-cssanimations').length > 0) ? 0 : 600;
        setTimeout(function() {
            modalWindow2.addClass('visible');
        }, delay);
    });

    //close modal window
    modalWindow2.on('click', '.modal-close', function(event) {
        event.preventDefault();
        transitionLayer.addClass('closing');
        modalWindow2.removeClass('visible');
        transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            transitionLayer.removeClass('closing opening visible');
            transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
        });
    });

    function setLayerDimensions() {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            layerHeight, layerWidth;

        if (windowWidth / windowHeight > frameProportion) {
            layerWidth = windowWidth;
            layerHeight = layerWidth / frameProportion;
        } else {
            layerHeight = windowHeight * 1.2;
            layerWidth = layerHeight * frameProportion;
        }

        transitionBackground.css({
            'width': layerWidth * frames + 'px',
            'height': layerHeight + 'px',
        });

        resize = false;
    }
});