import React from "react";

import {Toolbar, Grid,} from "@mui/material";
import ProductGallery from "../ProductGallery/ProductGallery";
import AddToCart from "../AddToCart/AddToCart";
import ProductMainDetails from "../ProductMainDetails/ProductMainDetails"

const ProductMain = () => {

return (
    <Toolbar sx={{paddingTop: {sm: '40px', md:'150px'}}} component={'section'}>
      <Grid container spacing={5} columnSpacing={{ xs: 5, sm: 2, md: 3 }}>
        <Grid item xs={12} md={5} >
          <ProductGallery/>
        </Grid>
        <Grid item xs={12} md={4} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <ProductMainDetails/>
          <AddToCart/>
          </Grid>
        </Grid>
    </Toolbar>
  )
}

export default ProductMain;

