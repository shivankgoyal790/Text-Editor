import React, { useCallback, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/UserList";
import Myeditor from "./MyEditor";
import { FontContext } from "./components/FontContext";
function App() {
	const [fontsize, setfont] = useState(16);

	const setfontcontext = useCallback((val) => {
		setfont(val);
	}, []);
	return (
		<FontContext.Provider
			value={{
				fontsize: fontsize,
				setfontcontext: setfontcontext,
			}}
		>
			<div className="w-100">
				<Header />
				<div className="container h2 mt-5">John Doe Interview</div>
				<div className="container">
					<Myeditor />
				</div>
				<UserList />
			</div>
		</FontContext.Provider>
	);
}

export default App;
