// If data comes back as null, populate the element with a default message
export const footerLinksEmptyState = el => {
  el.lastElementChild.innerHTML = `Not Available`;
  el.closest(".user-detail__link").style.opacity = ".5";
};
