import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../utils';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const SearchScreen: React.FC = () => {
    const [text, onChangeText] = useState('');
    return (
        <View style={styles.container}>
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
            <View>
                <Text style={styles.prevSearchesTitle}>Previous Searches</Text>
                <Pressable>
                    <View style={styles.prevSearchesItemContainer}>
                        <View style={styles.prevSearchesItemRight}>
                            <Text style={styles.prevSearchesCity}>
                                Rio de Janeiro
                            </Text>
                            <Text>RJ, Brazil</Text>
                        </View>
                        <View>
                            <Text>
                                <AntDesign
                                    name='arrowright'
                                    size={24}
                                    color={colors.PRIMARY_COLOR}
                                />
                            </Text>
                        </View>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.prevSearchesItemContainer}>
                        <View style={styles.prevSearchesItemRight}>
                            <Text style={styles.prevSearchesCity}>
                                Rio de Janeiro
                            </Text>
                            <Text>RJ, Brazil</Text>
                        </View>
                        <View>
                            <Text>
                                <AntDesign
                                    name='arrowright'
                                    size={24}
                                    color={colors.PRIMARY_COLOR}
                                />
                            </Text>
                        </View>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={styles.prevSearchesItemContainer}>
                        <View style={styles.prevSearchesItemRight}>
                            <Text style={styles.prevSearchesCity}>
                                Rio de Janeiro
                            </Text>
                            <Text>RJ, Brazil</Text>
                        </View>
                        <View>
                            <Text>
                                <AntDesign
                                    name='arrowright'
                                    size={24}
                                    color={colors.PRIMARY_COLOR}
                                />
                            </Text>
                        </View>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default SearchScreen;
