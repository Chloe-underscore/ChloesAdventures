const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");

function setTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeIcon.src = isDark
    ? "./symbols/sun_toggle.png"
    : "./symbols/moon_toggle.png";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Schakel naar lichte modus" : "Schakel naar donkere modus",
  );
}

const savedTheme = localStorage.getItem("theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  setTheme(currentTheme === "dark" ? "light" : "dark");
});
