import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import SearchFormButton from '../SearchFormButton';
import { ILocation, IWeather } from '../../../interfaces';
import { getUserLocation, requestInfoByLocation } from '../../../utils';
import { weatherActions } from '../../../store/weather';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const SearchForm: React.FC = () => {
    const [text, onChangeText] = useState('');
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

            requestInfoByLocation({ latitude, longitude }).then(
                (response: IWeather) => {
                    dispatch(weatherActions.setCurrentWeather(response));
                }
            );
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    const submitHandler = () => {};

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
                    onChangeText={onChangeText}
                    value={text}
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
