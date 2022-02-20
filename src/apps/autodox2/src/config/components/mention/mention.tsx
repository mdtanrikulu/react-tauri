import {createPluginFactory} from '@udecode/plate-core';
import {MentionElement} from "./numberedE";

export const ELEMENT_NUMBERED = 'numbered';

const createMention = createPluginFactory({
    key: ELEMENT_NUMBERED,
    isLeaf: false,
    isElement: true,
    // isVoid: true,
    component: MentionElement,
});
export default createMention
