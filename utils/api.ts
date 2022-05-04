const URL = "https://api.github.com/users/";
const TOKEN = "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";

export async function getUserData(username: string) {
  try {
    //Get user profile
    const res = await fetch(`${URL}${username}`, {
      // headers: {
      //   Authorization: `token ${TOKEN}`,
      // },
    });

    // If username is not found, throw an error message
    if (!res.ok) throw new Error("No results");

    const data = res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
