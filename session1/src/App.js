import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid xs={12} container>
          <Grid xs={0} sm={2} item />
          <Grid xs={12} sm={8} item>
            <Content />
          </Grid>
          <Grid sm={2} xs={0} item />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
