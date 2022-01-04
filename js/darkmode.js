const body = document.querySelector("body");
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const toggleItem = document.querySelectorAll(".dark-mode-toggle__item");

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleItem.forEach(item => {
    item.classList.toggle("hide");
  });
});
