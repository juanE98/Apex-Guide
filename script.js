/*
    Increases and Decreases numerical values using jQuery for rank selection
    Source code from http://jsfiddle.net/polaszk/1oyfxoor/
*/
function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (currentVal > 10000) {
        currentVal = 10000;
        parent.find('input[name=' + fieldName + ']').val(currentVal);
    }

    if (!isNaN(currentVal) && currentVal < 10000) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 100);
    }

    else {
        parent.find('input[name=' + fieldName + ']').val(currentVal);
    }
}

function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 100);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

$(".rank-container .rank-selector").on('click', '.button-plus', function (e) {
    incrementValue(e);
});

$(".rank-container .rank-selector").on('click', '.button-minus', function (e) {
    decrementValue(e);
});



/*  
    Accordion for boosting page FAQ

    Source code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_accordion_symbol
*/
const acc = document.getElementsByClassName("accordion");

function accordion() {
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    };
}

// Source Code from https://drive.google.com/drive/folders/1x8XkvHZfuz-Z-Xuab45gcEE3s0_ILpqp   
//all ------------------
function carousel() {
    "use strict";

    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },

            }
        });
    }
}

/* init */
$(document).ready(function () {
    carousel();
    accordion();
});