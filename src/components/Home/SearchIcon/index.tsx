import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../globals/styles/theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

const SearchIcon: React.FC = () => {
    const navigation = useNavigation();

    const searchInHandler = () => {
        navigation.navigate('Search');
    };
    return (
        <View style={styles.searchIcon}>
            <Ionicons
                onPress={searchInHandler}
                name='search'
                size={24}
                color={theme.colors.PRIMARY_COLOR}
            />
        </View>
    );
};

export default SearchIcon;
