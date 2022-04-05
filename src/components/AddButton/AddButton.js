import React, {useContext} from "react";

import CartCtx from "../../context/CartContext";

import {Grid, Button, TextField, Typography} from "@mui/material";
import {ReactComponent as AddIcon} from "../../icons/add.svg";

const AddButton = () => {
  const [, setCartItems, inputValue, setInputValue] = useContext(CartCtx);
  const handleValueChange = (e) => setInputValue(Number(e.target.value));
  const handleAddToCart = () => setCartItems((prevVal) => prevVal + inputValue);

  return (
    <Grid container flexDirection={'row'} flexWrap={'nowrap'} mr={2} alignItems={'center'} justifyContent={{xs: 'flex-end', lg: 'flex-start'}}>
      <Grid item sx={{display: {xs: 'none', sm: 'flex'}, alignItems: 'center'}}>
        <TextField onChange={(e) => handleValueChange(e)} value={inputValue} inputProps={{min: 0}}  type='number' variant="outlined"  sx={{ marginRight: 1, minWidth: '35px' }} />
        <Typography component={'span'}>PCE</Typography>
      </Grid>
      <Grid item>
        <Button variant='contained' aria-label='add to cart' startIcon={<AddIcon style={{width: '15px', height: '15px'}}/>} onClick={handleAddToCart}  sx={{ marginLeft: 2, whiteSpace: 'nowrap' }}>
          Add to cart
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddButton;
