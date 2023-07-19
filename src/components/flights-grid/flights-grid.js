import React from 'react'
import './flight-grid.css'
//import { FlightSearchInfo } from './../flight-search-info/flight-search-info'
import FlightInfo from './../flight-info/flight-info'
// import { MultiFlightInfo } from "./../multi-flight-info/multi-flight-info";

const FlightsGrid = (props) => {
	const flights = {
		nonStopFlights: [...props.flights]
	}
	// const criteria = {
	// 	origin: 'KENYA',
	// 	destination: 'DUBAI',
	// 	date: Date.now()
	// }
	//const flightsCount = flights.nonStopFlights.length

	return (
		<div className="flights-info-container">
			{/* {props.criteria && (
				<FlightSearchInfo criteria={criteria} count={flightsCount || 0} />
			)} */}
			 {flights.nonStopFlights.map((flight) => (
				<FlightInfo data={flight} />
			))} 
		</div>
	)
}
export default FlightsGrid
