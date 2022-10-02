// This component is the main editor of the web appication ,where user can interact with the editor.

import React, { useState, useCallback } from "react";
import { Editor, Transforms, Text } from "slate";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import Toolbar from "./slate/Toolbar";
import Leaf from "./slate/Leaf";
import { Getdata, CustomEditor } from "./slate/CustomEditor";
import {
	DefaultElement,
	Addimage,
	Orderme,
	AlignCenter,
	AlignLeft,
	AddEmoji,
	ChangeFont,
} from "./slate/CustomFunctions";

const initialValue = [
	{
		type: "paragraph",
		children: [{ text: "A line of text in a paragraph." }],
	},
];

const Myeditor = () => {
	const [editor] = useState(() => withReact(createEditor()));

	// renderElement function to run whenever a custom formatting is done
	const renderElement = useCallback((props) => {
		switch (props.element.type) {
			case "emoji":
				return <AddEmoji {...props} />;
			case "aligncenter":
				return <AlignCenter {...props} />;
			case "alignleft":
				return <AlignLeft {...props} />;
			case "orderlist":
				return <Orderme {...props} />;
			case "image":
				return <Addimage {...props} />;
			case "fontsize":
				return <ChangeFont {...props} />;

			default:
				return <DefaultElement {...props} />;
		}
	}, []);

	// for custom formatting
	const renderLeaf = useCallback((props) => {
		return <Leaf {...props} />;
	}, []);

	return (
		// Add a toolbar with buttons that call the methods needed to format document.
		<Slate editor={editor} value={initialValue}>
			<Getdata Editor={Editor} Transforms={Transforms} Text={Text} />
			<Toolbar editor={editor} CustomEditor={CustomEditor} />
			<br></br>
			<Editable
				editor={editor}
				renderElement={renderElement}
				renderLeaf={renderLeaf}
				// keystroke events
				onKeyDown={(event) => {
					if (!event.ctrlKey) {
						return;
					}
					switch (event.key) {
						case "`": {
							event.preventDefault();
							CustomEditor.toggleCodeBlock(editor);
							break;
						}

						case "b": {
							event.preventDefault();
							CustomEditor.toggleBoldMark(editor);
							break;
						}
						case "i": {
							event.preventDefault();
							CustomEditor.toggleItalicMark(editor);
							break;
						}
						case "u": {
							event.preventDefault();
							CustomEditor.toggleUnderlineMark(editor);
							break;
						}
						default: {
						}
					}
				}}
			/>
		</Slate>
	);
};

export default Myeditor;
