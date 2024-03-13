import { app_initialState } from './appInitialState.js'

export const appReducer = (state = app_initialState, action) => {
	switch (action.type) {
		case 'TURN_MENU': {
			return {
				...state,
				menu_open: action.payload,
			}
		}
		default:
			return state
	}
}
