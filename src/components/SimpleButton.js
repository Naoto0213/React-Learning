import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    Button: {
      width: "180px",
      background: theme,
      fontWeight: "bold",
    },
  };
});

export const SimpleButton = ({ children, onClick }) => {
  const classes = useStyle();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
        className={classes.Button}
      >
        {children}
      </Button>
    </>
  );
};
