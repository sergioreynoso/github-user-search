const URL = "https://api.github.com/users/";
const TOKEN = "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";

// async function getRateLimit() {
//   // Get github rate limit
//   const res = await fetch(`https://api.github.com/rate_limit`, {
//     headers: {
//       Authorization: `token ${TOKEN}`,
//     },
//   });
//   const { rate } = await res.json();
//   console.log(rate);
// }

export async function getUserData(username) {
  try {
    //Get user profile
    const res = await fetch(`${URL}${username}`, {
      headers: {
        Authorization: `token ${TOKEN}`,
      },
    });

    // If username is not found, throw an error message
    if (!res.ok) throw new Error("Problem searching username");

    return await res.json();
  } catch (error) {
    throw error;
  }
}
