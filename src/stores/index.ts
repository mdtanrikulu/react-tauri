import {configureStore, createSlice} from '@reduxjs/toolkit'
import deleteFile from "../tauri_actions/deleteFile";
import {getFiles} from "../tauri_actions/getFiles";
import {read_file} from "../tauri_actions/readFile";
import createFile from "../tauri_actions/createFile";
import {uiHandler} from "./ui_stores";


export const counterSlice = createSlice({
    name: 'main',
    initialState: {
        value: require('/Users/apple/PycharmProjects/react-tauri/src/myFile.json'),
        files: getFiles(),
    },
    reducers: {

        increment: (state: any) => {
            state.value = []
        },
        setFiles: (state: any) => {
            state.files = getFiles()
        },
        reduxDeleteFile: (state: any, action: any) => {
            deleteFile(action.payload)
            state.files = getFiles()
        },
        changeReadFile: (state: any, action: { payload: any }) => {
            state.value = read_file(action.payload)

        },
        reduxCreateFile: (state: any, action: { payload?: any }) => {
            createFile('')
            state.files = getFiles()
        }
    }
})

// Action creators are generated for each case reducer function
export const {increment, setFiles, reduxDeleteFile, changeReadFile, reduxCreateFile} = counterSlice.actions

// export default counterSlice.reducer
export default configureStore({
    reducer: {
        mainHandler: counterSlice.reducer,
        uiHandler: uiHandler.reducer
    }
});