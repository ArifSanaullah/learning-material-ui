import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonStyles: {
    color: ({ cool }) => (cool ? "blue" : "red"),
  },
});

function CoolButton({ cool }) {
  const classes = useStyles({ cool });
  return (
    <Button className={classes.buttonStyles}>Hello to the Cool world</Button>
  );
}

export default CoolButton;
