import React from "react";
import {Toolbar} from "@mui/material";
import data from '../../data/data.json'
import {Box, Grid, Typography, Rating, Stack} from "@mui/material";

import ProductGallery from "../ProductGallery/ProductGallery";

const ProductMain = () => {

return (
    <Toolbar sx={{paddingTop: {sm: '40px', md:'150px'}}}>
      <Grid container spacing={5} columnSpacing={{ xs: 5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={5}>
          <ProductGallery/>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            variant="h2"
            component="h2"
          >
            {data.article.title}
          </Typography>
          <Box display={'flex'} mt={1}>
            <Typography color='secondary' fontWeight={500}>
              <Box component='span' display={'inline'} mr={1}>by</Box>
              <Box component='span' display={'inline'} style={{color: '#7594A5'}}>{data.article.supplier_name}</Box>
            </Typography>
          </Box>
          <Stack mt={2} spacing={2}>
            <Rating name="half-rating-read" defaultValue={data.article.stars} precision={0.5} readOnly />
          </Stack>
        </Grid>
        </Grid>
    </Toolbar>
  )
}

export default ProductMain;

