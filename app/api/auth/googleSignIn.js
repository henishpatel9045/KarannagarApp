import * as Google from "expo-google-app-auth";

const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId:
        451510403937 -
        lkhkffu80dskj6ts9koa67pus9kvq9e7.apps.googleusercontent.com,
      behavior: "web",
      //   iosClientId: YOUR_CLIENT_ID_HERE,
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
};
