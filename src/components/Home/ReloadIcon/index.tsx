import React from 'react';
import { View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../../globals/styles/theme';
import { styles } from './styles';

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
                color={theme.colors.PRIMARY_COLOR}
            />
        </View>
    );
};

export default ReloadIcon;
