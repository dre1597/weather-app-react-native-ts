import { StyleSheet } from 'react-native';
import { colors } from '../../utils';

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
        backgroundColor: colors.PRIMARY_COLOR,
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
    prevSearchesTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 8,
    },
    prevSearchesItemContainer: {
        margin: 4,
        borderRadius: 10,
        backgroundColor: '#dbdbdb',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    prevSearchesItemRight: {
        borderLeftColor: colors.PRIMARY_COLOR,
        borderLeftWidth: 3,
        paddingHorizontal: 10,
    },
    prevSearchesCity: {
        fontWeight: 'bold',
    },
    prevSearchesText: {
        fontSize: 16,
    },
});
