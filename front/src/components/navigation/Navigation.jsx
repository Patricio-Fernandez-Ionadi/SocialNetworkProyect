import { Link } from 'react-router-dom'
import { Burger } from '../index'

export function Navigation() {
	return (
		<nav className="navbar">
			<Burger />
			<h1 className="navbar_title">
				<Link to="/">UnNetConurbano</Link>
			</h1>
			<button>
				<Link to="login">Iniciar Sesion</Link>
			</button>
		</nav>
	)
}
