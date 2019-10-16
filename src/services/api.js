const API_URL = 'http://api.openweathermap.org/data/2.5/'
const API_ID = 'bd8326266ffeb1b662cf75fadf5dee2a'


export const getWheatherByCity = (cityName) => `${API_URL}weather?q=${cityName}&APPID=${API_ID}&&units=metric`

export const getForecastByCity = (cityName) => `${API_URL}forecast?q=${cityName}&APPID=${API_ID}&&units=metric`
