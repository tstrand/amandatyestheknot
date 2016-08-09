/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // Insert timeline and wedding party content (to avoid repeated HTML)
    $(window).load(function () {
       $("#myCarousel").carousel('pause');
        var events = [["Jovens", "2005", "img/events/8th-grade.jpg", "Amanda e Tyler se conheceram, na escola Horace Mann, em 2005, onde ambos cursavam a 7a série do ensino fundamental. Amanda, como aluna nova, chamou logo a atenção do Tyler  que rapidamente interessou-se em mostrar-lhe tudo à volta."],
                        ["Namorados", "2008", "img/events/highschool.jpg", "Após três anos de cortejo, Amanda aceitou o convite de Tyler para se encontrarem no Zoológico do Central Park em Marco de 2008. E assim uma linda história de amor tem início..."],
                        ["Término do Ensino Médio. Destino: Califórnia", "2010", "img/events/hm-grad.jpg", "Ao terminarem o ensino médio, na escola Horace Mann, Amanda 17 e Tyler 18, ingressaram na Universidade Stanford na California. Feliz coincidência! Assim sendo, para felicidade de ambos, suas vidas vão sendo cada vez mais entrelaçadas."],
                        ["Primeiro ano na Stanford", "2011", "img/events/freshman.jpg", "Morando a milhares de quilômetros de casa, vida totalmente independente, repleta de novas experiências, novos amigos e muitas festas.  Tyler ingressou no time oficial de Squash e dedicava longas horas estudando Computação, enquanto Amanda se dividia entre jogos de futebol e aulas de Engenharia de Gestão."],
                        ["Voando mais longe: Estudando no exterior", "2012", "img/events/abroad.jpg", "Após 4 anos sem se afastarem um do outro, surgiu a oportunidade de estudarem no exterior.  Amanda foi aceita pela Sorbonne em Paris, e Tyler é aceito pela PUC do RJ. Assim fizeram novos amigos, muitas viagens e novos horizontes surgiram. Apesar da distância e lágrimas de muitas saudades, que eram amenizadas por longas chamadas internacionais, o amor entre os dois se solidificava."],
                        ["Dançando vida a fora", "2013", "img/events/dancing.jpg", "Após retornarem do exterior, de volta a Stanford, Tyler e Amanda aproveitavam seus últimos trimestres na faculdade entre amigos, trabalho e estudos (nem tanto!) e claro ... muitas festas!"],
                        ["Até breve Stanford!", "2014", "img/events/grad.jpg", "Momentos felizes parecem que passam mais rápido mesmo! Os anos de faculdade chegam ao fim. Não é fácil deixar esse campus e o sol da Califórnia, mas Amanda e Tyler estão prontos para a vida adulta. Ambos se formam com honras pela Sociedade Phi Beta Kappa. Amanda recebe diplomas em bacharel e mestrado. Tyler cria sua primeira companhia, vende-a e se torna Gerente de Produção de uma empresa de informática e Amanda começa a trabalhar para McKinsey & Company, empresa de consultoria empresarial, ambas em NY."],
                        ["Morando juntos", "2015", "img/events/moving.jpg", "Após um ano, ao retornarem da Califórnia, Amanda e Tyler decidem que é hora de morarem juntos e se mudam para Williamsburg, Brooklyn! E assim tão jovens e com uma bagagem já tão extensa e rica de experiências sentem que algo maior e mais sólido está por acontecer..."]];
        for (var i = 0; i < events.length; i++) {
            if (i % 2 == 0) {
                var elem = '<li class="left"><div class="circle"></div><div class="timeline-panel"><h4 class="timeline-subtitle">' + events[i][1] + '</h4><h3 class="timeline-title">' + events[i][0] + '</h3><img id="imageresource" src="' + events[i][2] + '" class="img-responsive" alt=""><p>' + events[i][3] + '</p></div></li>';
            } else {
                var elem = '<li class="right"><div class="circle"></div><div class="timeline-panel"><h4 class="timeline-subtitle">' + events[i][1] + '</h4><h3 class="timeline-title">' + events[i][0] + '</h3><img id="imageresource" src="' + events[i][2] + '" class="img-responsive" alt=""><p>' + events[i][3] + '</p></div></li>';                
            }
            $('#timeline').append(elem);
        }
        $('#timeline').append('<li class="timeline-end"><div class="circle"></div></li>');

        var bridesmaids = [["img/bridesmaids/jasmine.jpg", "Jasmine Li", "Maid of Honor & Amiga"],
                            ["img/bridesmaids/moo.jpg", "Molly Duff", "Maid of Honor & Amiga"],
                            ["img/bridesmaids/carol.jpg", "M. Carolina Ferreira", "Prima"],
                            ["img/bridesmaids/nicolle.jpg", "Nicolle Strand", "Irmã do Noivo"],
                            ["img/bridesmaids/greta.jpg", "Greta Anderson", "Amiga"],
                            ["img/bridesmaids/luana.jpg", "Luana Dias Gomes", "Amiga"],
                            ["img/bridesmaids/aiyi.jpg", "Aiyi Ecker", "Amiga"],
                            ["img/bridesmaids/chrissy.jpg", "Chrissy Jones", "Amiga"],
                            ["img/bridesmaids/hannah.jpg", "Hannah Kauffman", "Amiga"],
                            ["img/bridesmaids/katie.jpg", "Katie Walker", "Amiga"]];
        for (var i = 0; i < bridesmaids.length; i++) {
            var lady = '<div class="col-xs-6 col-sm-4 col-lg-3"><div class="gal-item"><a id="pop" href="#" data-toggle="modal" data-target="#3"><img src="' + bridesmaids[i][0] + '"></a><div class="gal-item-meta"><div class="name">' + bridesmaids[i][1] + '</div><div>' + bridesmaids[i][2] + '</div></div></div></div>';
            $('#bridesmaids').append(lady);
        }
        
        var groomsmen = [["img/groomsmen/mike.jpg", "Mike Nehmad", "Best Man & Amigo"],
                        ["img/groomsmen/chris.jpg", "Chris Eismann", "Best Man & Primo"],
                        ["img/groomsmen/billy.jpg", "Bill Eismann", "Primo"],
                        ["img/groomsmen/thiago.jpg", "Thiago Valente", "Primo da Noiva"],
                        ["img/groomsmen/freddie.jpg", "Freddie Adler", "Amigo"],
                        ["img/groomsmen/keane.jpg", "Keane Ehsani", "Amigo"],
                        ["img/groomsmen/phoun.jpg", "Phounsouk Sivilay", "Amigo"],
                        ["img/groomsmen/nicky.jpg", "Nicky Harnik", "Amigo"],
                        ["img/groomsmen/shane.jpg", "Shane Hegde", "Amigo"],
                        ["img/groomsmen/brett.jpg", "Brett Lieberman", "Amigo"]];
        for (var i = 0; i < groomsmen.length; i++) {
            var man = '<div class="col-xs-6 col-sm-4 col-lg-3"><div class="gal-item"><a id="pop" href="#" data-toggle="modal" data-target="#3"><img src="' + groomsmen[i][0] + '"></a><div class="gal-item-meta"><div class="name">' + groomsmen[i][1] + '</div><div>' + groomsmen[i][2] + '</div></div></div></div>';
            $('#groomsmen').append(man);
        }
        $("#preloader").fadeOut();
    });

    // Fix the nav to the top and bottom are the right times, and surface the Portuguese prompt
    $(window).scroll(function () {
        $("#myCarousel:in-viewport").carousel('cycle');

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
        
        // if ( ($(window).scrollTop() > ( $('#our-story').offset().top)) && ($(window).scrollTop() + $(window).height() < ( $('#wedding-party').offset().top))) {
        //     if (!$('#callout').hasClass("visible")) {
        //         $('#callout').toggleClass("visible");
        //         $('#callout').slideToggle({
        //             direction: "up"
        //         }, 300);
        //     }
        // } else {
        //     if ($('#callout').hasClass("visible")) {
        //         $('#callout').toggleClass("visible");
        //         $('#callout').slideToggle({
        //             direction: "down"
        //         }, 300);
        //     }
        // }
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

    // Activate and deactivate scrolling on the map embed
    $('#map-cover').click(function() {
        $('#map-cover').hide();
    });
    $('body').click(function(e) {
        if ($(e.target).closest('#map-cover').length === 0) {
            $('#map-cover').show();
        }
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery);