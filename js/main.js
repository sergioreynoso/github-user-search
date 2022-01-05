import "../styles/styles.scss";
import { getUserData } from "./api";
import * as userProfile from "./userProfileCard";
import "./darkmode";

async function renderData(username) {
  try {
    const userData = await getUserData(username);
    userProfile.renderProfile(userData);
  } catch (error) {
    console.error(`${error.message} 💥`);
  }
}

// renderData("octocat");
renderData("sergioreynoso");
