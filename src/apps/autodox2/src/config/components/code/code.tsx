//consider using this in case ....
//Code Highlighting slatejs
//https://www.slatejs.org/examples/code-highlighting

import {createPluginFactory} from '@udecode/plate-core';
import {CodeElement} from "./codeE";

export const ELEMENT_CODE = 'code';


const createCode = createPluginFactory({
    key: ELEMENT_CODE,
    isLeaf: false,
    isElement: true,
    // isVoid: true,
    component: CodeElement,
});
export default createCode