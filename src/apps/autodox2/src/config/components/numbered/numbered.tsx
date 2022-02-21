import {createPluginFactory} from '@udecode/plate-core';
import {NumberedElement} from "./numberedE";

export const ELEMENT_NUMBERED = 'numbered';

const createNumbered = createPluginFactory({
    key: ELEMENT_NUMBERED,
    isLeaf: false,
    isElement: true,
    // isVoid: true,
    component: NumberedElement,
});
export default createNumbered