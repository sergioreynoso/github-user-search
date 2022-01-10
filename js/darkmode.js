const body = document.querySelector("body");
const darkModeToggleBtn = document.querySelector(".dark-mode-toggle");
const toggleItem = document.querySelectorAll(".dark-mode-toggle__item");
const colorTheme = window.matchMedia("(prefers-color-scheme: dark)");

const switchDarkModeToggleBtn = () => {
  toggleItem.forEach(item => {
    item.classList.toggle("hide");
  });
};

colorTheme.addEventListener("change", e => {
  const { matches } = e;

  matches
    ? body.classList.add("dark-mode")
    : body.classList.remove("dark-mode");

  switchDarkModeToggleBtn();
});

darkModeToggleBtn.addEventListener("click", e => {
  body.classList.toggle("dark-mode");
  switchDarkModeToggleBtn();
});
