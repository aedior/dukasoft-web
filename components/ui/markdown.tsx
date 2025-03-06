'use client'
// InitializedMDXEditor.tsx
import { forwardRef, type ForwardedRef } from 'react'
import '@mdxeditor/editor/style.css'
import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    MDXEditor,
    type MDXEditorMethods,
    type MDXEditorProps,
    linkPlugin,
    codeBlockPlugin,
    codeMirrorPlugin,
    tablePlugin,
    toolbarPlugin,
    UndoRedo,
    BoldItalicUnderlineToggles,
    InsertTable,
    ConditionalContents,
    ChangeCodeMirrorLanguage,
    InsertCodeBlock,
    KitchenSinkToolbar,
    linkDialogPlugin,
    imagePlugin,
    frontmatterPlugin,
    sandpackPlugin,
    directivesPlugin,
    diffSourcePlugin
} from '@mdxeditor/editor'
import dynamic from 'next/dynamic'


// Only import this to the next file
export default function InitializedMDXEditor({
    editorRef,
    ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
    return (
        <MDXEditor
            plugins={[
                toolbarPlugin({ toolbarContents: () => <KitchenSinkToolbar /> }),
                listsPlugin(),
                quotePlugin(),
                headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
                linkPlugin(),
                linkDialogPlugin(),
                imagePlugin({
                    imageAutocompleteSuggestions: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
                    imageUploadHandler: async () => Promise.resolve('https://picsum.photos/200/300')
                }),
                tablePlugin(),
                thematicBreakPlugin(),
                frontmatterPlugin(),
                codeBlockPlugin({ defaultCodeBlockLanguage: '' }),
                codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'Plain Text', tsx: 'TypeScript', '': 'Unspecified' } }),
                // directivesPlugin({ directiveDescriptors: [YoutubeDirectiveDescriptor, AdmonitionDirectiveDescriptor] }),
                diffSourcePlugin({ viewMode: 'rich-text', diffMarkdown: 'boo' }),
                markdownShortcutPlugin()
            ]}
            {...props}
            ref={editorRef}
        />
    )
}


// ForwardRefEditor.tsx

// This is the only place InitializedMDXEditor is imported directly.
const Editor = dynamic(() => import('./markdown'), {
    // Make sure we turn SSR off
    ssr: false
})

// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const Markdown = forwardRef<MDXEditorMethods, MDXEditorProps>((props, ref) => <Editor {...props} editorRef={ref} />)

// TS complains without the following line
Markdown.displayName = 'Markdown'