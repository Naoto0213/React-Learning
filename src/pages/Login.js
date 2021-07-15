import { push } from "connected-react-router";
import React from "react";
import { useDispatch } from "react-redux";
import { SimpleButton } from "../components/SimpleButton";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { signInAction } from "../redux/users/actions";

const useStyles = makeStyles({
  title: {
    color: "white",
    fontWeight: "bold",
  },
});

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const onClickDispatchPush = () => {
    dispatch(signInAction({ uid: "01", username: "naoto" }));
    dispatch(push("/"));
  };

  console.log(selector.router);

  return (
    <>
      <p className={classes.title}>
        {selector.router.location.pathname}ページです
      </p>
      <SimpleButton onClick={onClickDispatchPush}>ログインする</SimpleButton>
    </>
  );
};

export default Login;
