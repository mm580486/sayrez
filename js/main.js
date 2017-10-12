(function () {
    "use strict";

    jQuery(document).ready(function () {
        var width = document.documentElement.clientWidth,
            height = document.documentElement.clientHeight,
            imgSrc = $('.paralax').attr('data-image-src'),
            blog = $(".blog-main .row"),
            grid = $(".portfolio-grid .row"),
            video = $('#video-bg'),
            YTplayer = $('.player'),
            win = $(window),
            navigation = $('.nav'),
            disabledItems = $('.disable'),
            iosFix = $('.service-section .section-flex .item, .service-section .section-flex .item .wrap, .contacts .progress-bars .bar'),
            paralaxItem = $('.paralax'),
            particlesJs = $('#particles-js'),
            popupImage = $('.image-popup'),
            menuToggle = $(".menu-icon, .bg-blur"),
            menuIcon = $(".menu-icon"),
            blurBg = $('.bg-blur'),
            menuFlex = $('.menu-flex'),
            menu = $('.menu'),
            menuDropdownLink = $(".dropdown > a "),
            tabsCaption = $('ul.tabs__caption'),
            partnersSlider = $(".partners-slider"),
            headerSlider = $(".header-slider"),
            teamSlider = $(".team-slider"),
            contactForm = $(".form-contact"),
            videoPopup = $('.popup-youtube, .popup-vimeo, .popup-gmaps'),
            accordeon = $(".accordeon-main"),
            accordeonActive = $(".accordeon-main.active"),
            postGallery = $('.post-gallery'),
            singleGallery = $('.blog-single .post-gallery');


        var counters_point = jQuery(".numbers-flex");
            if(counters_point.length){
           var counters_condition = false,
                options = {
                    useEasing: true,
                    useGrouping: true,
                    separator: ',',
                    decimal: '.'
                },
                counters_condition = false,
                num1 = jQuery('#num1').text(),
                num2 = jQuery('#num2').text(),
                num3 = jQuery('#num3').text(),
                num4 = jQuery('#num4').text(),
                counters = [
                    new CountUp("num1", 0, num1, 0, 1.8, options),
                    new CountUp("num2", 0, num2, 0, 1.8, options),
                    new CountUp("num3", 0, num3, 0, 1.8, options),
                    new CountUp("num4", 0, num4, 0, 1.8, options)
                ];
            counters_point.waypoint(function () {
                if (counters_condition == false) {
                    for (var j = 0; j < counters.length; j++) {
                        counters[j].start();
                    }
                    counters_condition == true;
                }
            }, {offset: '98%'});
        }


        if (singleGallery.length) {
            singleGallery.magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                /*mainClass: 'mfp-img-mobile',*/
                removalDelay: 300,

                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function (item) {
                        return item.el.attr('title');
                    }
                }
            });
        }

        /* Tabs functions */
        !function (e) {
            e(function () {
                tabsCaption.on("click", "li:not(.active)", function () {
                    e(this).addClass("active").siblings().removeClass("active").closest("div.tabs").find("div.tabs__content").removeClass("active").eq(e(this).index()).addClass("active");
                });
            });
        }(jQuery);

        /* Paralax header */
        paralaxItem.parallax({
            imageSrc: imgSrc,
            overScrollFix: true,
        });

        /* Header particles */
        if (particlesJs.length) {
            particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
            });
        }

        /* Post single image popup */
        popupImage.magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });

        videoPopup.magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });


        /* Accordeon */
        accordeon.on('click', function (e) {
            if ($(this).hasClass('active')) {
                e.preventDefault();
            }
            else {
                accordeon.removeClass('active');
                $(this).toggleClass('active');
                accordeon.children('.block-active').html('<i class="fa fa-plus" aria-hidden="true"></i>');
                $(this).children('.block-active').html('<i class="fa fa-minus" aria-hidden="true"></i>');
                accordeon.next().slideUp('fast');
                $(this).next().slideToggle('fast');
            }
        });
        accordeonActive.next().slideDown('fast');
        accordeonActive.on('click', function (e) {
            e.preventDefault();
        });

        /* Mobile menu toggle */
        menuToggle.on('click', function () {
            menuIcon.toggleClass("active");
            blurBg.toggleClass("active");
            menuFlex.toggleClass('active');
        });

        if (width < 992) {
            menu.append('<li class="disable"><a> </a></li>');
            menu.append('<li class="disable"><a> </a></li>');
            menuDropdownLink.on('click', function (e) {
                e.preventDefault();
                $(this).parent().toggleClass('active');
                $(this).parent().children('.dropdown-menu').slideToggle('fast');
            });
        }
        else {
            menuDropdownLink.on('click', function (e) {
                e.preventDefault();
            });
        }


        /* Fixed menu on scroll */
        win.on("scroll", function () {
            win.scrollTop() >= 1 ? navigation.addClass("fixed") : navigation.removeClass("fixed")
        });
        disabledItems.on('click', function (e) {
            e.preventDefault();
        });
        iosFix.on('click', function () {
            /* event for fix hover animation for IOS Safari */
        });

        /* Portfolio and blog masonry grid init  */
        if (grid.length) {
            grid.imagesLoaded(function () {
                grid.masonry();
            });
        }
        if (blog.length) {
            blog.imagesLoaded(function () {
                blog.masonry();
            });
        }


        /* Partners Slider */
        if (partnersSlider.length) {
            partnersSlider.owlCarousel({
                nav: false,
                dots: false,
                mouseDrag: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 2000,
                autoplayHoverPause: true,
                items: 5,
                margin: 30,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 5
                    },
                }
            });
        }

        if (postGallery.length) {
            postGallery.imagesLoaded(function () {
                postGallery.slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    easing: 'ease',
                    nav: true,
                    dots: true,
                    arrows: true,
                    appendDots: postGallery,
                    appendArrows: postGallery,
                    prevArrow: "<div class='prev'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
                    nextArrow: "<div class='next'><i class='fa fa-angle-right' aria-hidden='true'></i></div>"
                });
            });
        }


        /* Header Slider  */
        if (headerSlider.length) {
            headerSlider.slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                easing: 'ease',
                nav: true,
                dots: true,
                arrows: true,
                appendDots: headerSlider,
                appendArrows: headerSlider,
                autoplay: true,
                autoplaySpeed: 3500,
                prevArrow: "<div class='prev'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
                nextArrow: "<div class='next'><i class='fa fa-angle-right' aria-hidden='true'></i></div>",
            });
        }

        /* Page About Team Slider Setting  */
        if (teamSlider.length) {
            teamSlider.owlCarousel({
                loop: true,
                items: 3,
                margin: 30,
                smartSpeed: 500,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    660: {
                        items: 1,
                        margin: 0
                    },
                    991: {
                        items: 2,
                        margin: 0
                    },
                    992: {
                        items: 3,
                        margin: 30
                    },

                }
            });
        }

        /* Header html video bg */
        video.length && (width > 991 ? video.play() : video.remove());

        /* Header YouTube video bg */
        YTplayer.length && (width > 991 ? YTplayer.YTPlayer() : YTplayer.remove());


        /* Contact form submit  */
        contactForm.submit(function () {
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: $(this).serialize(),

            }).done(function () {
                contactForm.trigger("reset");
            });
            return false;
        });


    }); // jQuery document ready

    /* Google Map Settings */
    var mapElem = document.getElementById('map');
    if (mapElem) {
        google.maps.event.addDomListener(window, 'load', initMap);

        function initMap() {
            var map = new google.maps.Map(mapElem, {
                zoom: 12,
                center: new google.maps.LatLng(48.922633,24.711116999999998),
                scrollwheel: false,
            });
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(48.922633, 24.711116999999998),
                map: map,
                icon: "img/pin.png"
            });
            var infowindow = new google.maps.InfoWindow({
                content: 'Your Address'
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        }
    }


})();

