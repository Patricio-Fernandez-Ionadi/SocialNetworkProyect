import { Router } from '../router'
import { Navigation } from '../components'

import '../styles/App.css'
import { Drawer } from '../components/menu'

function App() {
	return (
		<>
			<Navigation />
			<Drawer />
			<main className="main">
				<Router />
			</main>
		</>
	)
}

export default App
