import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import CityForm from '../../components/Search/CityForm';
import Previous from '../../components/Search/Previous';

const SearchScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <CityForm />
            <Previous />
        </View>
    );
};

export default SearchScreen;
