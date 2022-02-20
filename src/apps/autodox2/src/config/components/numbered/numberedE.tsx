import React, {useEffect} from 'react';
import {PlateRenderElementProps,} from '@udecode/plate-core';
import {setNode} from "../../../Functions/setNode";

export const NumberedElement = (props: PlateRenderElementProps) => {
    const {attributes, children, element, editor} = props

    const ch = editor.children
    ch.map((i: any, index: number) => {
        if (i.id == element.id) {
            const prev = ch[index - 1]
            const order = prev.order ? prev.order + 1 : 1
            setNode(element.id, editor, {...element, order: order})
        }
    })
    useEffect(() => {
        ch.map((i: any, index: number) => {
            if (i.id == element.id) {
                const prev = ch[index - 1]
                const order = prev.order ? prev.order + 1 : 1
                setNode(element.id, editor, {...element, order: order})
            }
        })

    }, [])
    return (
        <div id={element.id} {...attributes} >
            {element.order}.{" "}{children}
        </div>
    );
};
