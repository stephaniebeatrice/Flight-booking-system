import React, { useState } from 'react'
import './login.css'

const LoginForm = () => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: ''
	})

	const handleChange = (e) => {
		setLoginData({
			...loginData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Perform login logic here
		console.log(loginData)
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={loginData.email}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type="password"
					name="password"
					value={loginData.password}
					onChange={handleChange}
					required
				/>
			</div>
			<button type="submit">Login</button>
		</form>
	)
}

export default LoginForm
