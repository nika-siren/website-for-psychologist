let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
})

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 400;
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 400;
})

/* let currentSlide = 0;
const slides = document.querySelectorAll('.photos img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i == index || i == index + 1) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 2) % totalSlides;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 2 + totalSlides) % totalSlides;
    showSlide(currentSlide);
});

showSlide(currentSlide);
*/

/*new Splide(".splide", {
    type: "fade",
    pagination: false,
    rewind: true,
    autoplay: true,
    breakpoints: {
        897: {
            type: "slide",
            rewind: false,
            perPage: 2,
        },
    },
    classes: {
        arrows: "splide__arrows arrows",
        arrow: "splide__arrow arrow",
        prev: "splide__arrow--prev l-bts",
        next: "splide__arrow--next r-bts",
    },
}).mount();
*/