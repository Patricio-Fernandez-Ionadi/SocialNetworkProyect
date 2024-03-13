import React from 'react'
import { Link } from 'react-router-dom'
import { Burger } from '../burgerMenu/Burger'

export function Navigation() {
	return (
		<>
			<nav className="navbar">
				<Burger />
				<h1>UnNetConurbano</h1>
				<button>
					<Link to="login">Iniciar Sesion</Link>
				</button>
			</nav>
		</>
	)
}
