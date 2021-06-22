import { combineReducers } from 'redux'
import coordsReducer from './coords-reducer'

const reducers = combineReducers({
	coords: coordsReducer.reducer,
})

export default reducers