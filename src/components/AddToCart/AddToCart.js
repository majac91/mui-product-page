import React, {useContext, useState} from "react";
import {Box,  TextField, Button} from "@mui/material";
import CartCtx from "../../context/CartContext";
import {ReactComponent as AddIcon} from "../../icons/add.svg";

const AddToCart = () => {
  const [, setCartItems] = useContext(CartCtx);
  const [inputValue, setInputValue] = useState(1);

  const handleAddToCart = () => setCartItems((prevVal) => prevVal + inputValue);
  const handleValueChange = (e) => setInputValue(Number(e.target.value));

  return (
    <Box>
      <TextField onChange={(e) => handleValueChange(e)} value={inputValue} inputProps={{min: 0}}  type='number' variant="outlined"  sx={{ marginRight: 1 }} />
      PCE
      <Button  variant='contained' aria-label='add to cart' startIcon={<AddIcon style={{width: '15px', height: '15px'}}/>} onClick={handleAddToCart}  sx={{ marginLeft: 2 }}>
        Add to card
      </Button>
    </Box>
  )
}

export default AddToCart;
