import { theme } from '../../../globals/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    btn: {
        backgroundColor: theme.colors.PRIMARY_COLOR,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
});
