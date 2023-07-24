import React from 'react'
import Nav from './Navbar'

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
					{/* <div className="col-md-3 p-1">
						<div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
							 <div>
								<h3 className="fs-2">500</h3>
								<p className="fs-5"></p>
							</div>
							<i className="bi bi-graph-up-arrow p-3 fs-1"></i> 
						</div>
					</div> */}
				</div>
			</div>
			<table class="table caption-top bg-white rounded mt-2">
				<thead>
					<tr>
						<th scope="col">Flight ID</th>
						<th scope="col">Departure City</th>
						<th scope="col">Departure Time</th>
						<th scope="col">Arrival City</th>
						<th scope="col">Arrival Time</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">F123</th>

						<td>Nairobi</td>
						<td>0900hrs</td>
						<td>Mombasa</td>
						<td>1000hrs</td>
					</tr>
					<tr>
						<th scope="row">F456</th>
						<td>Nairobi</td>
						<td>0900hrs</td>
						<td>Eldoret</td>
						<td>0945hrs</td>
					</tr>
					<tr>
						<th scope="row">F789</th>
						<td>Nairobi</td>
						<td>1100hrs</td>
						<td>Arusha</td>
						<td>1230hrs</td>
					</tr>
					<tr>
						<th scope="row">F58</th>
						<td>Nairobi</td>
						<td>1300hrs</td>
						<td>Addis Ababa</td>
						<td>1500hrs</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}
export default Home
