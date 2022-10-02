// Custom editor to have custom formatting
// These CustomEditor object hellps to toggle between operations for example toggle bold etc.

let Transforms
let Editor;
let Text;
const CustomEditor = {

	isBoldMarkActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.bold === true,
			universal: true,
		});

		return !!match;
	},

	isItalicMarkActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.italic === true,
			universal: true,
		});

		return !!match;
	},

	isUnderlineMarkActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.underline === true,
			universal: true,
		});

		return !!match;
	},

    isFontActive(editor){
        const [match] = Editor.nodes(editor, {
			match: (n) => n.type === "fontsize",
		});

		return !!match;
    },

	isAligncenterMarkActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.type === "aligncenter",
		});

		return !!match;
	},

	isAlignleftMarkActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.type === "alignleft",
		});

		return !!match;
	},

	isOrderListActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.type === "orderlist",
		});

		return !!match;
	},

	isBlockquoteActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.blockquote === true,
			universal: true,
		});

		return !!match;
	},

	isLinkActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.href === true,
			universal: true,
		});

		return !!match;
	},

	isImageActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: (n) => n.type === "image",
			universal: true,
		});

		return !!match;
	},

    isEmojiActive(editor){
        const [match] = Editor.nodes(editor,{
			match: (n) => n.type === "emoji",
		});
		return !!match;
    },

	toggleBoldMark(editor) {
		const isActive = CustomEditor.isBoldMarkActive(editor);
		Transforms.setNodes(
			editor,
			{ bold: isActive ? null : true },
			{ match: (n) => Text.isText(n), split: true }
		);
	},

	toggleLink(editor) {
		const isActive = CustomEditor.isLinkActive(editor);
		let url;
		if (!isActive) {
			url = prompt("Enter a URL");
		}
		Transforms.setNodes(
			editor,
			{ href: isActive ? null : url },
			{ match: (n) => Text.isText(n), split: true }
		);
	},

	toggleItalicMark(editor) {
		const isActive = CustomEditor.isItalicMarkActive(editor);
		Transforms.setNodes(
			editor,
			{ italic: isActive ? null : true },
			{ match: (n) => Text.isText(n), split: true }
		);
	},

	toggleUnderlineMark(editor) {
		const isActive = CustomEditor.isUnderlineMarkActive(editor);
		Transforms.setNodes(
			editor,
			{ underline: isActive ? null : true },
			{ match: (n) => Text.isText(n), split: true }
		);
	},


	toggleAlignCenter(editor) {
		const isActive = CustomEditor.isAligncenterMarkActive(editor);
		Transforms.setNodes(
			editor,
			{ type: isActive ? null : "aligncenter" },
			{ match: (n) => Editor.isBlock(editor, n) }
		);
	},


	toggleAlignleft(editor) {
		const isActive = CustomEditor.isAlignleftMarkActive(editor);
		Transforms.setNodes(
			editor,
			{ type: isActive ? null : "alignleft" },
			{ match: (n) => Editor.isBlock(editor, n) }
		);
	},

    // for creating a list
	toggleOrderList(editor) {
		const isActive = CustomEditor.isOrderListActive(editor);
		Transforms.setNodes(
			editor,
			{ type: isActive ? null : "orderlist" },
			{ match: (n) => Editor.isBlock(editor, n) }
		);
	},

    // adding a block quote
	toggleBlockquote(editor) {
		const isActive = CustomEditor.isBlockquoteActive(editor);
		Transforms.setNodes(
			editor,
			{ blockquote: isActive ? null : true },
			{ match: (n) => Text.isText(n), split: true }
		);
	},

    // to add image
	Addimage(editor) {
		const isActive = CustomEditor.isImageActive(editor);
		Transforms.setNodes(
			editor,
			{ type: isActive ? null : "image" },
			{ match: (n) => Editor.isBlock(editor, n) }
		);
	},

    // to add emoji
    AddEmoji(editor,emoji){
        editor.insertText(emoji.emoji);
        const isActive = CustomEditor.isEmojiActive(editor);
		Transforms.setNodes(
			editor,
			{ type: isActive ? null : "emoji" },
			{ match: (n) => Editor.isBlock(editor, n) }
		);
    },

    ChangeFont(editor){
        const isActive = CustomEditor.isFontActive(editor);
		Transforms.setNodes(
			editor,
			{ type: isActive ? null : "fontsize" },
			{ match: (n) => Editor.isBlock(editor, n) }
		);
    }

};


// getdata function which gets editor object as props from the Myeditor component.
const Getdata = (props) =>{
    Editor = props.Editor;
    Transforms = props.Transforms;
    Text = props.Text;
}


export {Getdata,CustomEditor}
