import React, { useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import './search-form.css'

const airports = ['kenya', 'Indonesia', 'Bengaluru (BLR)', 'Mumbai (BOM)']

const isDate = (date) => {
	return new Date(date) !== 'Invalid Date' && !isNaN(new Date(date))
}

const ErrorLabel = (props) => {
	return <label style={{ color: 'red' }}>{props.message}</label>
}

export const SearchForm = (props) => {
	const [isReturn, setFlightType] = useState(false)
	const [status, setFormValid] = useState({ isValid: false })
	const [form, setForm] = useState({
		origin: '',
		destination: '',
		passengers: 0,
		arrivalTime: '',
		departureTime: ''
	})

	//const isReturn = true;
	const handleSubmit = async (event) => {
		event.preventDefault()
		console.log('================FORM======================')
		console.log(form)
		const res = await fetch(
			'https://flight-booking-server-mu.vercel.app/flight/search',
			{
				method: 'POST',
				body: JSON.stringify(form),
				headers: { 'Content-Type': 'application/json' }
			}
		)
		const data = await res.json()
		if (data.flight) props.setFlights(data.flight.flights)
	}

	return (
		<div className="flight-search-container">
			<Card className="flight-search-card">
				<Card.Body>
					<Form className="search-form" onSubmit={handleSubmit}>
						<Form.Group className="flight-type-group">
							<Form.Check
								inline
								checked={!isReturn}
								type="radio"
								label="One way"
								name="flightType"
								id="formHorizontalRadios1"
								onChange={(e) => setFlightType(false)}
							/>
						</Form.Group>
						<Form.Group className="flight-type-group">
							<Form.Check
								inline
								checked={isReturn}
								type="radio"
								label="Round Trip"
								name="flightType"
								id="formHorizontalRadios2"
								onChange={(e) => setFlightType(true)}
							/>
						</Form.Group>

						<Form.Group controlId="formGridOrigin" className="form-group">
							<label htmlFor="from">From:</label>
							<Typeahead
								labelKey="origin"
								options={airports}
								id="origin"
								placeholder="Select Origin"
								onChange={(e) =>
									setForm((prev) => {
										return { ...prev, origin: e[0] }
									})
								}
							/>
							{status.origin && (
								<ErrorLabel message="Please enter a valid airport"></ErrorLabel>
							)}
						</Form.Group>

						<Form.Group controlId="formGridDestination" className="form-group">
							<label htmlFor="to">To:</label>
							<Typeahead
								labelKey="destination"
								options={airports}
								id="destination"
								placeholder="Select Destination"
								onChange={(e) =>
									setForm((prev) => {
										return { ...prev, destination: e[0] }
									})
								}
							/>
							{status.destination && (
								<ErrorLabel message="Please enter a valid airport but not same as origin"></ErrorLabel>
							)}
						</Form.Group>

						<Form.Group controlId="formGridDateOfDep" className="form-group">
							<Form.Label>Departure Date</Form.Label>
							<Form.Control
								type="date"
								name="dateOfDep"
								placeholder="yyyy-mm-dd"
								required
								onChange={(e) =>
									setForm((prev) => {
										return { ...prev, departureTime: e.target.value }
									})
								}
							/>
							{status.departureDate && (
								<ErrorLabel message="Please enter a valid departure date"></ErrorLabel>
							)}
						</Form.Group>

						{isReturn && (
							<Form.Group
								controlId="formGridDateOfReturn"
								className="form-group"
							>
								<Form.Label>Return Date</Form.Label>
								<Form.Control
									type="date"
									name="dateOfReturn"
									placeholder="yyyy-mm-dd"
									required
								/>
								{status.returnDate && (
									<ErrorLabel message="Please enter a valid return date"></ErrorLabel>
								)}
							</Form.Group>
						)}

						<Form.Group
							controlId="exampleForm.ControlSelect1"
							className="form-group"
						>
							<label htmlFor="departure">Passengers</label>
							<Form.Control
								as="select"
								name="numOfPassengers"
								placeholder="Number of Passengers"
							>
								<option>1 adult, Economy</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Form.Control>
						</Form.Group>
						<Form.Group
							controlId="exampleForm.ControlSelect1"
							className="form-group"
						>
							<label htmlFor="departure">Passengers</label>
							<Form.Control
								as="select"
								name="numOfPassengers"
								placeholder="Number of Passengers"
								onChange={(e) =>
									setForm((prev) => {
										return { ...prev, passengers: e.target.value }
									})
								}
							>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Form.Control>
						</Form.Group>

						<Button variant="primary" type="submit">
							Search
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</div>
	)
}

export default SearchForm
