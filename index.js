// =========================
// MOBILE MENU
// =========================

function openMenu() {
  document.body.classList.add("menu-open");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}

// Close mobile menu when a menu link is clicked
document.querySelectorAll(".menu_link").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const nav = document.querySelector("nav");

function handleNavScroll() {
  if (window.scrollY > 50) {
    nav.classList.add("nav_scrolled");
  } else {
    nav.classList.remove("nav_scrolled");
  }
}

window.addEventListener("scroll", handleNavScroll);


// =========================
// FADE-UP SCROLL ANIMATIONS
// =========================

const fadeElements = document.querySelectorAll(".fade_up");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

fadeElements.forEach(element => {
  observer.observe(element);
});


// =========================
// OPTIONAL: SMOOTH SCROLL
// FOR INTERNAL LINKS
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});


// =========================
// INITIALIZE
// =========================

window.addEventListener("load", () => {

  handleNavScroll();

  document.body.classList.add("loaded");

});