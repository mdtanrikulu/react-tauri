import * as React from 'react';
import Box from '@mui/material/Box';
import RichTextEditor from "../apps/autodox2/src/RichTextEditor";
import {useSelector} from "react-redux";
import PersistentDrawerLeft from "../components/side_nav";
import BarButton from "./bar_buttons";
import DrawerItems from "./drawerItems";
import Typography from "@mui/material/Typography";


// export const ColorModeContext: any = React.createContext({
//     toggleColorMode: () => {
//     },
//
// });

const drawerWidth = 240;


export default function AppWithDrawer(props: any) {


    const files = useSelector((state: any) => state.mainHandler.files)

    const state = useSelector((state: any) => state.mainHandler.value)

    const ChangeTitle = (title: string) => {
        console.log({title})
    }
    const get_files =()=>{
        var files :any = [{name: 'Untitled', path:''}]
        // if (app_is_local){
        //     files = files.concat(get_tauri_files('user/directory'))
        // }
        // files = files.concat(get_cload_files('user/directory'))
        return files
    }
    // @ts-ignore
    return (

        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            <PersistentDrawerLeft
                drawerItems={<DrawerItems files={get_files()}/>}
                mainbar={<BarButton/>}>
                <RichTextEditor ChangeTitle={ChangeTitle} initialValue={state}/>
            </PersistentDrawerLeft>
        </Box>
    );
}


