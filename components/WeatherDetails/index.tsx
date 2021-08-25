import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../utils/index';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { IWeather } from '../../interfaces';
import { styles } from './styles';

const { PRIMARY_COLOR, BORDER_COLOR } = colors;

interface IWeatherDetailsProps {
    currentWeather: IWeather;
    unitsSystem: string;
}
const WeatherDetails: React.FC<IWeatherDetailsProps> = ({
    currentWeather: { wind_speed, feels_like, humidity, pressure },
    unitsSystem,
}) => {
    const windSpeed =
        unitsSystem === 'metric'
            ? `${Math.round(wind_speed)} m/s`
            : `${Math.round(wind_speed)} miles/h`;

    return (
        <View>
            <View style={styles.weatherDetails}>
                <View style={styles.weatherDetailsRow}>
                    <View
                        style={{
                            ...styles.weatherDetailsBox,
                            borderRightWidth: 1,
                            borderRightColor: BORDER_COLOR,
                        }}
                    >
                        <View style={styles.weatherDetailsRow}>
                            <FontAwesome5
                                name='temperature-low'
                                size={25}
                                color={PRIMARY_COLOR}
                            />
                            <View style={styles.weatherDetailsItems}>
                                <Text>Feels like:</Text>
                                <Text style={styles.textSecondary}>
                                    {feels_like}°
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.weatherDetailsBox}>
                        <View style={styles.weatherDetailsRow}>
                            <MaterialCommunityIcons
                                name='water'
                                size={30}
                                color={PRIMARY_COLOR}
                            />
                            <View style={styles.weatherDetailsItems}>
                                <Text>Humidity:</Text>
                                <Text style={styles.textSecondary}>
                                    {humidity}%
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        ...styles.weatherDetailsRow,
                        borderTopWidth: 1,
                        borderTopColor: BORDER_COLOR,
                    }}
                >
                    <View
                        style={{
                            ...styles.weatherDetailsBox,
                            borderRightWidth: 1,
                            borderRightColor: BORDER_COLOR,
                        }}
                    >
                        <View style={styles.weatherDetailsRow}>
                            <MaterialCommunityIcons
                                name='weather-windy'
                                size={30}
                                color={PRIMARY_COLOR}
                            />
                            <View style={styles.weatherDetailsItems}>
                                <Text>Wind speed:</Text>
                                <Text style={styles.textSecondary}>
                                    {windSpeed}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.weatherDetailsBox}>
                        <View style={styles.weatherDetailsRow}>
                            <MaterialCommunityIcons
                                name='speedometer'
                                size={30}
                                color={PRIMARY_COLOR}
                            />
                            <View style={styles.weatherDetailsItems}>
                                <Text>Pressure:</Text>
                                <Text style={styles.textSecondary}>
                                    {pressure}hPa
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default WeatherDetails;
