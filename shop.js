const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdownMenu");

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});