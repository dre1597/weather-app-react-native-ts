import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../utils';
import { AntDesign } from '@expo/vector-icons';

const SearchItem: React.FC = () => {
    return (
        <Pressable>
            <View style={styles.prevSearchesItemContainer}>
                <View style={styles.prevSearchesItemRight}>
                    <Text style={styles.prevSearchesCity}>Rio de Janeiro</Text>
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
    );
};

export default SearchItem;
