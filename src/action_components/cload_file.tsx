import {ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import React from "react";

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const CloudFile = (props: any) => {
    const dispatch = useDispatch()

    return (<MenuItem>
          <ListItemIcon>
            <CloudUploadIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Upload</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘c
          </Typography>
        </MenuItem>)
}
export default CloudFile