// Component for the font selector to be imported in Toolbar component
import React, { useContext } from "react";
import { FontContext } from "./FontContext";
const FontDropdown = (props) => {
	const mycontext = useContext(FontContext);
	const handlefont = (val) => {
		mycontext.setfontcontext(val);
	};
	return (
		<div
			className="position-absolute d-flex flex-column border border-1 bg-light py-1 top-100"
			style={{ zIndex: 99 }}
		>
			<div
				className="fontsizepick px-3 "
				onClick={() => {
					handlefont(8);
					props.onClick();
				}}
			>
				8
			</div>
			<div
				className="fontsizepick px-3 "
				onClick={() => {
					handlefont(12);
					props.onClick();
				}}
			>
				12
			</div>
			<div
				className="fontsizepick px-3 "
				onClick={() => {
					handlefont(16);
					props.onClick();
				}}
			>
				16
			</div>
			<div
				className="fontsizepick px-3 "
				onClick={() => {
					handlefont(20);
					props.onClick();
				}}
			>
				20
			</div>
			<div
				className="fontsizepick px-3 "
				onClick={() => {
					handlefont(24);
					props.onClick();
				}}
			>
				24
			</div>
			<div
				className="fontsizepick px-3 "
				onClick={() => {
					handlefont(28);
					props.onClick();
				}}
			>
				28
			</div>
			<div
				className="fontsizepick px-3 "
				onClick={() => {
					handlefont(32);
					props.onClick();
				}}
			>
				32
			</div>
			<div
				className="fontsizepick px-3 "
				onClick={() => {
					handlefont(36);
					props.onClick();
				}}
			>
				36
			</div>
		</div>
	);
};

export default FontDropdown;
