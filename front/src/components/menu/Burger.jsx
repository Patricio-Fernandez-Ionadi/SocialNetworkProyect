import { useDispatch, useSelector } from 'react-redux'
import { turnMenu } from '../../store'

export function Burger() {
	const dispatch = useDispatch()
	const applicationStates = useSelector(({ application }) => application)
	const { menu_open } = applicationStates

	const handleBurgerIcon = () => {
		dispatch(turnMenu(!menu_open))
	}

	return (
		<div className="burger" onClick={handleBurgerIcon}>
			<div
				className={
					menu_open
						? 'icon-menu__bar icon-menu__bar--left-arrow'
						: 'icon-menu__bar'
				}
			></div>
		</div>
	)
}
