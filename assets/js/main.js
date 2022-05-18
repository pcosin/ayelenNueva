/*==================== Nav Bar ====================*/



const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})




/*==================== SWIPER ====================*/


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 2500,
    },

    disableOnInteraction: true,

});



/*==================== SCROLL REVEAL ANIMATION ====================*/


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.scroll, 
            .footer`, {
    interval: 200
})


/*==================== FADE IN IMAGE ====================*/


window.onload = fadeIn;
  
        function fadeIn() {
            var fade = document.getElementById("img-fade");
            var opacity = 0;
            var intervalID = setInterval(function() {
  
                if (opacity < 1) {
                    opacity = opacity + 0.1
                    fade.style.opacity = opacity;
                } else {
                    clearInterval(intervalID);
                }
            }, 250);
        }


// Preloader
 window.addEventListener("load", () => {
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".preloader").style.display = "none";
        console.log("hola")
    }, 700)
})
