import * as Location from 'expo-location';

export const getUserLocation = async () => {
    try {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            return {
                errorMessage: 'Access to location is needed to run the app',
            };
        }

        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
        });

        const { latitude, longitude } = location.coords;

        return { latitude, longitude };
    } catch (error) {
        return {
            errorMessage: error.message,
        };
    }
};
