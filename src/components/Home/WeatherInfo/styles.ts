import { StyleSheet } from 'react-native';
import { colors } from '../../../utils';

export const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },
    weatherDescription: {
        textTransform: 'capitalize',
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 40,
        color: colors.PRIMARY_COLOR,
    },
    textSecondary: {
        fontSize: 28,
        color: colors.SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 18,
    },
});
