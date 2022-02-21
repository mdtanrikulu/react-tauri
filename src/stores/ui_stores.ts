import {createSlice} from '@reduxjs/toolkit'


export const uiHandler = createSlice({
    name: 'ui',
    initialState: {
        mode: 'light',
    },
    reducers: {
        toggleMode: (state: any) => {
            if (state.mode == 'light') {
                state.mode = 'dark'
            } else {
                state.mode = 'light'
            }
        },
    }
})

export const {toggleMode} = uiHandler.actions