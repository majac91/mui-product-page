import React, {useState, useContext, useEffect} from "react";

import data from '../../data/data.json'
import CartCtx from "../../context/CartContext";
import AddButtonCtx from "../../context/AddButtonContext";

import {AppBar, Box, Toolbar, IconButton, Typography, Badge, SvgIcon, Divider} from '@mui/material';
import AddButton from "../AddButton/AddButton";

import {ReactComponent as CartIcon} from '../../icons/cart.svg';
import {ReactComponent as FavoriteIcon} from '../../icons/favorite.svg';
import {ReactComponent as FavoriteFilledIcon} from '../../icons/favorite-filled.svg';
import {ReactComponent as FactsIcon} from '../../icons/facts.svg';

import useScrollPosition from "../../hooks/useScrollPosition";
import {makeStyles} from "@material-ui/core";

const Header = () => {
  const [favorite, setFavorite] = useState(null);
  const [cartItems, ] = useContext(CartCtx);
  const [isButtonVisible, ,isClicked] = useContext(AddButtonCtx);

  //create pulse animation
  const pulseStyles = makeStyles({
    pulse: {
      '& .MuiBadge-badge': {
        animation: isClicked ? "$pulse 2s forwards" : null,
        position: 'absolute',
        right: '-5px',
        top: '-11px',
        transformOrigin: '50% 50%',
        transform: 'scale(100%, 100%)'
      },
    },
    "@keyframes pulse": {
      "0%": {
        transform: "scale(0)",
        transformOrigin: 'bottom',
      },
      "40%": {
        transform: "scale(1)",
      },
      "70%": {
        transform: "scale(.5)",
      },
      "80%": {
        transform: "scale(1.25)",
      },
      "100%": {
        transform: "scale(1)",
      },
    }
  });

  const classes = pulseStyles();

  //get window position for header border rendering purposes
  const scrollPosition = useScrollPosition();

  return (
    <Box sx={{ flexGrow: 1 }} component={'nav'}>
      <AppBar color='white' elevation={scrollPosition > 0 ? 2 : 0} sx={{ borderBottom: "1px solid #E9E9E9", backgroundColor: "#fff" }}>
        <Toolbar variant='dense' style={{alignItems: {xs: 'center', lg: 'unset'}}}>
          <Typography variant="h1" noWrap component="h1" sx={{ padding: { xs: '10px 0', sm: '20px 0' } }}>
            {data.article.title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/*render when product main button is out of view*/}
          {!isButtonVisible && <AddButton/>}
          <Box display={'flex'} flexDirection={['column', 'row']}>
            <IconButton aria-label="facts" padding={0} disableRipple>
              <SvgIcon color='secondary' sx={{margin: {sm: '8px', md:'20px 0'}}}>
                <FactsIcon/>
              </SvgIcon>
            </IconButton>
            <IconButton aria-label="add to favorites" onClick={() => setFavorite(!favorite)}>
              {favorite ? <SvgIcon color='primary' sx={{margin: {sm: '8px', md:'20px 10px'}}}><FavoriteFilledIcon/></SvgIcon>
                        : <SvgIcon color='secondary' sx={{margin: {sm: '8px', md:'20px 10px'}}}><FavoriteIcon/></SvgIcon>
              }
            </IconButton>
          </Box>
          <div className={classes.pulse}>
            <Box style={{ display: 'flex' }}>
              <Divider orientation="vertical" variant='fullWidth' flexItem style={{ minHeight: "auto"}}/>
              <IconButton size="large" aria-label="add to cart" color="inherit" disableRipple>
                <Badge badgeContent={cartItems} color="primary" sx={{marginLeft: {sm: '8px', md:'10px'}}}>
                  <SvgIcon color='secondary'>
                    <CartIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
