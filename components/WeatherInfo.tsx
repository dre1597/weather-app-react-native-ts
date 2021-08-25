import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { IWeather } from '../interfaces';
import { colors } from '../utils/index';

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

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

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },
    weatherDescription: {
        textTransform: 'capitalize',
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR,
    },
    textSecondary: {
        fontSize: 28,
        color: SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 18,
    },
});
