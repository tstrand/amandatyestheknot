/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    $(window).scroll(function () {
        if ( $(window).scrollTop() > ( $('#home').offset().top + $('#home').height() - $('#mainNav').height() - 10) ) {
            $('#mainNav').addClass("navbar-fixed-top");
            $('#mainNav').removeClass("navbar-fixed-bottom");
        } else {            
            $('#mainNav').removeClass("navbar-fixed-top");
            $('#mainNav').addClass("navbar-fixed-bottom");
        }
        if ( $(window).scrollTop() > ( ($('#home').offset().top + $('#home').height() - $('#mainNav').height())*.7 ) ) {
            $('.fronds').addClass('fronds-after');
        } else {
            $('.fronds').removeClass('fronds-after');
        }
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '#mainNav',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });


    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    $(function() {
        $('#pop').on('click', function(e) {
            e.preventDefault();
            $('#imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');   
        });     
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
