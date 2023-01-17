import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const ItemSeparator = () => {
    const { theme: { dividerColor } } = useContext(ThemeContext);
    return (
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                borderBottomWidth: 1,
                opacity: 0.4,
                marginVertical: 8,
                borderBottomColor: dividerColor,
            }}
        />
    );
};
