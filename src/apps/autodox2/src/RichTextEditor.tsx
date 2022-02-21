import 'tippy.js/dist/tippy.css'
import './App.css'
import React, {useEffect} from 'react'
import {
    createAlignPlugin,
    createAutoformatPlugin,
    createBlockquotePlugin,
    createBoldPlugin,
    createCodePlugin,
    createComboboxPlugin,
    createDeserializeCsvPlugin,
    createDeserializeDocxPlugin,
    createDeserializeMdPlugin,
    createDndPlugin,
    createExitBreakPlugin,
    createFontBackgroundColorPlugin,
    createFontColorPlugin,
    createFontSizePlugin,
    createHeadingPlugin,
    createHighlightPlugin,
    createHorizontalRulePlugin,
    createImagePlugin,
    createIndentPlugin,
    createItalicPlugin,
    createJuicePlugin,
    createKbdPlugin,
    createLinkPlugin,
    createListPlugin,
    createMediaEmbedPlugin,
    createMentionPlugin,
    createNodeIdPlugin,
    createNormalizeTypesPlugin,
    createParagraphPlugin,
    createPlateUI,
    createPlugins,
    createResetNodePlugin,
    createSelectOnBackspacePlugin,
    createSoftBreakPlugin,
    createStrikethroughPlugin,
    createSubscriptPlugin,
    createSuperscriptPlugin,
    createTablePlugin,
    createTodoListPlugin,
    createTrailingBlockPlugin,
    createUnderlinePlugin,
    MentionCombobox,
    Plate, usePlateEditorRef
} from '@udecode/plate'
import {createExcalidrawPlugin, ELEMENT_EXCALIDRAW, ExcalidrawElement,} from '@udecode/plate-ui-excalidraw'
import {withStyledPlaceHolders} from './config/components/withStyledPlaceHolders'
import {withStyledDraggables} from './config/components/withStyledDraggables'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import createNumbered, {ELEMENT_NUMBERED} from './config/components/numbered/numbered'
import {MarkBallonToolbar} from "./config/components/Toolbars";
import {CONFIG} from './config/config'
import {MENTIONABLES} from './config/mentionables'
import {NumberedElement} from "./config/components/numbered/numberedE";
import createCode, {ELEMENT_CODE} from "./config/components/code/code";
import {CodeElement} from "./config/components/code/codeE";

const id = 'Examples/Playground'

let components = createPlateUI({
    // a: undefined,
    // action_item: undefined,
    // blockquote: undefined,
    // bold: undefined,
    // code: undefined,
    // code_block: undefined,
    // code_line: undefined,
    // h1: undefined,
    // h2: undefined,
    // h3: undefined,
    // h4: undefined,
    // h5: undefined,
    // h6: undefined,
    // highlight: undefined,
    // img: undefined,
    // italic: undefined,
    // kbd: undefined,
    // li: undefined,
    // media_embed: undefined,
    // mention: undefined,
    // mention_input: undefined,
    // ol: undefined,
    // p: undefined,
    // search_highlight: undefined,
    // strikethrough: undefined,
    // subscript: undefined,
    // superscript: undefined,
    // table: undefined,
    // td: undefined,
    // th: undefined,
    // tr: undefined,
    // ul: undefined,
    // underline: undefined,
    [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
    [ELEMENT_NUMBERED]: NumberedElement,
    [ELEMENT_CODE]: CodeElement,

})
components = withStyledPlaceHolders(components)
components = withStyledDraggables(components, [ELEMENT_NUMBERED, ELEMENT_CODE,])

const RichTextEditor = (props: any) => {

    const plugins = createPlugins(
        [

            // createMention()
            createMentionPlugin(),
            createSelectOnBackspacePlugin(CONFIG.selectOnBackspace),
            createParagraphPlugin(),
            createBlockquotePlugin(),
            createTodoListPlugin(),
            createHeadingPlugin(),
            createImagePlugin(),
            createHorizontalRulePlugin(),
            createLinkPlugin(),
            createNumbered(),
            createCode(),
            // createListPlugin(),
            createTablePlugin(),
            createMediaEmbedPlugin(),
            createExcalidrawPlugin(),
            // createCodeBlockPlugin(),
            createAlignPlugin(CONFIG.align),
            createBoldPlugin(),
            // createCodePlugin(),
            createItalicPlugin(),
            createHighlightPlugin(),
            createUnderlinePlugin(),
            createStrikethroughPlugin(),
            createSubscriptPlugin(),
            createSuperscriptPlugin(),
            createFontColorPlugin(),
            createFontBackgroundColorPlugin(),
            createFontSizePlugin(),
            createKbdPlugin(),
            createNodeIdPlugin(),
            createDndPlugin(),
            createIndentPlugin(CONFIG.indent),
            createAutoformatPlugin(CONFIG.autoformat),
            createResetNodePlugin(CONFIG.resetBlockType),
            createSoftBreakPlugin(CONFIG.softBreak),
            createExitBreakPlugin(CONFIG.exitBreak),
            createNormalizeTypesPlugin(CONFIG.forceLayout),
            createTrailingBlockPlugin(CONFIG.trailingBlock),
            createComboboxPlugin(),

            createDeserializeMdPlugin(),
            createDeserializeCsvPlugin(),
            createDeserializeDocxPlugin(),
            createJuicePlugin(),
        ],
        {
            components,
        }
    )
    const editor: any = usePlateEditorRef()
    useEffect(() => {
        // try {
        //     Transforms.setNodes(
        //         editor,
        //         count,
        //         {
        //             at: [0, 0],
        //         }
        //     )
        //
        //
        //     // Transforms.setNodes(editor, count)
        //     // editor.apply({
        //     //     type: 'insert_text',
        //     //     path: [0, 0],
        //     //     offset: 15,
        //     //     text: 'A new string of text to be inserted.',
        //     // })
        // } catch (e: any) {
        //     console.log(e)
        // }
    }, [props.initialValue])
    var title: string = props.initialValue[0].children[0].text
    return (<DndProvider backend={HTML5Backend}>
            <span>
            {`${JSON.stringify(props.initialValue)}`}
        </span>
            <Plate

                onChange={(changes) => {
                    const new_title = changes[0].children[0].text
                    if (title !== new_title) {
                        title = new_title
                        props.ChangeTitle(title)

                    }
                }}

                id={id}
                editableProps={CONFIG.editableProps}
                initialValue={props.initialValue}
                plugins={plugins}
            >
                {/*<HeadingToolbar>*/}
                {/*  <ToolbarButtons />*/}
                {/*</HeadingToolbar>*/}

                <MarkBallonToolbar/>

                <MentionCombobox
                    items={MENTIONABLES}
                />
            </Plate>
        </DndProvider>
    )
}

export default RichTextEditor
// const rootElement = document.getElementById('root')
// ReactDOM.render(<Plugins />, rootElement)
