import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import CoolButton from "./CoolButton";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  buttonStyles: {
    color: "green",
    border: "1",
  },
  textStyles: {
    color: "red",
    [theme.breakpoints.up("sm")]: {
      color: "blue",
    },
  },
  textBackground: {
    backgroundColor: "gray",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <CoolButton cool={true} />
      <Button className={classes.buttonStyles}>Hello world</Button>
      <Typography
        className={classNames(classes.textStyles, classes.textBackground)}
      >
        Hello world text
      </Typography>
    </div>
  );
}

export default App;
