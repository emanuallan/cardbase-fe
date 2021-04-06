import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import "focus-visible/dist/focus-visible";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { Global, css } from "@emotion/react";

const GlobalStyles = css`
	/*
    This will hide the focus indicator if the element receives focus    via the mouse,
    but it will still show up on keyboard focus.
  */
	.js-focus-visible :focus:not([data-focus-visible-added]) {
		outline: none;
		box-shadow: none;
	}
`;

ReactDOM.render(
	<React.StrictMode>
		<ColorModeScript />
		<Provider store={store}>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<Global styles={GlobalStyles} />
					<App />
				</ChakraProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
