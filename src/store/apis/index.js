import axios from 'axios'

const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const PARAMS = { units: 'metric', appid: '02efdd64bdc14b279bc91d9247db4722' }

const coordsApi = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(r => {
			resolve({
				lat: r.coords.latitude,
				lon: r.coords.longitude,
			})
		}, err => reject(err))
	})
}

const dailyApi = async () => {
	const params = { ...PARAMS, ...await coordsApi() }
	const { data } = await axios.get(DAILY_URL, { params })
	return data
}

export { coordsApi, dailyApi }