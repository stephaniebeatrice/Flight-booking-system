import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './store'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')

createRoot(rootElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
)
