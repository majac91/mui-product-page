import React from "react";

import {Typography, Link} from "@mui/material";
import { ListItem, ListItemIcon} from "@mui/material";

import {ReactComponent as AttachmentIcon} from '../../icons/attachment.svg'

const Attachment = ({item}) => {
  return (
    <ListItem sx={{ pb: '0', lineHeight: 1}} disableGutters>
      <ListItemIcon sx={{minWidth: '20px'}}>
        <AttachmentIcon style={{width: '15px'}}/>
      </ListItemIcon>
      <Typography fontSize={'h4'} sx={{display: 'inline'}}>
        <Link href={item.file_link} download variant={'aboutSubheading'} sx={{color: 'accent'}} underline={'hover'}>{item.file_label}</Link>
      </Typography>
    </ListItem>
  )
};

export default Attachment;
