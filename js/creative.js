/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    $(window).scroll(function () {
        if( $(window).scrollTop() > $('#mainNav-bottom').offset().top) {
            $('#mainNav-bottom').hide();
            $('#mainNav-top').show();
        }
        if ($(window).scrollBottom() < $('#header').offset().bottom) {
            $('#mainNav-top').hide();
            $('#mainNav-bottom').show();
        }
    });

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

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
