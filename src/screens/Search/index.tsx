import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import SearchForm from '../../components/Search/SearchForm';
import Previous from '../../components/Search/Previous';

const SearchScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <SearchForm />
            <Previous />
        </View>
    );
};

export default SearchScreen;
