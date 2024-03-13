import { Route } from 'react-router-dom'
import { Router } from '../router'

import { Navigation } from '../components'

import '../styles/App.css'
import { Home, LoginForm } from '../pages'

function App() {
	return (
		<>
			<Navigation />
			<main className="main">
				<Router>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<LoginForm />} />
				</Router>
			</main>
		</>
	)
}

export default App
