import { Link } from 'react-router-dom'
import { Burger } from '../index'

export function Navigation() {
	return (
		<nav className="navbar">
			<Burger />
			<Link to="/">
				<h1>UnNetConurbano</h1>
			</Link>
			<button>
				<Link to="login">Iniciar Sesion</Link>
			</button>
		</nav>
	)
}
