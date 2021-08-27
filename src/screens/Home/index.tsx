import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import WeatherInfo from '../../components/Home/WeatherInfo';
import UnitsPicker from '../../components/Home/UnitsPicker';
import ReloadIcon from '../../components/Home/ReloadIcon';
import WeatherDetails from '../../components/Home/WeatherDetails';
import { theme } from '../../globals/styles/theme';
import { ILocation, IWeather } from '../../interfaces';
import { styles } from './styles';
import { getUserLocation, requestInfoByLocation } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../../store/weather';
import SearchIcon from '../../components/Home/SearchIcon';

const HomeScreen: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState<string>();
    const [currentWeather, setCurrentWeather] = useState<IWeather>();
    const [unitsSystem, setUnitsSystem] = useState('metric');
    const getCurrentWeather = useSelector((state: any) => state.weather);
    const currentWeatherRef = useRef<IWeather | undefined>();
    const dispatch = useDispatch();

    useEffect(() => {
        load();
    }, [unitsSystem, getCurrentWeather]);

    useEffect(() => {
        if (getCurrentWeather) {
            currentWeatherRef.current = getCurrentWeather;
        }
        if (currentWeatherRef.current) {
            setCurrentWeather(currentWeatherRef.current);
        }
    });

    async function load() {
        setErrorMessage('');
        try {
            const userLocation: ILocation = await getUserLocation();
            if (userLocation.errorMessage) {
                setErrorMessage(userLocation.errorMessage);
                return;
            }
            const { latitude, longitude } = userLocation;

            requestInfoByLocation({ latitude, longitude }, unitsSystem).then(
                (response: IWeather) => {
                    dispatch(weatherActions.setCurrentWeather(response));
                }
            );
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
                    <SearchIcon />
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
