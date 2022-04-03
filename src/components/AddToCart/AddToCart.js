import React, {useContext, useState, useRef, useEffect} from "react";

import CartCtx from "../../context/CartContext";
import AddButtonCtx from "../../context/AddButtonContext";

import {Box,  TextField, Button} from "@mui/material";
import AddButton from "../AddButton/AddButton";
import {ReactComponent as AddIcon} from "../../icons/add.svg";

import {useIsOnScreen} from "../../hooks/useIsOnScreen";

const AddToCart = () => {
  const [, setCartItems] = useContext(CartCtx);
  const [inputValue, setInputValue] = useState(1);

  const [, setIsButtonVisible] = useContext(AddButtonCtx);
  const buttonRef = useRef();
  const isOnScreen = useIsOnScreen(buttonRef);

  useEffect(() => {
    setIsButtonVisible(isOnScreen);
  }, [isOnScreen])


  const handleValueChange = (e) => setInputValue(Number(e.target.value));

  return (
    <Box ref={buttonRef}>
      <TextField onChange={(e) => handleValueChange(e)} value={inputValue} inputProps={{min: 0}}  type='number' variant="outlined"  sx={{ marginRight: 1 }} />
      PCE
      <AddButton inputValue={inputValue} buttonRef={buttonRef}></AddButton>
    </Box>
  )
}

export default AddToCart;
