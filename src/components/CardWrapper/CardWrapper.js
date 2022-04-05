import React from "react";

import {Card, CardContent, CardHeader, Divider, Grid} from "@mui/material";

const CardWrapper = ({title, children}) => {

  return (
    <Grid item xs={12} md={5.9} component={Card} elevation={0} style={{backgroundColor: 'white', borderRadius: 0}}>
      <CardHeader title={title} component={'h3'} titleTypographyProps={{variant: 'aboutHeading'}} sx={{mb: 0}}/>
      <Divider variant="middle"/>
      <CardContent>
        {children}
      </CardContent>
    </Grid>
  )
}

export default CardWrapper;
