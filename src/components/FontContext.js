// Creating context api for the font size

import { createContext } from "react";

export const FontContext = createContext({
	fontsize: 20,
	setfontcontext: () => {},
});
