import IconButton from "@mui/material/IconButton";
import * as React from "react";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {useTheme} from "@mui/material";
import BasicBreadcrumbs from "../components/breadCrumbs";
import {useDispatch} from "react-redux";
import {toggleMode} from '../stores/ui_stores'

const DarkLightMode = () => {
    const theme = useTheme();
    const dispatch = useDispatch()
    return <IconButton sx={{ml: 1}}
                       onClick={() => {
                           dispatch(toggleMode())
                       }}
                       color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon/> : <Brightness4Icon/>}
    </IconButton>
}

export default function BarButton(props: any) {
    return (<span>
                    <IconButton style={{backgroundColor: 'tomato'}}
                        //             onClick={() => {
                        //     electron.ipcRenderer.send('close')
                        // }}
                    />
                    <IconButton style={{backgroundColor: 'orange'}}
                        //             onClick={() => {
                        //     electron.ipcRenderer.send('minimize')
                        // }}
                    />
                        <IconButton style={{backgroundColor: 'lightgreen'}}
                            // onClick={() => {
                            //     electron.ipcRenderer.send('maximize')
                            // }}
                        />
                        <DarkLightMode/>
                        <BasicBreadcrumbs/>
                    </span>)
}