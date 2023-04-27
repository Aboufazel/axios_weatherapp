import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://api.openweathermap.org'
})


export const handleGetOneDayWeather = (city) => {
    return api.get(`/data/2.5/weather?q=${city}&lang=fa&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`)
}

export const handleGetFiveDayWeather = (city) => {
    return api.get(`/data/2.5/forecast?q=${city}&lang=fa&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`)
}