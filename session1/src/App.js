import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Divider, Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={createMuiTheme({ palette: { type: "dark" } })}>
      <Paper>
        <div className={classes.root}>
          <Grid container spacing={3} direction="column">
            <Grid item container xs={12}>
              <Grid item xs={2}>
                Hi there!
              </Grid>
              <Grid xs={8} item />
              <Grid item xs={2}>
                Logout
              </Grid>
            </Grid>
            <Divider />
            <Grid xs={12} item container>
              <Grid xs={6} item>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo minima quibusdam sint voluptatum eius, enim possimus
                  illo ab dolor officia ipsum nam, id, ullam animi libero cum
                  dolore quia qui. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Nostrum delectus nisi perferendis vel
                  accusamus? Cupiditate recusandae esse ratione, fugiat incidunt
                  maxime doloribus! Nam debitis sed laboriosam, similique unde
                  sit incidunt obcaecati illo eligendi doloremque reiciendis
                  provident voluptates ab velit esse, suscipit totam eveniet
                  nisi, earum deleniti. Iure quisquam sed hic.
                </Typography>
              </Grid>
              <Grid xs={6} item>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  sapiente blanditiis ex iure, dolor voluptatibus temporibus!
                  Unde rem officiis corporis aspernatur? Debitis facilis
                  dignissimos non explicabo nisi laudantium alias neque!. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
                  reiciendis vero necessitatibus saepe assumenda ipsam unde
                  enim, illum id veniam animi esse quaerat, iusto dicta. Ad
                  magnam sint quibusdam expedita animi, maiores voluptatibus
                  recusandae adipisci provident perferendis doloremque iusto
                  architecto? Inventore distinctio maxime alias quo accusantium
                  dolore sit nam dolorem?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Divider />
          <Grid container xs={12} justify="center" >
            <Grid item xs={12} style={{textAlign: "center"}} >
              <AcUnitIcon color="primary" />
            </Grid>
            <Grid item>
              <AcUnitIcon color="secondary" />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
