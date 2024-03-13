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
			<form action="POST" onSubmit={handleLogin}>
				<div>
					<label htmlFor="user">Usuario</label>
					<input type="text" id="user" onChange={handleUser} value={user} />
				</div>
				<div>
					<label htmlFor="password">Contraseña</label>
					<input type="password" id="password" onChange={handlePw} value={pw} />
				</div>
				<div>
					<button onClick={handleLogin}>Iniciar sesion</button>
				</div>
			</form>
			{/* ------------------------------------------------------------------- */}
			<div>
				<a href="#">¿Olvidaste la contraseña?</a>
				<span> - </span>
				<a href="#">No tengo cuenta. (Registrarme)</a>
			</div>
		</>
	)
}
