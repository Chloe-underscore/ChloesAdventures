const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");
const themeRadios = document.querySelector('input[name="theme"]');

function setTheme(theme) {
  const mode = theme === "dark" ? "dark" : "light";
  const isDark = mode === "dark";

  document.documentElement.dataset.theme = mode;
  localStorage.setItem("theme", mode);

  themeIcon.src = isDark
    ? "./symbols/sun_toggle.png"
    : "./symbols/moon_toggle.png";

  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Schakel naar lichte modus" : "Schakel naar donkere modus",
  );

  themeRadios.forEach((radio) => {
    radio.checked = radio.value === mode;
  });
}

setTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");

// const savedTheme = localStorage.getItem("theme");
// setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.dataset.theme;
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

themeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    setTheme(radio.Value);
  });
});
