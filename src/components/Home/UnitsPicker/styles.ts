import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    unitsSystem: {
        top: 0,
        ...Platform.select({
            ios: {
                top: -20,
            },
            android: {
                top: 50,
            },
        }),
        left: 20,
        position: 'absolute',
        height: 50,
        width: 100,
    },
});
