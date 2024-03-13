import { Router } from '../router'

import { Navigation } from '../components'

import '../styles/App.css'

function App() {
	return (
		<>
			<Navigation />
			<main className="main">
				<Router />
			</main>
		</>
	)
}

export default App
