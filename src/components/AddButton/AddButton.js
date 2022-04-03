import React, {useContext} from "react";

import CartCtx from "../../context/CartContext";

import {Button} from "@mui/material";
import {ReactComponent as AddIcon} from "../../icons/add.svg";

const AddButton = ({inputValue}) => {
  const [, setCartItems] = useContext(CartCtx);
  const handleAddToCart = () => setCartItems((prevVal) => prevVal + inputValue);

  return (
    <Button variant='contained' aria-label='add to cart' startIcon={<AddIcon style={{width: '15px', height: '15px'}}/>} onClick={handleAddToCart}  sx={{ marginLeft: 2 }}>
      Add to card
    </Button>
  )
}

export default AddButton;
