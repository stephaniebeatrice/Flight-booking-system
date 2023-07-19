import React, { useState } from 'react'
import './flight-info.css'

function FlightInfo() {
	const [searchResult, setSearchResult] = useState([])

	// Function to handle flight search
	const handleSearch = () => {
		// Perform flight search based on user input
		// Replace the following code with your actual flight search logic
		const searchResponse = [
			{
				flightNumber: 'FL123',
				origin: 'New York',
				destination: 'London',
				departureTime: '09:00 AM',
				arrivalTime: '02:00 PM'
			},
			{
				flightNumber: 'FL456',
				origin: 'London',
				destination: 'New York',
				departureTime: '03:00 PM',
				arrivalTime: '08:00 PM'
			},
			{
				flightNumber: 'FL789',
				origin: 'Los Angeles',
				destination: 'Tokyo',
				departureTime: '11:30 PM',
				arrivalTime: '05:30 AM'
			}
		]

		// Update the search result state with the flight search response
		setSearchResult(searchResponse)
	}
	return (
		<div>
			<h2>Flight Timetable</h2>

			<table>
				<thead>
					<tr>
						<th>Flight Number</th>
						<th>Origin</th>
						<th>Destination</th>
						<th>Departure Time</th>
						<th>Arrival Time</th>
					</tr>
				</thead>
				<tbody>
					{searchResult.map((flight) => (
						<tr key={flight.flightNumber}>
							<td>{flight.flightNumber}</td>
							<td>{flight.origin}</td>
							<td>{flight.destination}</td>
							<td>{flight.departureTime}</td>
							<td>{flight.arrivalTime}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default FlightInfo
