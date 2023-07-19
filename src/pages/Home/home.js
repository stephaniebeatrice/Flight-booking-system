import React, { useState } from 'react'
import SearchForm from '../../container/search-form/search-form'
import { Link } from 'react-router-dom'
import image from '../../img/homepage.jpg'
import FlightsGrid from '../../components/flights-grid/flights-grid'
import './style.css'

export const Home = () => {
	const [flights, setFlights] = useState([])
	console.log('========================FLIGHTS================')
	console.log(flights)
	return (
		<div className="App">
			<header className="App-header">
				<h2>
					<Link to={'/Booking'}>Flight Booking System</Link>
					<div className="Login">
						<Link to={'/login'}>Login</Link>
					</div>
				</h2>
			</header>
			<section
				className="Main-container"
				style={{ backgroundImage: `url(${image})` }}
			>
				<div className="search-flight">
					<p>Search Flight</p>
				</div>
				<aside className="Search-section">
					<SearchForm setFlights={setFlights} />
				</aside>

				<section className="Results-section">
					{<FlightsGrid flights={flights} />}
					{<FlightsGrid flights={flights} />}
				</section>
			</section>
		</div>
	)
}
