import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Props {
    unitsSystem: string;
    setUnitsSystem: React.Dispatch<React.SetStateAction<string>>;
}

const UnitsPicker: React.FC<Props> = ({ unitsSystem, setUnitsSystem }) => {
    return (
        <View style={styles.unitsSystem}>
            <Picker
                selectedValue={unitsSystem}
                onValueChange={setUnitsSystem}
                mode='dropdown'
                itemStyle={{ fontSize: 12 }}
            >
                <Picker.Item label='C°' value='metric' />
                <Picker.Item label='F°' value='imperial' />
            </Picker>
        </View>
    );
};

export default UnitsPicker;

const styles = StyleSheet.create({
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
