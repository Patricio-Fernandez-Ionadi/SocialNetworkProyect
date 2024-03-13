import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import { thunk } from 'redux-thunk'

// reducers
import { appReducer } from './reducers'

const reducer = combineReducers({
	application: appReducer,
	other: null,
})

export const store = createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
)
