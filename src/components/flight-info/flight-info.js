// import React from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import { DetailLabel } from './../detail-label/detail-label'
// import { PriceInfo } from './../price-info/price-info'
// // import nonStopFlightLogo from './../../assets/nonstop.png'
// import { getTimeDifferece } from './../../lib/utils'
// import './flight-info.css'

// const FlightLogo = (props) => {
// 	//   return <img src={nonStopFlightLogo} width="12" height="12" />;
// }

// export const FlightInfo = (props) => {
// 	const {
// 		name,
// 		flightNo,
// 		departureTime,
// 		origin,
// 		arrivalTime,
// 		destination,
// 		price,
// 		date
// 	} = props.data
// 	const isMultiMode = props.isMultiMode
// 	const timeDiff =
// 		new Date(`${date} ${arrivalTime}`) - new Date(`${date} ${departureTime}`)

// 	return (
// 		<Card>
// 			<section
// 				className={`Flight-info ${isMultiMode ? 'gray-background' : ''}`}
// 			>
// 				<FlightLogo></FlightLogo>
// 				<DetailLabel mainText={name} subText={flightNo}></DetailLabel>
// 				<DetailLabel mainText={departureTime} subText={origin}></DetailLabel>
// 				<DetailLabel mainText={arrivalTime} subText={destination}></DetailLabel>
// 				<DetailLabel
// 					mainText={getTimeDifferece(timeDiff)}
// 					subText={isMultiMode ? '' : 'Non stop'}
// 				></DetailLabel>
// 				{isMultiMode ? null : <PriceInfo amount={price} />}
// 				{isMultiMode ? null : <Button variant="outline-danger">Book</Button>}
// 			</section>
// 		</Card>
// 	)
// }
import React, { useState, useEffect } from 'react'

function FlightInfo() {
	const [searchResults, setSearchResults] = useState([])
	const [error, setError] = useState('')
	const [depDate, setDepDate] = useState('')
	const [retDate, setRetDate] = useState('')
	const [depCity, setDepCity] = useState('')
	const [arrCity, setArrCity] = useState('')
	const [type, setType] = useState('')
	const [fClass, setFClass] = useState('')
	const [passengers, setPassengers] = useState('')

	const handleSearch = (event) => {
		event.preventDefault()

		if (depCity === arrCity) {
			setError('sameval')
			return
		}

		if (depCity === '0') {
			setError('seldep')
			return
		}

		if (arrCity === '0') {
			setError('selarr')
			return
		}

		// Perform API request to fetch flight search results
		fetchFlightSearchResults(depCity, arrCity, depDate)
			.then((results) => {
				setSearchResults(results)
			})
			.catch((error) => {
				console.log('Error:', error)
				setError('APIError')
			})
	}

	useEffect(() => {
		// Redirect user based on error value
		if (error === 'sameval') {
			window.location.href = 'index.php?error=sameval'
		} else if (error === 'seldep') {
			window.location.href = 'index.php?error=seldep'
		} else if (error === 'selarr') {
			window.location.href = 'index.php?error=selarr'
		}
	}, [error])

	// Perform API request to fetch flight search results
	const fetchFlightSearchResults = (depCity, arrCity, depDate) => {
		// Replace with your actual API endpoint and data structure
		const requestBody = {
			depCity,
			arrCity,
			depDate,
			type,
			fClass,
			passengers
		}

		return fetch('/api/flightSearch', {
			method: 'POST',
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => data.results)
			.catch((error) => {
				console.log('Error:', error)
				throw new Error('Failed to fetch flight search results.')
			})
	}

	return (
		<main>
			<form onSubmit={handleSearch}>
				<input
					type="text"
					name="dep_date"
					value={depDate}
					onChange={(e) => setDepDate(e.target.value)}
					placeholder="Departure Date"
				/>
				<input
					type="text"
					name="ret_date"
					value={retDate}
					onChange={(e) => setRetDate(e.target.value)}
					placeholder="Return Date"
				/>
				<input
					type="text"
					name="dep_city"
					value={depCity}
					onChange={(e) => setDepCity(e.target.value)}
					placeholder="Departure City"
				/>
				<input
					type="text"
					name="arr_city"
					value={arrCity}
					onChange={(e) => setArrCity(e.target.value)}
					placeholder="Arrival City"
				/>
				<input
					type="text"
					name="type"
					value={type}
					onChange={(e) => setType(e.target.value)}
					placeholder="Type"
				/>
				<input
					type="text"
					name="f_class"
					value={fClass}
					onChange={(e) => setFClass(e.target.value)}
					placeholder="Flight Class"
				/>
				<input
					type="text"
					name="passengers"
					value={passengers}
					onChange={(e) => setPassengers(e.target.value)}
					placeholder="Passengers"
				/>
				<button type="submit" name="search_but">
					Book
				</button>
			</form>

			{searchResults.length > 0 && (
				<div className="container-md mt-2">
					<h1 className="display-4 text-center text-light">
						FLIGHTS FROM: <br /> {depCity} to {arrCity}
					</h1>
					<table className="table table-striped table-bordered table-hover">
						<thead>
							<tr className="text-center">
								<th scope="col">Airline</th>
								<th scope="col">Departure</th>
								<th scope="col">Arrival</th>
								<th scope="col">Status</th>
								<th scope="col">Fare</th>
								<th scope="col">Buy</th>
							</tr>
						</thead>
						<tbody>
							{searchResults.map((row) => {
								const price = parseInt(row.Price) * parseInt(passengers)

								if (type === 'round') {
									price *= 2
								}

								if (fClass === 'B') {
									price += 0.5 * price
								}

								let status, alert
								if (row.status === '') {
									status = 'Not yet Departed'
									alert = 'alert-primary'
								} else if (row.status === 'dep') {
									status = 'Departed'
									alert = 'alert-info'
								} else if (row.status === 'issue') {
									status = 'Delayed'
									alert = 'alert-danger'
								} else if (row.status === 'arr') {
									status = 'Arrived'
									alert = 'alert-success'
								}

								return (
									<tr className="text-center" key={row.flight_id}>
										<td>{row.airline}</td>
										<td>{row.departure}</td>
										<td>{row.arrival}</td>
										<td>
											<div>
												<div
													className={`alert ${alert} text-center mb-0 pt-1 pb-1`}
													role="alert"
												>
													{status}
												</div>
											</div>
										</td>
										<td>$ {price}</td>
										{row.status === '' && (
											<td>
												<form method="post">
													<input
														name="flight_id"
														type="hidden"
														value={row.flight_id}
													/>
													<input name="type" type="hidden" value={type} />
													<input
														name="passengers"
														type="hidden"
														value={passengers}
													/>
													<input name="price" type="hidden" value={price} />
													<input
														name="ret_date"
														type="hidden"
														value={retDate}
													/>
													<input name="class" type="hidden" value={fClass} />
													<button
														name="book_but"
														type="submit"
														className="btn btn-success mt-0"
													>
														<div>
															<i className="fa fa-lg fa-check"></i>
														</div>
													</button>
												</form>
											</td>
										)}
										{row.status === 'dep' && <td>Not Available</td>}
										{!row.status && <td>Login to continue</td>}
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			)}
		</main>
	)
}

export default FlightInfo
