import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

const CityForm: React.FC = () => {
    const [text, onChangeText] = useState('');
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
                ></TextInput>
            </View>
            <View style={styles.btnContainer}>
                <Pressable style={styles.btn} onPress={() => alert('pressed')}>
                    <Text style={styles.btnText}>Submit</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={() => alert('pressed')}>
                    <MaterialIcons
                        name='my-location'
                        size={24}
                        color='#ffffff'
                    />
                </Pressable>
            </View>
        </>
    );
};

export default CityForm;
