const navbarToggle = document.getElementById("navbar-toggle");
const navbarCollapse = document.getElementById("navbar-collapse");

navbarToggle.addEventListener("click", function() {
  navbarCollapse.classList.toggle("active");
});

const navbarLocationSelect = document.getElementById("navbar-location-select");
const navbarAnimationSelect = document.getElementById("navbar-animation-select");

navbarLocationSelect.addEventListener("change", function() {
  const navbar = document
