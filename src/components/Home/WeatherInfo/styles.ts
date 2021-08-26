import { StyleSheet } from 'react-native';
import { theme } from '../../../globals/theme';

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
        color: theme.colors.PRIMARY_COLOR,
    },
    textSecondary: {
        fontSize: 28,
        color: theme.colors.SECONDARY_COLOR,
        fontWeight: '500',
        marginTop: 18,
    },
});
