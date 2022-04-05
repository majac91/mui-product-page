import React from "react";
import {Typography} from "@mui/material";
import {Item} from './style';

const BulletItem = ({itemTitle, item}) => {

  return (
    <Item sx={{ display: 'list-item', listStyleType: 'initial', listStylePosition: 'inside', pb: '0', lineHeight: 1}} disableGutters>
      <Typography fontSize={'1rem'} sx={{display: 'inline', ml: '-10px'}} fontWeight={'medium'}>
        <Typography component={'span'} variant={'aboutSubheading'}>{itemTitle}</Typography> : {item}
      </Typography>
    </Item>
  )
};

export default BulletItem;
