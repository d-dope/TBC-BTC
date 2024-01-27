const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");

    // Rotate the SVG when answer is opened
    const svg = faq.querySelector('svg');
    if (faq.classList.contains("active")) {
      svg.style.transform = "rotate(180deg)";
    } else {
      svg.style.transform = "rotate(0deg)";
    }

    // Close other opened questions
    faqs.forEach(otherFaq => {
      if (otherFaq !== faq && otherFaq.classList.contains("active")) {
        otherFaq.classList.remove("active");
        // Rotate the SVG back to its original position
        const otherSvg = otherFaq.querySelector('svg');
        otherSvg.style.transform = "rotate(0deg)";
      }
    });
  });
});




var current = 0,
slides = document.querySelectorAll(".test-slide"),
indicatorsContainer = document.querySelector(".indicators");

// Create indicators
for (var i = 0; i < slides.length; i++) {
var indicator = document.createElement("span");
indicator.classList.add("indicator");
indicator.setAttribute("data-slide-to", i);
indicator.addEventListener("click", function () {
    current = parseInt(this.getAttribute("data-slide-to"));
    showSlide();
});
indicatorsContainer.appendChild(indicator);
}

// Show initial slide
showSlide();

setInterval(function () {
current = (current < slides.length - 1) ? current + 1 : 0;
showSlide();
}, 3000);

function showSlide() {
for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
}
slides[current].classList.add("active");

updateIndicators();
}

function updateIndicators() {
var indicators = document.querySelectorAll(".indicator");
for (var i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove("active");
}
indicators[current].classList.add("active");
} 



document.querySelector('.prev-btn').addEventListener('click', prevSlide);
document.querySelector('.next-btn').addEventListener('click', nextSlide);

function nextSlide() {
    current = (current > 0) ? current - 1 : slides.length - 1;
    showSlide();
}

function prevSlide() {
    current = (current < slides.length - 1) ? current + 1 : 0;
    showSlide();
}








