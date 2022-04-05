import React from "react";
import {Divider, Grid, ListItem} from "@mui/material";
import data from "../../data/data.json";

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
