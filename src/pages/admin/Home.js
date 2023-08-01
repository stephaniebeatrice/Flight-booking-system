import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import { NotificationCard } from './components/NotificationCard'
import Sidebar from './components/Sidebar'

function Home({ Toggle }) {
	const data = [
		{
			title: 'Earnings',
			icon: 'bi bi-credit-card',
			color: 'bg-tertiary'
		},
		{
			title: 'Shecduled Flights',
			icon: 'bi bi-credit-card',
			color: 'bg-primary'
		},
		{
			title: 'Flight Hours',
			icon: 'bi bi-credit-card',
			color: 'bg-info'
		},
		{
			title: 'Employee matches',
			icon: 'bi bi-credit-card',
			color: 'bg-warning'
		}
	]
	const deleteBooking = () => {}
	return (
		<div>
			<div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				<Sidebar />
				<div className="h-screen flex-grow-1 overflow-y-lg-auto">
					<header className="bg-surface-primary border-bottom pt-6">
						<div className="container-fluid">
							<div className="mb-npx">
								<div className="row align-items-center">
									<div className="col-sm-6 col-12 mb-4 mb-sm-0">
										<h1 className="h2 mb-0 ls-tight">Flight Summary</h1>
									</div>
								</div>
							</div>
						</div>
					</header>
					<main className="py-6 bg-surface-secondary">
						<div className="container-fluid">
							<div className="row g-6 mb-6">
								{data.map((d) => {
									return (
										<div className="col-xl-3 col-sm-6 col-12">
											<div className="card shadow border-0">
												<div className="card-body">
													<div className="row">
														<div className="col">
															<span className="h6 font-semibold text-muted text-sm d-block mb-2">
																{d.title}
															</span>
															<span className="h3 font-bold mb-0">750.90</span>
														</div>
														<div className="col-auto">
															<div
																className={`icon icon-shape ${d.color} text-white text-lg rounded-circle`}
															>
																<i className={d.icon}></i>
															</div>
														</div>
													</div>
													<div className="mt-2 mb-0 text-sm">
														<span className="badge badge-pill bg-soft-success text-success me-2">
															<i className="bi bi-arrow-up me-1"></i>13%
														</span>
														<span className="text-nowrap text-xs text-muted">
															Since last month
														</span>
													</div>
												</div>
											</div>
										</div>
									)
								})}
							</div>
							<div className="card shadow border-0 mb-7">
								<div className="card-header">
									<h5 className="mb-0">Applications</h5>
								</div>
								<div className="table-responsive">
									<table className="table table-hover table-nowrap">
										<thead className="thead-light">
											<tr>
												<th scope="col">Name</th>
												<th scope="col">Flight Name</th>
												<th scope="col">origin</th>
												<th scope="col">destination</th>
												<th scope="col">Status</th>
												<th></th>
											</tr>
										</thead>
										<tbody>{TableRow(deleteBooking)}</tbody>
									</table>
								</div>
								<div className="card-footer border-0 py-5">
									{/* <span className="text-muted text-sm">Showing 10 items out of 250 results found</span> */}
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
		</div>
	)
}
export default Home

const TableRow = (deleteBooking) => {
	return (
		<tr>
			<td>
				<img
					alt="..."
					src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
					className="avatar avatar-sm rounded-circle me-2"
				/>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
				<a className="text-heading font-semibold" href="#">
					Robert Fox
				</a>
			</td>
			<td>Feb 15, 2021</td>
			<td>
				<p className="text-heading font-semibold">Dribbble</p>
			</td>
			<td>$3.500</td>
			<td>
				<span className="badge badge-lg badge-dot">
					<i className="bg-success"></i>Scheduled
				</span>
			</td>
			<td className="text-end">
				<button
					type="button"
					className="btn btn-sm btn-square btn-neutral text-danger-hover"
					onClick={deleteBooking}
				>
					<i className="bi bi-trash"></i>
				</button>
			</td>
		</tr>
	)
}
