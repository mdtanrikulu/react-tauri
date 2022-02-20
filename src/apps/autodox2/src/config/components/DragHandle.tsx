import React from "react";
import Tippy from "@tippyjs/react";
import {grabberTooltipProps} from "./withStyledDraggables";
import LongMenu from "./Menu";
import {ListItemIcon, ListItemText, MenuItem, Typography} from "@mui/material";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const DragHandle = (props: any) => {
    const {className, styles} = props


    return (
        <Tippy {...grabberTooltipProps}>
                        <span>
                            <LongMenu>
                                <MenuItem>option1</MenuItem>
                                <MenuItem>option2</MenuItem>
                                {props.element.type == 'code' && <MenuItem>
                                    <ListItemIcon>
                                        <PlayCircleFilledIcon fontSize="small"/>
                                    </ListItemIcon>
                                    <ListItemText>Run</ListItemText>
                                    <Typography variant="body2" color="text.secondary">
                                        ⌘r
                                    </Typography>
                                </MenuItem>}
                            </LongMenu>
                            </span>
        </Tippy>
    )
}