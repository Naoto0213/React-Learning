import React from "react";
import { useSelector } from "react-redux";
import { SimpleButton } from "../components/SimpleButton";
import { getHtmlUrl, getUserId, getUserName } from "../redux/users/selectors";

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);
  const html_url = getHtmlUrl(selector);
  return (
    <>
      <SimpleButton>Home</SimpleButton>
      <p>{uid}</p>
      <p>{username}</p>
      <p>{html_url}</p>
    </>
  );
};

export default Home;
