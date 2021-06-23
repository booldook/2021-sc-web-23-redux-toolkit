import { createSlice } from '@reduxjs/toolkit'
import { actGetCoords } from '../actions/coords-action'

const name = 'coords'

const initialState = {
	lat: null,
	lon: null,
	err: null
}

const reducers = {
	actRemoveCoords(state, action) {
		state.lat = null
		state.lon = null
	}
}

const extraReducers = builder => builder
.addCase(actGetCoords.pending, (state, action) => {
	state.lat = null
	state.lon = null
})
.addCase(actGetCoords.fulfilled, (state, action) => {
	state.lat = action.payload.lat
	state.lon = action.payload.lon
})
.addCase(actGetCoords.rejected, (state, action) => {
	state.lat = null
	state.lon = null
	state.err = action.payload
})



const coordsReducer = createSlice({ name, initialState, reducers, extraReducers })
export default coordsReducer