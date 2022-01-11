import "../styles/styles.scss";
import { getUserData } from "./api";
import * as userProfile from "./userProfileCard";
import * as searchBar from "./searchBar";
import "./darkmode";

async function renderData(username) {
  try {
    const userData = await getUserData(username);
    userProfile.renderProfile(userData);
  } catch (error) {
    //Toggle error message when search input cannot be found
    searchBar.toggleErrorMsg(true);
  }
}

// Initial default profile
renderData("octocat");

//Pass renderData to search form submit event handler
searchBar.addSearchHandler(renderData);
