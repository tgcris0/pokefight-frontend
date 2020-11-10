import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<CssBaseline>
				<App />
			</CssBaseline>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
