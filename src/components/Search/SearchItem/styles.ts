import { StyleSheet } from 'react-native';
import { theme } from '../../../globals/theme';

export const styles = StyleSheet.create({
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
        borderLeftColor: theme.colors.PRIMARY_COLOR,
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
