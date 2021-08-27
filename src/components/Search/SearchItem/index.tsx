import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../../globals/styles/theme';
import { AntDesign } from '@expo/vector-icons';
import { IWeather } from '../../../interfaces';
import { weatherActions } from '../../../store/weather';
import { useDispatch } from 'react-redux';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type Props = {
    item: IWeather;
};

const SearchItem: React.FC<Props> = ({ item }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const pressItemHandler = () => {
        dispatch(weatherActions.setCurrentWeather(item));
        navigation.navigate('Home');
    };

    return (
        <View style={styles.prevSearchesItemContainer}>
            <View style={styles.prevSearchesItemRight}>
                <Text style={styles.prevSearchesCity}>{item.name}</Text>
                <Text>{item.temp}°</Text>
            </View>
            <View>
                <RectButton onPress={pressItemHandler}>
                    <AntDesign
                        name='arrowright'
                        size={24}
                        color={theme.colors.PRIMARY_COLOR}
                    />
                </RectButton>
            </View>
        </View>
    );
};

export default SearchItem;
