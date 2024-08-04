import Coockies from "js-cookie";

export const setUserCookies = (user) => {
  try {
    Coockies.set("user", JSON.stringify(user), { expires: 7 });
  } catch (e) {
    // Crashlytics
    //throw new Error(`Impossible de sauvegarder l'utilisateur dans les cookies: ${e}`);
  }
};

export const getUserFromCookies = () => {
  try {
    const cookie = Coockies.get("user");
    if (!cookie) {
      // Crashlytics
      //throw new Error(`L'utilisateur n'existe pas dans les cookies: ${e}`);
    }
    const test = JSON.parse(cookie);
    return JSON.parse(cookie);
  } catch (e) {
    // crashlitycs
    //console.log(new Error(`Impossible car l'utilisateur n'existe pas: ${e}`));
  }
};

export const removeUserCoockie = () => {
  Coockies.remove("user");
};
