import { push } from "connected-react-router";
import { signInAction } from "./actions";

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/Naoto0213";

      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);

      const username = response.login;
      const html_url = response.html_url;
      const uid = response.id;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: uid,
          username: username,
          html_url: html_url,
        })
      );
      dispatch(push("/"));
      console.log(response.html_url);
    }
  };
};
