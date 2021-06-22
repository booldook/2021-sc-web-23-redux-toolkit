import axios from 'axios'

const coordsApi = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(r => resolve(r), err => reject(err))
	})
}

const dailyApi = async () => {
	const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
	const PARAMS = { units: 'metric', appid: '02efdd64bdc14b279bc91d9247db4722' }
	const params = { ...PARAMS, ...await coordsApi() }
	const { data } = await axios.get(DAILY_URL, { params })
	return data
}

export { coordsApi, dailyApi }