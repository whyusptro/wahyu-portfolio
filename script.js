// Navbar scroll effect
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.style.background =
    window.scrollY > 50 ? "rgba(2,6,23,.95)" : "rgba(15,23,42,.8)";
});

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Dark Light mode
const themeToggle = document.getElementById("theme-toggle");

// Saat halaman pertama kali load
if (document.body.classList.contains("light")) {
  themeToggle.textContent = "🌙";
} else {
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeToggle.textContent = "🌙"; // light mode
  } else {
    themeToggle.textContent = "☀️"; // dark mode
  }
});


// Project Popup
const projects = document.querySelectorAll(".project");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalGithub = document.getElementById("modalGithub");
const closeBtn = document.querySelector(".close");

projects.forEach(project => {
  project.addEventListener("click", () => {
    modal.classList.add("active");
    modalTitle.textContent = project.dataset.title;
    modalDesc.textContent = project.dataset.desc;
    modalGithub.href = project.dataset.github;
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("active");
});

// Close menu after click (mobile UX)
document.querySelectorAll("#nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

