import React from 'react'
import { Link } from 'react-router-dom'
import { Burger } from '../index'
import { useSelector } from 'react-redux'

export function Navigation() {
	const applicationState = useSelector(({ application }) => application)
	const { menu_open } = applicationState

	return (
		<>
			<nav className="navbar">
				<Burger />
				<Link to="/">
					<h1>UnNetConurbano</h1>
				</Link>
				<button>
					<Link to="login">Iniciar Sesion</Link>
				</button>
			</nav>
			<div className={`menu ${menu_open ? 'opened' : ''}`}>
				<p>menu</p>
			</div>
		</>
	)
}
