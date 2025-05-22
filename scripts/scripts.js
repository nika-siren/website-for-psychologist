/* mobile header*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-header__item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/* diplomas slider */

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 450;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 450;
});

/* faq animation */

document.addEventListener("DOMContentLoaded", function () {
  let faqItems = document.getElementsByClassName("faq-item");
  for (let j = 0; j < faqItems.length; j++) {
    faqItems[j].addEventListener("click", function () {
      this.classList.toggle("active");
      let faqAnswer = this.querySelector(".faq-answer");

      if (faqAnswer.style.maxHeight) {
        faqAnswer.style.maxHeight = null;
        faqAnswer.style.paddingTop = 0;
      } else {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
        faqAnswer.style.paddingTop = "25px";
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
});
