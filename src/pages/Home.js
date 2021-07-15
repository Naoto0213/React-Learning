import React from "react";
import { useSelector } from "react-redux";
import { SimpleButton } from "../components/SimpleButton";
import { getUserId, getUserName } from "../redux/users/selectors";

const Home = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUserName(selector);

  console.log(selector.users);
  return (
    <>
      <SimpleButton>Home</SimpleButton>
      <h1>{uid}</h1>
      <h2>{username}</h2>
    </>
  );
};

export default Home;
