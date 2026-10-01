// ================= MOBILE MENU =================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", opened);
  });
}

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// ================= ACTIVE NAV =================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove("active"));
      const active = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if (active) active.classList.add("active");
    }
  });
}, {
  threshold: 0.35
});

sections.forEach(section => observer.observe(section));

// ================= GALLERY =================

const images = document.querySelectorAll(".gallery-track img");
const dots = document.querySelectorAll(".dot");
const previous = document.querySelector(".gallery-arrow.prev");
const next = document.querySelector(".gallery-arrow.next");

let current = 0;

function showGallery(index) {
  if (!images.length) return;

  current = (index + images.length) % images.length;

  if (window.innerWidth <= 550) {
    images.forEach((img, i) => {
      img.style.display = i === current ? "block" : "none";
    });
  }

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}

previous?.addEventListener("click", () => showGallery(current - 1));
next?.addEventListener("click", () => showGallery(current + 1));

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showGallery(i));
});

window.addEventListener("resize", () => showGallery(current));

// ================= YEAR =================

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

// ================= WHATSAPP =================

const whatsappNumber = "5553991857521";

const whatsappMessage =
  "Olá! Vim pelo site da Academia Barros e me interessei pelos planos. Gostaria de me inscrever!";

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
