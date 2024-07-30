/* diplomas slider */

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
    scrollContainer.scrollLeft += 450;
})

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 450;
})

/* faq animation */
document.addEventListener('DOMContentLoaded', function () {
    let faqToggle = document.getElementsByClassName('faq-toggle');
    for (let i = 0; i < faqToggle.length; i++) {
        faqToggle[i].addEventListener('click', function () {
            this.classList.toggle('active');
            let faqAnswer = this.parentElement.nextElementSibling;

            if (faqAnswer.style.maxHeight) {
                faqAnswer.style.maxHeight = null;
                faqAnswer.style.paddingTop = 0;
            } else {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                faqAnswer.style.paddingTop = '25px';
            }
        });
    }
});

/* smooth scroll */

window.addEventListener("DOMContentLoaded", () => {
    const smoothScroll = () => {
        const links = document.querySelectorAll(".menu-link");

        links.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const section = document.querySelector(link.getAttribute("href"));

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "center",
                });
            });
        });
    };

    smoothScroll();
})