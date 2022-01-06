const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form__input");
const errorMsg = document.querySelector(".search-form__error-message");

export function addSearchHandler(renderData) {
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    if (!searchInput.value) {
      searchInput.setAttribute("placeholder", "Please input a username");
      return;
    }
    renderData(searchInput.value);
  });
}

export const toggleErrorMsg = isError => {
  isError
    ? errorMsg.classList.remove("hideErrorMsg")
    : errorMsg.classList.add("hideErrorMsg");
};

searchInput.addEventListener("input", e => {
  if (e.target.value.length <= 0) toggleErrorMsg(false);
});
