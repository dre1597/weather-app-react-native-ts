import * as Location from 'expo-location';
import { IWeather } from '../interfaces';

export const getUserLocation = async () => {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            return {
                errorMessage: 'Access to location is needed to run the app',
            };
        }

        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
        });

        const { latitude, longitude } = location.coords;

        return { latitude, longitude };
    } catch (error) {
        return {
            errorMessage: error.message,
        };
    }
};

export const fetchWeatherInfo = async (url: string): Promise<IWeather> => {
    const response = await fetch(url);

    const result = await response.json();

    if (response.ok) {
        const {
            main: { feels_like, temp, humidity, pressure },
            wind: { speed },
            name,
            weather: [details],
        } = result;

        const { icon, main, description } = details;

        return {
            temp,
            feels_like,
            humidity,
            pressure,
            wind_speed: speed,
            weather_icon: icon,
            weather_main: main,
            weather_description: description,
            name,
        };
    } else {
        if (result.message) {
            throw new Error(result.message);
        }
        throw new Error('Error on fetch data');
    }
};
