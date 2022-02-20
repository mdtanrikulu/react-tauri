import * as React from 'react';
import {ColorPicker, useColor} from "react-color-palette";
import "react-color-palette/lib/css/styles.css";


function ColorPallet(props: any) {
    const [color, setColor] = useColor("hex", props.intial);

    return (
        <ColorPicker width={456} height={228} color={color} onChange={(v: any) => {
            setColor(v)
            props.setColor(v)
        }} hideHSV dark/>
    )

}

export default ColorPallet