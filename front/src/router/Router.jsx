import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, LoginForm } from '../pages'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<LoginForm />} />
			<Route path="*" element={<p>Not found</p>} />
		</Routes>
	)
}
