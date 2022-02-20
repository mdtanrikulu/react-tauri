import React from 'react';
import {PlateRenderElementProps,} from '@udecode/plate-core';

export const CodeElement = (props: PlateRenderElementProps) => {
    const {attributes, children, element, editor} = props


    return (
        <span id={element.id} {...attributes} >
            {children}
        </span>
    );
};
