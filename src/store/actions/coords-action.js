import { createAsyncThunk } from '@reduxjs/toolkit'
import { coordsApi } from '../apis'

const actGetCoords = createAsyncThunk('coords/actGetCoords', async (data, thunkAPI) => {
	// console.log(data)
	// console.log(thunkAPI)
	return await coordsApi()
})


export { actGetCoords }