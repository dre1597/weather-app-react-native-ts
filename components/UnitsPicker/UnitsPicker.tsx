import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './UnitsPickerStyles';

interface IUnitsPickerProps {
    unitsSystem: string;
    setUnitsSystem: React.Dispatch<React.SetStateAction<string>>;
}

const UnitsPicker: React.FC<IUnitsPickerProps> = ({
    unitsSystem,
    setUnitsSystem,
}) => {
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
