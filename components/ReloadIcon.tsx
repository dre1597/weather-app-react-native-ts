import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../utils/index';

interface IReloadIconProps {
    load: () => Promise<void>;
}

const ReloadIcon: React.FC<IReloadIconProps> = ({ load }) => {
    const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';

    return (
        <View style={styles.reloadIcon}>
            <Ionicons
                onPress={load}
                name={reloadIconName}
                size={24}
                color={colors.PRIMARY_COLOR}
            />
        </View>
    );
};

export default ReloadIcon;

const styles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 30,
        right: 20,
    },
});
