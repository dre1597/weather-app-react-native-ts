import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import SearchItem from '../SearchItem';

const Previous: React.FC = () => {
    return (
        <View>
            <Text style={styles.prevSearchesTitle}>Previous Searches</Text>
            <SearchItem />
            <SearchItem />
            <SearchItem />
        </View>
    );
};

export default Previous;
