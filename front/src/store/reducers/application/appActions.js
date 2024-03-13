export const turnMenu = (bool) => (dispatch) =>
	dispatch({
		type: 'TURN_MENU',
		payload: bool,
	})
