import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import WeatherInfo from '../../components/Home/WeatherInfo';
import ReloadIcon from '../../components/Home/ReloadIcon';
import WeatherDetails from '../../components/Home/WeatherDetails';
import { theme } from '../../globals/styles/theme';
import { ILocation, IWeather } from '../../interfaces';
import { styles } from './styles';
import { fetchWeatherInfo, getUserLocation } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../../store/weather';
import SearchIcon from '../../components/Home/SearchIcon';
import { WEATHER_API_KEY } from '@env';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const HomeScreen: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const [currentWeather, setCurrentWeather] = useState<IWeather>();
    const getCurrentWeather = useSelector((state: any) => state.weather);
    const currentWeatherRef = useRef<IWeather | undefined>();
    const dispatch = useDispatch();

    useEffect(() => {
        if (getCurrentWeather) {
            currentWeatherRef.current = getCurrentWeather;
        }
        if (currentWeatherRef.current) {
            setCurrentWeather(currentWeatherRef.current);
        }
    }, [getCurrentWeather]);

    if (currentWeather && currentWeather.name !== '') {
        return (
            <View style={styles.container}>
                <StatusBar style='auto' />
                <View style={styles.main}>
                    <SearchIcon />
                    <ReloadIcon />
                    <WeatherInfo currentWeather={currentWeather} />
                </View>
                <WeatherDetails currentWeather={currentWeather} />
            </View>
        );
    } else if (currentWeather && currentWeather.name === '') {
        return (
            <View style={styles.container}>
                <SearchIcon />
                <ReloadIcon />
                <Text style={{ textAlign: 'center' }}>
                    Please search for a location
                </Text>
                <StatusBar style='auto' />
            </View>
        );
    } else if (errorMessage) {
        return (
            <View style={styles.container}>
                <SearchIcon />
                <ReloadIcon />
                <Text style={{ textAlign: 'center' }}>{errorMessage}</Text>
                <StatusBar style='auto' />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>{errorMessage}</Text>
                <ActivityIndicator
                    size='large'
                    color={theme.colors.PRIMARY_COLOR}
                />
            </View>
        );
    }
};

export default HomeScreen;
