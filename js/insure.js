const hamburger = document.querySelector(".hamburger_icon");

const scroll = document.querySelector("#scroll");


// Mobile Hamburger Menu
hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav_links");

  navLinks.classList.toggle("dropdown");

  if (navLinks.classList.contains("dropdown")) {
    hamburger.src = "../images/icon-close.svg";
  } else {
    hamburger.src = "../images/icon-hamburger.svg";
  }
});

// Scroll to top
scroll.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

// On scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const section = document.querySelectorAll(".wrapper");

section.forEach((el) => observer.observe(el));
