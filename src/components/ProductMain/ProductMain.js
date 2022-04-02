import React from "react";
import data from '../../data/data.json'

import {Toolbar, Box, Link, Grid, Typography, Rating, Stack} from "@mui/material";

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
          <Typography color='secondary' fontWeight={500}  mt={1}>
            by <Link href='' underline={'hover'} style={{color: '#7594A5'}}>{data.article.supplier_name}</Link>
          </Typography>
          <Stack mt={2} spacing={2}>
            <Rating name="half-rating-read" defaultValue={data.article.stars} precision={0.5} readOnly />
          </Stack>
          <Typography fontWeight={500}  mt={3}>
            {data.article.price} {data.article.currency}
            <Box component={'span'} style={{color: '#A7A7A7'}}> + {data.article.transport_costs} shipping</Box>
          </Typography>
          <Typography mt={1} fontWeight={500} color={'secondary'}> all prices incl {data.article.vat_percent}% taxes</Typography>

        </Grid>
        </Grid>
    </Toolbar>
  )
}

export default ProductMain;

