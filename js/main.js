(function ($) {
    'use strict';

    $(document).ready(function () {
        $('.product-details .button-minus').click(function () {
            var $input = $(this).parent().find('#cont');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.product-details .button-plus').click(function () {
            var $input = $(this).parent().find('#cont');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });

})(jQuery);

// SLIDER
const heroSwiper = new Swiper('.heroSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const productSwiper = new Swiper('.productSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: '.productSwiper-button-next',
        prevEl: '.productSwiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

const productItemSwiper = new Swiper('.productItemSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: '.productItemSwiper-next',
        prevEl: '.productItemSwiper-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


// Glightbox
const lightboxProduct = GLightbox({
    selector: '.glightbox2'
});

const lightboxVideo = GLightbox({
    selector: '.glightbox3'
});


// SEARCH MODAL
const toggleSearch = () => document.body.classList.toggle('open-search-modal');