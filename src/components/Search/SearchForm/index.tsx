import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import SearchFormButton from '../SearchFormButton';
import { ILocation, IWeather } from '../../../interfaces';
import { fetchWeatherInfo, getUserLocation } from '../../../utils';
import { weatherActions } from '../../../store/weather';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { WEATHER_API_KEY } from '@env';
import { previousSearchesActions } from '../../../store/previousSearches';

const BASE_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const SearchForm: React.FC = () => {
    const [city, setCity] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();

    async function load() {
        setErrorMessage('');
        try {
            const userLocation: ILocation = await getUserLocation();
            if (userLocation.errorMessage) {
                setErrorMessage(userLocation.errorMessage);
                return;
            }
            const { latitude, longitude } = userLocation;

            const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`;
            fetchWeatherInfo(weatherUrl).then((response: IWeather) => {
                dispatch(weatherActions.setCurrentWeather(response));
                dispatch(previousSearchesActions.addSearch(response));
            });
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    async function loadInfoByCity() {
        setErrorMessage('');
        try {
            const weatherUrl = `${BASE_WEATHER_URL}q=${city}&units=metric&appid=${WEATHER_API_KEY}`;

            fetchWeatherInfo(weatherUrl).then((response: IWeather) => {
                dispatch(weatherActions.setCurrentWeather(response));
                dispatch(previousSearchesActions.addSearch(response));
            });
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    const submitHandler = () => {
        loadInfoByCity().then(() => navigation.navigate('Home'));
    };

    const getLocationHandler = () => {
        load().then(() => navigation.navigate('Home'));
    };

    return (
        <>
            <StatusBar style='auto' />
            <Text style={styles.title}>Type your location here:</Text>
            <View>
                <TextInput
                    style={styles.inputCity}
                    onChangeText={setCity}
                    value={city}
                    placeholder='Your city'
                    keyboardType='default'
                />
            </View>
            <View style={styles.btnContainer}>
                <SearchFormButton onPress={submitHandler}>
                    <Text style={{ color: '#ffffff', fontSize: 18 }}>
                        Submit
                    </Text>
                </SearchFormButton>
                <SearchFormButton onPress={getLocationHandler}>
                    <MaterialIcons
                        name='my-location'
                        size={24}
                        color='#ffffff'
                    />
                </SearchFormButton>
            </View>
        </>
    );
};

export default SearchForm;
