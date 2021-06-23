import { createSlice } from '@reduxjs/toolkit'
import { actGetDaily } from '../actions/daily-action'

const name = 'daily'

const initialState = {
	data: null,
	err: null
}

const reducers = {
	
}

const extraReducers = builder => builder
.addCase(actGetDaily.pending, (state, action) => {
	state.data = null
})
.addCase(actGetDaily.fulfilled, (state, action) => {
	state.data = action.payload
})
.addCase(actGetDaily.rejected, (state, action) => {
	state.err = action.payload
})



const dailyReducer = createSlice({ name, initialState, reducers, extraReducers })
export default dailyReducer