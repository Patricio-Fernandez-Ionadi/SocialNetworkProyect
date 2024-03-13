import React from 'react'
import { Routes, Route } from 'react-router-dom'

export function Router({ children }) {
	return (
		<Routes>
			{children}
			<Route path="*" element={<p>Not found</p>} />
		</Routes>
	)
}
