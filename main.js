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

