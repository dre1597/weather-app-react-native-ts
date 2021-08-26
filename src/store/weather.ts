import { IWeather } from './../interfaces/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialWeatherState: IWeather = {
    temp: 0,
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    wind_speed: 0,
    weather_icon: '',
    weather_main: '',
    weather_description: '',
    name: '',
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialWeatherState,
    reducers: {
        setCurrentWeather(state: IWeather, action?: PayloadAction<IWeather>) {
            if (action && action.payload) {
                const newWeather = action.payload;
                state.temp = newWeather.temp;
                state.feels_like = newWeather.feels_like;
                state.humidity = newWeather.humidity;
                state.pressure = newWeather.pressure;
                state.wind_speed = newWeather.wind_speed;
                state.weather_icon = newWeather.weather_icon;
                state.weather_main = newWeather.weather_main;
                state.weather_description = newWeather.weather_description;
                state.name = newWeather.name;
            }
        },
    },
});

export const weatherActions = weatherSlice.actions;
export default weatherSlice.reducer;
