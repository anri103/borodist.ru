(function ($) {
    'use strict';

    // $(document).ready(function () {
    //     $('.quantity-input .button-minus').click(function () {
    //         var $input = $(this).parent().find('#cont');
    //         var count = parseInt($input.val()) - 1;
    //         count = count < 1 ? 1 : count;
    //         $input.val(count);
    //         $input.change();
    //         return false;
    //     });
    //     $('.quantity-input .button-plus').click(function () {
    //         var $input = $(this).parent().find('#cont');
    //         $input.val(parseInt($input.val()) + 1);
    //         $input.change();
    //         return false;
    //     });
    // });

    $(document).ready(function () {
        $('body').on('click', '.number-minus, .number-plus', function () {
            var $row = $(this).closest('.number-quantity');
            var $input = $row.find('.number-text');
            var step = $row.data('step');
            var val = parseFloat($input.val());
            if ($(this).hasClass('number-minus')) {
                val -= step;
            } else {
                val += step;
            }
            $input.val(val);
            $input.change();
            return false;
        });

        $('body').on('change', '.number-text', function () {
            var $input = $(this);
            var $row = $input.closest('.number-quantity');
            var step = $row.data('step');
            var min = parseInt($row.data('min'));
            var max = parseInt($row.data('max'));
            var val = parseFloat($input.val());
            if (isNaN(val)) {
                val = step;
            } else if (min && val < min) {
                val = min;
            } else if (max && val > max) {
                val = max;
            }
            $input.val(val);
        });
    });

    $('#productCardSwiper-prev1').click(function (e) {
        e.preventDefault()
        productCardSwiper.slidePrev()
    });
    $('#productCardSwiper-next1').click(function (e) {
        e.preventDefault()
        productCardSwiper.slideNext()
    });

    $('#productCardSwiper2-prev1').click(function (e) {
        e.preventDefault()
        productCardSwiper2.slidePrev()
    });
    $('#productCardSwiper2-next1').click(function (e) {
        e.preventDefault()
        productCardSwiper2.slideNext()
    });

})(jQuery);

/*//////////////////////////////////////////////////////////////////
[ SLIDER ]*/

// На index.html

const heroSwiper = new Swiper('.heroSwiper', {
    spaceBetween: 10,
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
});

const productCardSwiper = new Swiper('.productCardSwiper', {
    slidesPerView: 2,
    grabCursor: true,
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

const productCardSwiper2 = new Swiper('.productCardSwiper2', {
    slidesPerView: 2,
    grabCursor: true,
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
        },
        992: {
            slidesPerView: 4,
        },
    },
});

const promotionSwiper = new Swiper('.promotionSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
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
            spaceBetween: 20,
        },
    },
});

const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
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