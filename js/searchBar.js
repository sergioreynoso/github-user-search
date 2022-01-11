const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form__input");
const errorMsg = document.querySelector(".search-form__error-message");
const screenReaderFeedback = document.querySelector(".screen-reader-feedback");

export function addSearchHandler(renderData) {
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
    if (!searchInput.value) {
      const msg = "Please input a username";
      errorMsg.textContent = msg;
      updateScreenReaderFeedback(msg);
      return;
    }
    toggleErrorMsg(false);
    renderData(searchInput.value);
    updateScreenReaderFeedback(`${searchInput.value} profile has loaded`);
  });
}

export const toggleErrorMsg = isError => {
  if (!isError) {
    errorMsg.textContent = "";
    updateScreenReaderFeedback("");
    return;
  }
  const msg = "No results";
  errorMsg.textContent = msg;
  updateScreenReaderFeedback(msg);
};

searchInput.addEventListener("input", e => {
  if (e.target.value.length <= 0) toggleErrorMsg(false);
});

searchInput.addEventListener("focus", e => {
  toggleErrorMsg(false);
});

//Will alert screen reader of status change
const updateScreenReaderFeedback = msg => {
  screenReaderFeedback.textContent = `${msg}`;
};
