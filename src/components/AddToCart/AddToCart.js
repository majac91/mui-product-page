import React, {useContext, useState, useRef, useEffect} from "react";

import AddButtonCtx from "../../context/AddButtonContext";

import {Box} from "@mui/material";
import AddButton from "../AddButton/AddButton";

import {useIsOnScreen} from "../../hooks/useIsOnScreen";

const AddToCart = () => {
  // track when 'add to cart' area of produtc main in in view
  // and update state accordingly to display 'add to cart'
  //inside the header

  const [, setIsButtonVisible] = useContext(AddButtonCtx);
  const buttonRef = useRef();
  const isOnScreen = useIsOnScreen(buttonRef);

  useEffect(() => {
    setIsButtonVisible(isOnScreen);
  }, [isOnScreen])

  return (
    <Box ref={buttonRef}>
      <AddButton/>
    </Box>
  )
}

export default AddToCart;
