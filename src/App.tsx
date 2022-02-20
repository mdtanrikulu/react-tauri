import * as React from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import "react-color-palette/lib/css/styles.css";
import AppWithDrawer from "./main_components/AppWithDrawer";
import {useSelector} from "react-redux";


function App(props: any) {
    const mode: any = useSelector((state: any) => state.uiHandler.mode)
    const amber = {

        50: '#7e1aff',

        100: '#c31509',

        200: '#ffe082',

        300: '#ffd54f',

        400: '#ffca28',

        500: "#ffffff",

        600: '#eeff00',

        700: '#d03333',

        800: '#11ff00',

        900: '#e600ff',

        A100: '#ffe57f',

        A200: '#40ff86',

        A400: '#000dff',

        A700: '#ff003b',
    };
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        ...amber,
                        ...(mode === 'dark' && {
                            main: '#000000',
                        }),
                    },
                    ...(mode === 'dark' ? {
                            background: {
                                default: '#373737',
                                paper: '#3c3c3c',
                            },
                        } :
                        {
                            background: {
                                default: '#ffffff',
                                paper: '#e2e2e2',
                            },
                        }),
                    text: {
                        ...(mode === 'light'
                            ? {
                                primary: '#000000',
                                secondary: '#ff1313',
                            }
                            : {
                                primary: '#ffffff',
                                secondary: '#c28bff',
                            }),
                    },
                },
            }), [mode, amber],
    );
    return (
        <ThemeProvider theme={theme}>
            <AppWithDrawer/>
        </ThemeProvider>
    )
}

export default App