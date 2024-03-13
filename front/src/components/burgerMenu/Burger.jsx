import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { turnMenu } from '../../store'

export function Burger() {
	const [openMenu, setOpenMenu] = useState(false)

	const dispatch = useDispatch()
	const applicationStates = useSelector(({ application }) => application)

	const handleBurgerIcon = () => {
		setOpenMenu(!openMenu)
		dispatch(turnMenu(!openMenu))
	}
	console.log(applicationStates)

	return (
		<div className="burger" onClick={handleBurgerIcon}>
			<div
				className={
					openMenu
						? 'icon-menu__bar icon-menu__bar--left-arrow'
						: 'icon-menu__bar'
				}
			></div>
		</div>
	)
}
