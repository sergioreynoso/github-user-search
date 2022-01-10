const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form__input");
const errorMsg = document.querySelector(".search-form__error-message");

export function addSearchHandler(renderData) {
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    if (!searchInput.value) {
      errorMsg.textContent = "Please input a username";
      return;
    }
    toggleErrorMsg(false);
    renderData(searchInput.value);
  });
}

export const toggleErrorMsg = isError => {
  isError ? (errorMsg.textContent = "No results") : (errorMsg.textContent = "");
};

searchInput.addEventListener("input", e => {
  if (e.target.value.length <= 0) toggleErrorMsg(false);
});

searchInput.addEventListener("focus", e => {
  toggleErrorMsg(false);
});
