let loginSuccessfull = JSON.parse(localStorage.getItem("loginSuccess"));
console.log(loginSuccessfull);

// LOADER
document.documentElement.classList.add("js");

// dom is loaded
jQuery(document).ready(function ($) {
    // fade out preloader
    $("#preloader").fadeOut(1000, function () {
        setTimeout(() => {
            $(this).remove();
        }, 4000);
    });
});
// ------------------LOADER END-------------

// show modal on page load

// $(window).on("load", function () {
//     $("#exampleModal").modal("show");
// });

// section4  sale banner looping

let saleBannerEl = document.getElementsByClassName("saleBanner");

let saleTexts = [
    "2 Days only! Save upto 70%",
    "Bumper offer for Today only 90% off",
];

// Dropdown

var dropDownContent = document.getElementById("womenDD");
dropDownContent.style.display = "none";
function mouseOverToggle() {
    dropDownContent.style.display = "";
}
function mouseOutToggle() {
    dropDownContent.style.display = "none";
}
/// slider for banner section 555555555555555555555555555555555555555555555555

$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        },
    },
});

const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    slidesPerView: 6,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

const swiper2 = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: true,
    slidesPerView: 6,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
// --------------------------------------------------------------------------

// SCROLL TO TOP  #######################################################################

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ----------------------------------------------------------------------------------
