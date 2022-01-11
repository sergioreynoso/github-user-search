import { footerLinksEmptyState } from "./helpers";

const avatar = document.querySelector(".user-detail__avatar");
const name = document.querySelector(".user-detail__name");
const username = document.querySelector(".user-detail__username");
const joinDate = document.querySelector(".user-detail__join-date");
const bio = document.querySelector(".user-detail__bio");
const repos = document.querySelector(".user-detail__stat-repos");
const followers = document.querySelector(".user-detail__stat-followers");
const following = document.querySelector(".user-detail__stat-following");
const location = document.querySelector(".footer__item_location");
const twitter = document.querySelector(".footer__item_twitter");
const blog = document.querySelector(".footer__item_blog");
const company = document.querySelector(".footer__item_company");
const footerItem = document.querySelectorAll(".footer__item");

const allFooterItems = [...document.querySelectorAll(".footer__item")];

console.log(allFooterItems);

export function renderProfile(userData) {
  const {
    avatar_url,
    name,
    created_at,
    login,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    blog,
    company,
  } = userData;

  resetFooterItem();

  renderAvatar(avatar_url);
  renderName(name);
  renderUsername(login);
  renderJoinDate(created_at);
  renderBio(bio);
  renderRepos(public_repos);
  renderFollowers(followers);
  renderFollowing(following);
  renderLocation(location);
  renderTwitter(twitter_username);
  renderBlog(blog);
  renderCompany(company);
}

const resetFooterItem = () => {
  footerItem.forEach(el => {
    el.closest(".footer__item").style.opacity = "1";
  });
};

const renderAvatar = data => {
  avatar.setAttribute("src", data);
};

const renderName = data => {
  name.textContent = `${data}`;
};

const renderUsername = data => {
  username.textContent = `@${data}`;
};

const renderJoinDate = data => {
  const [day, month, dayNum, year] = new Date(data).toDateString().split(" ");
  joinDate.textContent = `Joined ${dayNum} ${month} ${year}`;
};

const renderBio = data => {
  bio.textContent = `${data || "This profile has no bio."}`;
};

const renderRepos = data => {
  repos.lastElementChild.textContent = `${data}`;
};

const renderFollowers = data => {
  followers.lastElementChild.textContent = `${data}`;
};

const renderFollowing = data => {
  following.lastElementChild.textContent = `${data}`;
};

//-------Footer Items--------\\

const renderLocation = data => {
  if (!data) {
    footerLinksEmptyState(location);
    return;
  }
  location.lastElementChild.textContent = `${data}`;
};

const renderTwitter = data => {
  const twitterLink = twitter.lastElementChild;

  if (!data) {
    footerLinksEmptyState(twitter);
    //Disables the link
    twitterLink.classList.add("disabled");
    return;
  }

  twitterLink.textContent = data;
  twitterLink.setAttribute("href", `https://twitter.com/${data}`);
};

const renderBlog = data => {
  const blogLink = blog.lastElementChild;
  if (!data) {
    footerLinksEmptyState(blog);
    //Disables the link
    blogLink.classList.add("disabled");
    return;
  }
  blogLink.textContent = data;
  blogLink.setAttribute("href", data);
};

const renderCompany = data => {
  if (!data) {
    footerLinksEmptyState(company);
    return;
  }
  company.lastElementChild.textContent = data;
};
