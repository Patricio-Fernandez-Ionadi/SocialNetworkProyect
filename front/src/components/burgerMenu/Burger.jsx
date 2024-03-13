import React, { useState } from 'react'

export function Burger() {
	const [openMenu, setOpenMenu] = useState(false)

	const handleBurgerIcon = () => {
		setOpenMenu(!openMenu)
	}

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
