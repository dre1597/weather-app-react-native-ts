import React from 'react';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { styles } from './styles';

const SearchFormButton: React.FC<RectButtonProps> = ({ children, ...rest }) => {
    return (
        <RectButton style={styles.btn} {...rest}>
            {children}
        </RectButton>
    );
};

export default SearchFormButton;
