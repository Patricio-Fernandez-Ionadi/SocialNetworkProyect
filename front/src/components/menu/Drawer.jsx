import { useSelector } from 'react-redux'

export function Drawer() {
	const applicationState = useSelector(({ application }) => application)
	const { menu_open } = applicationState

	return (
		<div className={`menu ${menu_open ? 'opened' : ''}`}>
			<p>menu</p>
		</div>
	)
}
