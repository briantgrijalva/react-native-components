import React from 'react';
import { View } from 'react-native';

export const ItemSeparator = () => {
    return (
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                borderBottomWidth: 1,
                opacity: 0.4,
                marginVertical: 8,
            }}
        />
    );
};
