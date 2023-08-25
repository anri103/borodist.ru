'use strict';

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
const thumbsSwiper = new Swiper('.thumbsSwiper', {
    spaceBetween: 8,
    slidesPerView: 5,
    breakpoints: {
        992: {
            spaceBetween: 20,
        },
    },
});
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
    thumbs: {
        swiper: thumbsSwiper,
    },
});

/*//////////////////////////////////////////////////////////////////
[ Glightbox ]*/

const lightboxProduct = GLightbox({
    selector: '.glightbox2'
});

const lightboxProductVideo = GLightbox({
    selector: '.glightbox-ProductVideo'
});

/*//////////////////////////////////////////////////////////////////
[ toggle box in checkout.html ]*/

function toggleTextBox() {
    var userRegisterCheck = document.getElementById('userRegisterCheck');
    var userRegisterFields = document.getElementById('userRegisterFields');
    if (userRegisterCheck.checked == true) {
        userRegisterFields.style.display = 'block';
    } else {
        userRegisterFields.style.display = 'none';
    }
}

/*//////////////////////////////////////////////////////////////////
[ Кнопки как на Ozon ]*/

(function ($) {

    $(document).ready(function () {

        $('.buy-button').click(function () {
            $(this).next('.quantity-container').addClass('active');
            $(this).hide();
        })

        $('.quantity-btn-minus, .quantity-btn-plus').click(function () {
            var $row = $(this).parent('.quantity-container');
            var $input = $row.find('.quantity-input');
            var step = $row.data('step');
            var val = parseFloat($input.val());
            if ($(this).hasClass('quantity-btn-minus')) {
                val -= step;
            } else {
                val += step;
            }
            if( val < 1 ) {
                $(this).parentsUntil('.button-toggle-box').siblings('.buy-button').show();
                $(this).parent('.quantity-container').removeClass('active');
            }
            $input.val(val);
            $input.change();
            return false;
        });

        $('.quantity-input').on('change', function () {
            var $input = $(this);
            var $row = $input.parent('.quantity-container');
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
            if( val < 1 ) {
                $(this).parentsUntil('.button-toggle-box').siblings('.buy-button').show();
                $(this).parent('.quantity-container').removeClass('active');
            }
            $input.val(val);
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
    });

})(jQuery);