import React from "react";

import data from "../../data/data.json";

import {Divider, Grid, ListItem} from "@mui/material";

const PriceBreak = ({count}) => {

  return (
    <>
      <Divider component="li" />
      <ListItem>
        <Grid container columnSpacing={4} sx={{fontWeight: 'medium'}} justifyContent={'space-between'}>
          <Grid item>{`ex ${count} ${data.article.unit}`}</Grid>
          <Grid item>{`${data.article.price_breaks[count].toLocaleString('en-US')} ${data.article.currency}/${data.article.unit}`}</Grid>
        </Grid>
      </ListItem>
      <Divider component="li" />
    </>
  )
}

export default PriceBreak;
