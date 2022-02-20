import {ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";

import {reduxDeleteFile} from '../stores'
import DeleteIcon from '@mui/icons-material/Delete';
import {useDispatch} from "react-redux";
import React from "react";


const DeleteFile = (props: any) => {
    const dispatch = useDispatch()

    return (<MenuItem

        onClick={() => {
            dispatch(reduxDeleteFile(props.text))
            // deleteFile(props.text, dispatch)
        }}
    >
        <ListItemIcon>
            <DeleteIcon fontSize="small"/>
        </ListItemIcon>
        <ListItemText>Delete</ListItemText>
        <Typography variant="body2" color="text.secondary">
            ⌘d
        </Typography>
    </MenuItem>)
}
export default DeleteFile