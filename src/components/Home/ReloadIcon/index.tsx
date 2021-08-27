import React from 'react';
import { View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../globals/styles/theme';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { weatherActions } from '../../../store/weather';

const ReloadIcon: React.FC = () => {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';

    const getPreviousSearches = useSelector(
        (state: any) => state.previousSearches.weatherInfoList
    );
    const dispatch = useDispatch();

    const lastSearch = getPreviousSearches[0];

    const reloadHandler = () => {
        if (lastSearch) {
            dispatch(weatherActions.setCurrentWeather(lastSearch));
        }
    };

    return (
        <View style={styles.reloadIcon}>
            <Ionicons
                onPress={reloadHandler}
                name={reloadIconName}
                size={24}
                color={theme.colors.PRIMARY_COLOR}
            />
        </View>
    );
};

export default ReloadIcon;
