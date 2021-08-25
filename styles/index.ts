import { StyleSheet, Platform } from 'react-native';
import { colors } from '../utils/index';

export const reloadIconStyles = StyleSheet.create({
    reloadIcon: {
        position: 'absolute',
        top: 30,
        right: 20,
    },
});

export const unitsPickerStyles = StyleSheet.create({
    unitsSystem: {
        top: 0,
        ...Platform.select({
            ios: {
                top: -20,
            },
            android: {
                top: 30,
            },
        }),
        left: 20,
        position: 'absolute',
        height: 50,
        width: 100,
    },
});

export const weatherDetailsStyles = StyleSheet.create({
    weatherDetails: {
        margin: 15,
        borderWidth: 1,
        borderColor: colors.BORDER_COLOR,
        borderRadius: 10,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    textSecondary: {
        fontSize: 15,
        color: colors.SECONDARY_COLOR,
        fontWeight: '700',
        margin: 7,
    },
});

export const weatherInfoStyles = StyleSheet.create({
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
