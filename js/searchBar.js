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
  //Set aria-invalid attribute of search input to display error message.
  isError
    ? searchInput.setAttribute("aria-invalid", true)
    : searchInput.setAttribute("aria-invalid", false);
};

searchInput.addEventListener("input", e => {
  if (e.target.value.length <= 0) toggleErrorMsg(false);
});
