import { combineReducers } from 'redux'
import coordsReducer from './coords-reducer'
import dailyReducer from './daily-reducer'

const reducers = combineReducers({
	coords: coordsReducer.reducer,
	daily: dailyReducer.reducer,
})

export default reducers