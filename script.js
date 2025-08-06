// Preloader
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 1000);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  navList.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    menuToggle.classList.remove("active");
    navList.classList.remove("active");
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

// Scroll Reveal Animation
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".product-card, .feature, .info-item, .form-group, .image-frame"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.style.animationPlayState = "running";
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Run once on page load

// Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Here you would typically send the form data to a server
    alert("Mesajınız başarıyla gönderildi! Teşekkür ederiz.");
    this.reset();
  });
}