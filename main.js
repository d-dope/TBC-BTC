function toggleNav() {
  var navContainer = document.getElementById("mobileNavContainer");

  if (navContainer.style.right === "0px") {
    // If navigation is visible, hide it
    navContainer.style.right = "-250px";
  } else {
    // If navigation is hidden, show it
    navContainer.style.right = "0";
  }
}

function closeNav() {
  var navContainer = document.getElementById("mobileNavContainer");
  navContainer.style.right = "-250px";
}


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

const header = document.querySelector('header');
const main = document.querySelector('main');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > main.offsetTop) {
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
});

// Ensure the header parameters are restored when returning to the top
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        header.classList.remove('fixed-header');
    }
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








