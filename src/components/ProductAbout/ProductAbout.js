import React from "react";
import {Box, Container, Grid, Paper, Typography} from "@mui/material";
import data from '../../data/data.json';
import CardWrapper from "../CardWrapper/CardWrapper";

const ProductAbout = () => {

  return (
    <Paper elevation={0} component={'section'}  pt={2}>
      <Container maxWidth={'100%'}>
        <Grid container pt={6}  sx={{ml: '0 !important'}}>
          <Grid item xs={12} md={9}>
            <Typography component={'h3'} variant={'aboutHeading'} mb={1}>Description</Typography>
            <Box>
              {data.article.description_long && data.article.description_long.split('\n\n').map(sentence => {
                return <Typography key={Math.random()} mb={1}>{sentence}</Typography>
              })}
            </Box>
            <Grid container justifyContent={'space-between'}>
              <CardWrapper title={'Details'}>
                    <Typography component={'h3'} variant={'aboutHeading'} mb={1}>Description</Typography>
                    <Typography component={'h3'} variant={'aboutHeading'} mb={1}>Description</Typography>
                    <Typography component={'h3'} variant={'aboutHeading'} mb={1}>Description</Typography>
                    <Typography component={'h3'} variant={'aboutHeading'} mb={1}>Description</Typography>
              </CardWrapper>
              <CardWrapper title={'Pricing & shipping'}>
                <Typography component={'h3'} variant={'aboutSubheading'} mb={1}>Description</Typography>
                <Typography component={'h3'} variant={'aboutSubheading'} mb={1}>Description</Typography>
                <Typography component={'h3'} variant={'aboutSubheading'} mb={1}>Description</Typography>
              </CardWrapper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default ProductAbout;
