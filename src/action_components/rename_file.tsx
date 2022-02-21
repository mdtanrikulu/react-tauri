import {MenuItem} from "@mui/material";
import {useDispatch} from "react-redux";
import React from "react";
import UnstyledInput from "../components/CutomInput";


const RenameFile = (props: any) => {
    const dispatch = useDispatch()

    return (<UnstyledInput placeholder={props.text}/>)
}
export default RenameFile