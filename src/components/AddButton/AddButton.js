import React, {useContext} from "react";

import CartCtx from "../../context/CartContext";

import {Box, Button, TextField} from "@mui/material";
import {ReactComponent as AddIcon} from "../../icons/add.svg";

const AddButton = () => {
  const [, setCartItems, inputValue, setInputValue] = useContext(CartCtx);
  const handleValueChange = (e) => setInputValue(Number(e.target.value));
  const handleAddToCart = () => setCartItems((prevVal) => prevVal + inputValue);

  return (
    <Box style={{display: 'flex', alignItems: 'center'}} mr={2}>
      <TextField onChange={(e) => handleValueChange(e)} value={inputValue} inputProps={{min: 0}}  type='number' variant="outlined"  sx={{ marginRight: 1 }} />
      PCE
      <Button variant='contained' aria-label='add to cart' startIcon={<AddIcon style={{width: '15px', height: '15px'}}/>} onClick={handleAddToCart}  sx={{ marginLeft: 2 }}>
        Add to cart
      </Button>
    </Box>
  )
}

export default AddButton;
