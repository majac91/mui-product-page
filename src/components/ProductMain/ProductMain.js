import React from "react";
import {Toolbar} from "@mui/material";
import data from '../../data/data.json'

import ProductGallery from "../ProductGallery/ProductGallery";

const ProductMain = () => {

return (
    <Toolbar sx={{paddingTop: {sm: '40px', md:'150px'}}}>
      <ProductGallery/>
    </Toolbar>
  )
}

export default ProductMain;

