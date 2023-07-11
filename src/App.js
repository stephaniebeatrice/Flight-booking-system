import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import './App.css'
import { BookingPage } from './pages/booking/booking'
import { Home } from './pages/Home/home'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Booking" element={<BookingPage />} />
			</Routes>
		</Router>
	)
}
export default App
