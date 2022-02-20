import {createPluginFactory} from '@udecode/plate-core';
import {EditableVoidElement} from "./editableVoidE";

export const EDITABLE_VOID = 'editable-void';

const createEditableVoidPlugin = createPluginFactory({
    key: EDITABLE_VOID,
    isElement: true,
    isVoid: true,
   component: EditableVoidElement
});
export default createEditableVoidPlugin