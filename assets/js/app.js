// login page (input with country code)
const phoneInputField = document.querySelector("#phone");

if (phoneInputField != undefined || phoneInputField != null) {
    const phoneInput = window.intlTelInput(phoneInputField, {
        utilsScript:
            "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
}

$(document).ready(function () {
    // home page (category slider)
    $('.category-slider').slick({
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 1500,
        speed: 1500,
        prevArrow: "<button class='prevdot'><i class='fas fa-angle-left'></i></button>",
        nextArrow: "<button class='nextdot'><i class='fas fa-angle-right'></i></button>",
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
});

// mobile menu
function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    var openMenuIcon = document.getElementById("open-menu-icon");
    var closeMenuIcon = document.getElementById("close-menu-icon");
    
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
    if (menu.style.display === "block") {
        closeMenuIcon.classList.remove('d-none');
        openMenuIcon.classList.add('d-none');
    } else {
        openMenuIcon.classList.remove('d-none');
        closeMenuIcon.classList.add('d-none');
    }
}