const hamburger = document.querySelector(".hamburger_icon");

const scroll = document.querySelector("#scroll");

const section = document.querySelectorAll(".wrapper");


// Mobile Hamburger Menu
hamburger.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav_links");

  navLinks.classList.toggle("dropdown");

  if (navLinks.classList.contains("dropdown")) {
    hamburger.src = "../images/icon-close.svg";
    // hamburger.style.transition = "0.5s ease"
  } else {
    hamburger.src = "../images/icon-hamburger.svg";
  }
});

// Scroll to top
scroll.addEventListener("click", () => {
  window.scroll({ top: 0, });
});

// On scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // return entry.target.classList.add("show");

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

    // if (entry.isIntersecting) {
    //   entry.target.classList.add("show");
    // } else {
    //   entry.target.classList.remove("show");
    // }
  });
});



section.forEach((el) => observer.observe(el));
