import { createAsyncThunk } from '@reduxjs/toolkit'
import { coordsApi } from '../apis'

const actGetCoords = createAsyncThunk('coords/actGetCoords', async (data, thunkAPI) => {
	const { coords } = await coordsApi()
	console.log(coords)
	return { lat : coords.latitude, lon: coords.longitude }
})


export { actGetCoords }