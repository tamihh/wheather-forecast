import { getWheatherByCity } from '../services/api'

export const getCityData = async cityName => {
    const url = getWheatherByCity(cityName);
    const res = await fetch(url);
    const json = await res.json();
    const data = json;

    return data;
};