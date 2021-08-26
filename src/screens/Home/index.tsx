import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import WeatherInfo from '../../components/Home/WeatherInfo';
import UnitsPicker from '../../components/Home/UnitsPicker';
import ReloadIcon from '../../components/Home/ReloadIcon';
import WeatherDetails from '../../components/Home/WeatherDetails';
import { theme } from '../../globals/styles/theme';
import { WEATHER_API_KEY } from '@env';
import { IWeather } from '../../interfaces';
import { styles } from './styles';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const HomeScreen: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const [currentWeather, setCurrentWeather] = useState<IWeather>();
    const [unitsSystem, setUnitsSystem] = useState('metric');

    useEffect(() => {
        load();
    }, [unitsSystem]);

    async function load() {
        setCurrentWeather(undefined);
        setErrorMessage('');
        try {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMessage('Access to location is needed to run the app');
                return;
            }

            const location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });

            const { latitude, longitude } = location.coords;

            const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

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
                setCurrentWeather({
                    temp,
                    feels_like,
                    humidity,
                    pressure,
                    wind_speed: speed,
                    weather_icon: icon,
                    weather_main: main,
                    weather_description: description,
                    name,
                });
            } else {
                setErrorMessage(result.message);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    if (currentWeather) {
        return (
            <View style={styles.container}>
                <StatusBar style='auto' />
                <View style={styles.main}>
                    <UnitsPicker
                        unitsSystem={unitsSystem}
                        setUnitsSystem={setUnitsSystem}
                    />
                    <ReloadIcon load={load} />
                    <WeatherInfo currentWeather={currentWeather} />
                </View>
                <WeatherDetails
                    currentWeather={currentWeather}
                    unitsSystem={unitsSystem}
                />
            </View>
        );
    } else if (errorMessage) {
        return (
            <View style={styles.container}>
                <ReloadIcon load={load} />
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
