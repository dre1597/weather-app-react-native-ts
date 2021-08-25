import React from 'react';
import { View, Text, Image } from 'react-native';
import { IWeather } from '../interfaces';
import { weatherInfoStyles as styles } from '../styles';

interface IWeatherInfoProps {
    currentWeather: IWeather;
}

const WeatherInfo: React.FC<IWeatherInfoProps> = ({ currentWeather }) => {
    const iconUrl = `https://openweathermap.org/img/wn/${currentWeather.weather_icon}@4x.png`;
    return (
        <View style={styles.weatherInfo}>
            <Text>{currentWeather.name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={styles.textPrimary}>{currentWeather.main_temp}°</Text>
            <Text style={styles.weatherDescription}>
                {currentWeather.weather_description}
            </Text>
            <Text style={styles.textSecondary}>
                {currentWeather.weather_main}
            </Text>
        </View>
    );
};

export default WeatherInfo;
