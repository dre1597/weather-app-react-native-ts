import * as Location from 'expo-location';
import { ILocation, IWeather } from '../interfaces';
import { WEATHER_API_KEY } from '@env';

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

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export const requestInfoByLocation = async (
    location: ILocation,
    unitsSystem: string = 'metric'
): Promise<IWeather> => {
    const weatherUrl = `${BASE_WEATHER_URL}lat=${location.latitude}&lon=${location.longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

    const response = await fetch(weatherUrl);

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
