import { useState } from 'react'

export function LoginForm() {
	const [user, setUser] = useState('')
	const [pw, setPw] = useState('')

	const handleLogin = (e) => {
		e.preventDefault()

		// info para enviar al sv
		console.log({ user, pw })

		// antes de borrar hacer validacion para evitar mala UX
		setUser('')
		setPw('')
	}
	const handleUser = (e) => {
		setUser(e.target.value)
	}
	const handlePw = (e) => {
		setPw(e.target.value)
	}

	return (
		<>
			<div className="login_container">
				<h2>Bienvenido</h2>
				<form action="POST" onSubmit={handleLogin} className="login_form">
					<div className="login_inputs">
						<div>
							<input
								type="text"
								onChange={handleUser}
								value={user}
								placeholder="Usuario"
							/>
						</div>
						<div>
							<input
								type="password"
								onChange={handlePw}
								value={pw}
								placeholder="Contraseña"
							/>
						</div>
					</div>
					<button className="login_submit">Iniciar sesion</button>
				</form>
				{/* ------------------------------------------------------------------- */}
				<div className="login_helpers">
					<a href="#">¿Olvidaste la contraseña?</a>
					<a href="#">No tengo cuenta. (Registrarme)</a>
				</div>
			</div>
			<a href="#">Volver</a>
		</>
	)
}
