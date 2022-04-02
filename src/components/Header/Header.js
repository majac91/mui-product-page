import React, {useState} from "react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import {SvgIcon} from "@mui/material";
import Divider from "@mui/material/Divider";

import {ReactComponent as CartIcon} from '../../icons/cart.svg';
import {ReactComponent as FavoriteIcon} from '../../icons/favorite.svg';
import {ReactComponent as FavoriteFilledIcon} from '../../icons/favorite-filled.svg';
import {ReactComponent as FactsIcon} from '../../icons/facts.svg';

import data from '../../data/data.json'
import useScrollPosition from "../../hooks/useScrollPosition";

const Header = () => {
  const [favorite, setFavorite] = useState(null);
  const scrollPosition = useScrollPosition(); //get window position for header border rendering purposes

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='background' elevation={scrollPosition > 0 ? 4 : 1}>
        <Toolbar variant='dense' style={{alignItems: 'unset'}}>
          {/*title*/}
          <Typography
            variant="h1"
            noWrap
            component="h1"
            sx={{ padding: { xs: '10px 0', sm: '20px 0' } }}
          >
            {data.article.title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/*favorite and facts icons*/}
          <Box>
            <IconButton aria-label="facts" padding={0} disableRipple>
              <SvgIcon color='secondary' sx={{margin: {sm: '8px', md:'20px 0'}}}>
                <FactsIcon/>
              </SvgIcon>
            </IconButton>
            <IconButton aria-label="add to favorites" disableRipple onClick={() => setFavorite(!favorite)}>
              {favorite ? <SvgIcon color='primary' sx={{margin: {sm: '8px', md:'20px 10px'}}}><FavoriteFilledIcon/></SvgIcon>
                        : <SvgIcon color='secondary' sx={{margin: {sm: '8px', md:'20px 10px'}}}><FavoriteIcon/></SvgIcon>
              }
            </IconButton>
          </Box>
          {/*cart*/}
          <Box style={{ display: 'flex' }}>
            <Divider orientation="vertical" variant='fullWidth' flexItem style={{ minHeight: "auto"}}/>
            <IconButton size="large" aria-label="add to cart" color="inherit" disableRipple>
              <Badge badgeContent={data.cart.items} color="primary" sx={{marginLeft: {sm: '8px', md:'10px'}}}>
                <SvgIcon color='secondary'>
                  <CartIcon />
                </SvgIcon>
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
