import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Grid } from "@material-ui/core";
import cardsData from "./constants";

function Content() {
  return (
    <div>
      <Grid container spacing={2}>
        {cardsData.map((cardData, index) => (
          <Grid xs={12} sm={4} item key={index}>
            <CoffeeCard {...cardData} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Content;
