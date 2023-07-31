import React from 'react'
import Nav from './components/Navbar'
import './home.css'

function Home({ Toggle }) {
	return (
		<div className="px-3">
			<Nav Toggle={Toggle} />
			<div className="container-fluid">
				<div className="row g-3 my-2">
					<div className="col-md-3 p-1">
						<div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
							<div>
								<h3 className="fs-2">23</h3>
								<p className="fs-5">Scheduled Flights</p>
							</div>
							<i className="bi bi-airplane p-3 fs-1"></i>
						</div>
					</div>
					<div className="col-md-3 p-1">
						<div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
							<div>
								{' '}
								<h3 className="fs-2">2450</h3>
								<p className="fs-5">Issued Tickets</p>
							</div>
							<i className="bi bi-ticket-detailed p-3 fs-1"></i>
						</div>
					</div>
					<div className="col-md-3 p-1">
						<div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
							<div>
								<h3 className="fs-2">2250</h3>
								<p className="fs-5">Passengers</p>
							</div>
							<i className="bi bi-people-fill p-3 fs-1"></i>
						</div>
					</div>
				</div>
			</div>
			<h3 className="color-white">Notifications</h3>
			<table class="table caption-top bg-white rounded mt-2">
				{/* <thead>
					<tr>
						<th scope="col">Flight ID</th>
						<th scope="col">Departure City</th>
						<th scope="col">Departure Time</th>
						<th scope="col">Arrival City</th>
						<th scope="col">Arrival Time</th>
					</tr>
				</thead> */}
				<tbody>
					<tr>
						<td>
							<b>Jane Doe</b>
						</td>
						<td>
							<button className="button">View</button>
							<button className="button">Edit</button>
							<button className="button">Delete</button>
						</td>
					</tr>
					<tr>
						<td>
							<b>Mohammed Ali</b>
						</td>
						<td>
							<button className="button">View</button>
							<button className="button">Edit</button>
							<button className="button">Delete</button>
						</td>
					</tr>
					<tr>
						<td>
							<b>John Doe</b>
						</td>
						<td>
							<button className="button">View</button>
							<button className="button">Edit</button>
							<button className="button">Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
export default Home
