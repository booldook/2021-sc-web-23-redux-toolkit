import { createAsyncThunk } from '@reduxjs/toolkit'
import { dailyApi } from '../apis'

const actGetDaily = createAsyncThunk('coords/actGetDaily', async (data, thunkAPI) => {
	const r = await dailyApi()
	console.log(r)
	return r
})

export { actGetDaily }