// Toolbar for our main Editor to to custom formatting

import React, { useState } from "react";
import img11 from "../images/Vector.png";
import img12 from "../images/Vector (1).png";
import img1 from "../images/Vector (2).png";
import img2 from "../images/Vector (3).png";
import img3 from "../images/Vector (4).png";
import img4 from "../images/Vector (5).png";
import img5 from "../images/Vector (6).png";
import img6 from "../images/Vector (7).png";
import img7 from "../images/Vector (8).png";
import img8 from "../images/Vector (9).png";
import img9 from "../images/Vector (10).png";
import img10 from "../images/Vector (11).png";
import Button from "./Button";
import EmojiPicker from "emoji-picker-react";
import FontDropdown from "../components/FontDropdown";

const Toolbar = (props) => {
	// defining state for the emoji picker
	const [isActive, setisactive] = useState(false);

	//defining state for the fontsize picker
	const [isfontActive, setfontactive] = useState(false);

	const displayemojiHandler = () => {
		if (isActive) setisactive(false);
		else setisactive(true);
	};
	const changefontHandler = (event) => {
		if (isfontActive) {
			if (event.target.id !== "fontpicker") setfontactive(false);
		} else setfontactive(true);
	};
	return (
		<div className="container bg-light p-2">
			<Button
				imgsrc={img11}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.toggleBoldMark(props.editor);
				}}
			/>
			<Button
				imgsrc={img12}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.toggleItalicMark(props.editor);
				}}
			/>
			<Button
				imgsrc={img1}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.toggleUnderlineMark(props.editor);
				}}
			/>
			<div
				id="fontpick"
				className="btn position-relative"
				onClick={changefontHandler}
			>
				<img src={img2} alt="font" />
				{isfontActive && (
					<div className="position-absolute top-100" style={{ zIndex: 99 }}>
						<FontDropdown
							onClick={() => {
								props.CustomEditor.ChangeFont(props.editor);
							}}
						/>
					</div>
				)}
			</div>
			<Button
				imgsrc={img3}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.toggleAlignleft(props.editor);
				}}
			/>
			<Button
				imgsrc={img4}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.toggleAlignCenter(props.editor);
				}}
			/>
			<Button
				imgsrc={img5}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.toggleOrderList(props.editor);
				}}
			/>
			<Button
				imgsrc={img6}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.toggleBlockquote(props.editor);
				}}
			/>
			<Button
				imgsrc={img7}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.toggleLink(props.editor);
				}}
			/>
			<Button
				imgsrc={img8}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.Addimage(props.editor);
				}}
			/>
			<div className="btn position-relative" id="emojipick">
				<img src={img9} alt="emoji" onClick={displayemojiHandler} />
				{isActive && (
					<div className="position-absolute top-100" style={{ zIndex: 99 }}>
						<EmojiPicker
							onEmojiClick={(emoji) => {
								props.CustomEditor.AddEmoji(props.editor, emoji);
								setisactive(false);
							}}
						/>
					</div>
				)}
			</div>
			<Button
				imgsrc={img10}
				onMouseDown={(event) => {
					event.preventDefault();
					props.CustomEditor.toggleCodeBlock(props.editor);
				}}
			/>
		</div>
	);
};

export default Toolbar;
