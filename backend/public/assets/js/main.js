/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js

****************************************************/

(function ($) {
    "use strict";

    var windowOn = $(window);
    ////////////////////////////////////////////////////
    // 01. PreLoader Js
    windowOn.on("load", function () {
        $("#preloader").fadeOut("slow", function () {
            $(this).remove();
        });
    });

    ////////////////////////////////////////////////////
    // 02. Mobile Menu Js
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        meanExpand: ['<i class="fal fa-plus"></i>'],
    });

    ////////////////////////////////////////////////////
    // 03. Data Background Js
    $("[data-background]").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });
    $("[data-bg-color").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });
    $("[data-width").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    ////////////////////////////////////////////////////
    // 04. Nice Select Js
    $(".has-nice-select").niceSelect();

    ////////////////////////////////////////////////////
    // 05. slider__active Slider Js
    /* ===============================  Swiper slider  =============================== */
    if (jQuery(".lv-slider-active").length > 0) {
        let sliderActive1 = ".lv-slider-active";
        let sliderInit1 = new Swiper(sliderActive1, {
            // Optional parameters
            slidesPerView: 1,
            slidesPerColumn: 1,
            parallex: false,
            speed: 1000,
            freeMode: false,
            grabCursor: true,
            parallax: true,
            paginationClickable: true,
            loop: false,

            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: ".slider-paginations",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">0' + (index + 1) + "</span>";
                },
            },
            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            a11y: false,
        });

        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]").each(function () {
                    let anim = $(this).data("animation");
                    let delay = $(this).data("delay");
                    let duration = $(this).data("duration");

                    $(this)
                        .removeClass("anim" + anim)
                        .addClass(anim + " animated")
                        .css({
                            webkitAnimationDelay: delay,
                            animationDelay: delay,
                            webkitAnimationDuration: duration,
                            animationDuration: duration,
                        })
                        .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                            $(this).removeClass(anim + " animated");
                        });
                });
            };
            animated();
            // Make animated when slide change
            init.on("slideChange", function () {
                $(sliderActive1 + " [data-animation]").removeClass("animated");
            });
            init.on("slideChange", animated);
        }

        animated_swiper(sliderActive1, sliderInit1);
    }
    ////////////////////////////////////////////////////
    // 06. Masonary Js
    $(".gallery-grid").imagesLoaded(function () {
        // init Isotope
        var $grid = $(".gallery-grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: ".grid-item",
            },
        });
    });

    /* magnificPopup img view */
    $(".image-popups").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    /* magnificPopup video view */
    $(".video-popup").magnificPopup({
        type: "iframe",
    });

    ////////////////////////////////////////////////////
    // 07. Wow Js
    new WOW().init();

    ////////////////////////////////////////////////////
    // 08. Odometer Js
    jQuery(".odometer").appear(function (e) {
        var odo = jQuery(".odometer");
        odo.each(function () {
            var countNumber = jQuery(this).attr("data-count");
            jQuery(this).html(countNumber);
        });
    });

    // $(".odometer").html(456789); // with jQuery
    //////////////////////////////////////////////////////
    // 09. testimonial
    var baTestimonialActive = new Swiper(".ba-testimonial-active", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: ".ba-testimonial-paginate",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
    //////////////////////////////////////////////////////
    // brand
    var baBrandActive = new Swiper(".ba-brand-active", {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: ".ba-brand-paginate",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });
    //////////////////////////////////////////////////////
    // brand
    var baTestimonialActiveTwo = new Swiper(".ba-testimonial-active-2", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: ".ba-brand-paginate",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });
    $(".ba-header-sidebar-action").on("click", function () {
        $(".ba-sidebar-area").addClass("active");
        $(".overlay").addClass("active");
    });
    $(".ba-header-sidebar-action-close, .overlay").on("click", function () {
        $(".ba-sidebar-area").removeClass("active");
        $(".overlay").removeClass("active");
    });
    $(".ba-header-search-btn").on("click", function () {
        $("body").addClass("search-active");
    });
    $(".ba-search-popup .ba-color-layer").on("click", function () {
        $("body").removeClass("search-active");
    });
})(jQuery);
