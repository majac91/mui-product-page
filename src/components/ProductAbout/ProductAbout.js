import React from "react";
import {Box, Container, Grid, Paper, Toolbar, Typography} from "@mui/material";
import data from '../../data/data.json';

const ProductAbout = () => {

  return (
    <Paper elevation={0} component={'section'}  pt={2}>
      <Container maxWidth={'100%'}>
        <Grid container pt={6}  sx={{ml: '0 !important'}}>
          <Grid item xs={4} md={9}>
            <Typography component={'h3'} variant={'aboutHeading'} mb={1}>Description</Typography>
            <Box>
              {data.article.description_long && data.article.description_long.split('\n\n').map(sentence => {
                return <Typography key={Math.random()}>{sentence}</Typography>
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default ProductAbout;
