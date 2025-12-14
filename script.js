const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when clicking a link (mobile)
navMenu?.addEventListener("click", (e) => {
  if (e.target && e.target.tagName === "A") {
    navMenu.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

// Mailto helper
const mailtoBtn = document.getElementById("mailtoBtn");
mailtoBtn?.addEventListener("click", () => {
  const subject = encodeURIComponent(document.getElementById("subject").value || "Hello Vishnu");
  const message = encodeURIComponent(document.getElementById("message").value || "Hi Vishnu,\n\n");
  window.location.href = `mailto:vishnu1998prasad@gmail.com?subject=${subject}&body=${message}`;
});

// Footer year
document.getElementById("year").textContent = String(new Date().getFullYear());
