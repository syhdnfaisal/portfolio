const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};
menuIcon.scroll = () => {
  navLinks.classList.remove("active");
};

// Typing Text Animation
const typed = new Typed(".multiple-text", {
  strings: ["IT Application Support", "Web Developer", "IT Service Desk"],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
