import {ReactEditor} from "slate-react";
import {Transforms} from "slate";

export const setNode = (id: any, editor: any,data:any) => {
    const target: any = document.getElementById(id)
    const node = target && ReactEditor.toSlateNode(editor, target)
    const path = node && node && ReactEditor.findPath(editor, node)
    path && Transforms.setNodes(editor, data, {at: path})
}