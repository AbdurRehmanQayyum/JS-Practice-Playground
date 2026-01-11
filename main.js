const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Theme toggle
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const theme = document.body.classList.contains("light")
    ? "light"
    : "dark";

  localStorage.setItem("theme", theme);
});

// Load theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// Mobile menu
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
