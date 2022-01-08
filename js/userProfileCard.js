import { footerLinksEmptyState } from "./helpers";

const avatar = document.querySelector(".user-detail__avatar");
const name = document.querySelector(".user-detail__name");
const username = document.querySelector(".user-detail__username");
const joinDate = document.querySelector(".user-detail__join-date");
const bio = document.querySelector(".user-detail__bio");
const userStats = document.querySelector(".user-detail__stats");
const repos = document.querySelector(".user-detail__stat-repos");
const followers = document.querySelector(".user-detail__stat-followers");
const following = document.querySelector(".user-detail__stat-following");
const location = document.querySelector(".user-detail__footer-link_location");
const twitter = document.querySelector(".user-detail__footer-link_twitter");
const blog = document.querySelector(".user-detail__footer-link_blog");
const company = document.querySelector(".user-detail__footer-link_company");
const footerItems = document.querySelectorAll(".user-detail__footer-link");

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

  // console.log(userData);

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
  footerItems.forEach(el => {
    el.closest(".user-detail__footer-link").style.opacity = "1";
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

const renderLocation = data => {
  if (!data) {
    footerLinksEmptyState(location);
    return;
  }
  location.lastElementChild.textContent = `${data}`;
};

const renderTwitter = data => {
  if (!data) {
    footerLinksEmptyState(twitter);
    return;
  }
  twitter.lastElementChild.innerHTML = `<a rel="noopener noreferrer nofollow" target="_blank"  href="https://twitter.com/${data}">${data}</a>`;
};

const renderBlog = data => {
  if (!data) {
    footerLinksEmptyState(blog);
    return;
  }
  blog.lastElementChild.innerHTML = `<a rel="noopener noreferrer nofollow" target="_blank"  href="https://${data}">${data}</a>`;
};

const renderCompany = data => {
  if (!data) {
    footerLinksEmptyState(company);
    return;
  }
  company.lastElementChild.innerHTML = `<a rel="noopener noreferrer nofollow" target="_blank" href="https://${data}">${data}</a>`;
};
