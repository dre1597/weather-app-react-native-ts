export interface IWeather {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    wind_speed: number;
    weather_icon: string;
    weather_main: string;
    weather_description: string;
    name: string;
}

export interface IWeatherInfoList {
    weatherInfoList: IWeather[];
}

export interface ILocation {
    longitude?: number;
    latitude?: number;
    errorMessage?: string;
}
