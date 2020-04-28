
import React from "react"
import {render} from "react-dom"
import {AppContainer } from "react-hot-loader"
import App from "./app"

render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.querySelector('[data-js="app"]')
	)
	if (module.hot){
		module.hot.accept("./app", () => {
			const NextApp = require("./app").default
			render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			document.querySelector('[data-js="app"'))
		})
	}