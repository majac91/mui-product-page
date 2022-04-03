import React from "react";
import {Box, Link, Typography, Rating, Stack,} from "@mui/material";
import data from "../../data/data.json";
import {ReactComponent as DiscountIcon} from "../../icons/discount.svg";

const ProductMainDetails = () => {

  return (
    <Box>
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
        <Box component={'span'} mr={1} style={{color: '#A7A7A7'}}> + {data.article.transport_costs} shipping</Box>
        <DiscountIcon style={{width: '20px', height: '20px', marginBottom: '-5px'}}/>
      </Typography>
      <Typography mt={1} fontWeight={500} color={'secondary'}> all prices incl {data.article.vat_percent}% taxes</Typography>
    </Box>
  )
}

export default ProductMainDetails;
