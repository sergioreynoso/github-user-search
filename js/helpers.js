// If data comes back as null, populate the element with a default message
export const footerLinksEmptyState = el => {
  el.lastElementChild.innerHTML = `Not Available`;
  el.closest(".footer__item").style.opacity = ".5";
};
