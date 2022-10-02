// This component is for the user comments part where the user can edit his/her text. It uses Slate Library for the editor

import React, { useState, useCallback } from "react";
import { createEditor } from "slate";
import { CustomEditor } from "./slate/CustomEditor";
import { Slate, Editable, withReact } from "slate-react";
import Leaf from "./slate/Leaf";

const TextEdit = (props) => {
	// Setting the initial value of the editor
	const initialValue = [
		{
			type: "paragraph",
			children: [{ text: props.alt }],
		},
	];
	const [editor] = useState(() => withReact(createEditor()));

	// Rendering the editor again after the changes to the select part of the editor text.
	const renderLeaf = useCallback((props) => {
		return <Leaf {...props} />;
	}, []);

	return (
		<Slate editor={editor} value={initialValue}>
			<Editable
				editor={editor}
				renderLeaf={renderLeaf}
				//keyboard events on the editor
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
							break;
						}
					}
				}}
			/>
		</Slate>
	);
};

export default TextEdit;
