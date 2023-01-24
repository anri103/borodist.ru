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

/*//////////////////////////////////////////////////////////////////
[ SLIDER ]*/

// На index.html

const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    spaceBetween: 10,
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

const productCardSwiper = new Swiper('.productCardSwiper', {
    slidesPerView: 2,
    grid: {
        fill: 'row',
        rows: 4,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    navigation: {
        nextEl: '.productCardSwiper-next',
        prevEl: '.productCardSwiper-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            grid: {
                rows: 2,
            },
        },
        992: {
            slidesPerView: 4,
            grid: {
                rows: 2,
            },
        },
    },
});

const promotionSwiper = new Swiper('.promotionSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

const additionalItemsSwiper = new Swiper('.additionalItemsSwiper', {
    slidesPerView: 2,
    grabCursor: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },
});

// На shop-item.html
const productItemSwiper = new Swiper('.productItemSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.productItemSwiper-next',
        prevEl: '.productItemSwiper-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*//////////////////////////////////////////////////////////////////
[ Glightbox ]*/

const lightboxProduct = GLightbox({
    selector: '.glightbox2'
});

const lightboxVideo = GLightbox({
    selector: '.glightbox3'
});