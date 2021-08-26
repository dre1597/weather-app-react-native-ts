import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

import SearchFormButton from '../SearchFormButton';

const SearchForm: React.FC = () => {
    const [text, onChangeText] = useState('');

    const submitHandler = () => {};

    const getLocationHandler = () => {};

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
