import { StyleSheet } from 'react-native';
import { theme } from '../../../globals/theme';

export const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        margin: 8,
        flex: 1,
    },
    title: {
        margin: 8,
        fontSize: 20,
    },
    inputCity: {
        margin: 8,
        paddingVertical: 10,
        paddingHorizontal: 5,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#e6e6e6',
    },
    btnContainer: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        backgroundColor: theme.colors.PRIMARY_COLOR,
        width: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    btnText: {
        color: '#ffffff',
        fontSize: 18,
    },
});
