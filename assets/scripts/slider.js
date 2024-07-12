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