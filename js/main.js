/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    $(window).load(function () {
        var events = [["Young Love", "2005", "img/events/8th-grade.jpg", "Tyler and Amanda met in middle school when they were just 11 years old. Amanda was a new student in 7th grade, and Tyler, quickly smitten, was eager to show her around."],
                        ["High School Sweethearts", "2008", "img/events/highschool.jpg", "After just 3 years of courtship, Tyler's crush was finally reciprocated, and Amanda agreed to go on a date at the Central Park zoo."],
                        ["Heading West", "2010", "img/events/hm-grad.jpg", "After graudating from Horace Mann, Tyler and Amanda headed west to Stanford. What a happy coincidence that they both decided to go to the same college!"],
                        ["Freshman Year", "2011", "img/events/freshman.jpg", "College was full of new people and new experiences. Tyler joined the squash team while Amanda played soccer. They spent countless hours in the library, Tyler coding for his computer science classes while Amanda studied management science and engineering."],
                        ["Study Abroad", "2012", "img/events/abroad.jpg", "After 4 straight years spent by each other's side, Amanda headed off to study in Paris, and Tyler flew south to Brazil. Amidst endless nights of sobbing on long distance phone calls, they managed to find some time for fun."],
                        ["Dancing Through Life", "2013", "img/events/dancing.jpg", "After returning from abroad, Tyler and Amanda enjoyed their last few trimesters partying with friends in Sigma Nu and Pi Phi."],
                        ["See ya Stanford!", "2014", "img/events/grad.jpg", "Before they new it, college was over. Tyler became a Product Manager working for a tech company in New York, and Amanda joined McKinsey & Company  as a consultant."],
                        ["Moving In", "2015", "img/events/moving.jpg", "After a year back home in New York, Tyler and Amanda packed their bags and moved to Brooklyn! Even though it was just across the river, it felt like the start of something big..."]];
        for (var i = 0; i < events.length; i++) {
            if (i % 2 == 0) {
                var elem = '<li class="left"><div class="circle"></div><div class="timeline-panel"><h4 class="timeline-subtitle">' + events[i][1] + '</h4><h3 class="timeline-title">' + events[i][0] + '</h3><img id="imageresource" src="' + events[i][2] + '" class="img-responsive" alt=""><p>' + events[i][3] + '</p></div></li>';
            } else {
                var elem = '<li class="right"><div class="circle"></div><div class="timeline-panel"><h4 class="timeline-subtitle">' + events[i][1] + '</h4><h3 class="timeline-title">' + events[i][0] + '</h3><img id="imageresource" src="' + events[i][2] + '" class="img-responsive" alt=""><p>' + events[i][3] + '</p></div></li>';                
            }
            $('#timeline').append(elem);
        }
        $('#timeline').append('<li class="timeline-end"><div class="circle"></div></li>');

        var bridesmaids = [["img/bridesmaids/jasmine.jpg", "Jasmine Li", "Maid of Honor & Friend"],
                            ["img/bridesmaids/moo.jpg", "Molly Duff", "Maid of Honor & Friend"],
                            ["img/bridesmaids/aiyi.jpg", "Aiyi Ecker", "Friend"],
                            ["img/bridesmaids/greta.jpg", "Greta Anderson", "Friend"],
                            ["img/bridesmaids/chrissy.jpg", "Chrissy Jones", "Friend"],
                            ["img/bridesmaids/carol.jpg", "Carolina Brita", "Cousin"],
                            ["img/bridesmaids/katie.jpg", "Katie Walker", "Friend"],
                            ["img/bridesmaids/luana.jpg", "Luana Dias Gomes", "Friend"],
                            ["img/bridesmaids/hannah.jpg", "Hannah Kaufman", "Friend"],
                            ["img/bridesmaids/nicolle.jpg", "Nicolle Strand", "Sister-in-Law"]];
        for (var i = 0; i < bridesmaids.length; i++) {
            var lady = '<div class="col-md-3 col-sm-6 co-xs-12"><div class="gal-item"><a id="pop" href="#" data-toggle="modal" data-target="#3"><img src="' + bridesmaids[i][0] + '"></a><div class="gal-item-meta"><div>' + bridesmaids[i][1] + '</div><div>' + bridesmaids[i][2] + '</div></div></div></div>';
            $('#bridesmaids').append(lady);
        }
        
        var groomsmen = [["img/groomsmen/mike.jpg", "Mike Nehmad", "Best Man & Friend"],
                        ["img/groomsmen/chris.jpg", "Chris Eismann", "Best Man & Cousin"],
                        ["img/groomsmen/thiago.jpg", "Thiago Valente", "Cousin-in-Law"],
                        ["img/groomsmen/keane.jpg", "Keane Ehsani", "Friend"],
                        ["img/groomsmen/phoun.jpg", "Phounsouk Sivilay", "Friend"],
                        ["img/groomsmen/nicky.jpg", "Nicky Harnik", "Friend"],
                        ["img/groomsmen/billy.jpg", "Bill Eismann", "Cousin"],
                        ["img/groomsmen/shane.jpg", "Shane Hegde", "Friend"],
                        ["img/groomsmen/brett.jpg", "Brett Lieberman", "Friend"],
                        ["img/groomsmen/freddie.jpg", "Freddie Adler", "Friend"]];
        for (var i = 0; i < groomsmen.length; i++) {
            var man = '<div class="col-md-3 col-sm-6 co-xs-12"><div class="gal-item"><a id="pop" href="#" data-toggle="modal" data-target="#3"><img src="' + groomsmen[i][0] + '"></a><div class="gal-item-meta"><div>' + groomsmen[i][1] + '</div><div>' + groomsmen[i][2] + '</div></div></div></div>';
            $('#groomsmen').append(man);
        }
        $("#preloader").fadeOut();
    });

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

})(jQuery); // End of use strict
