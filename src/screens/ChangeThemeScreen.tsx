import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title="Theme"/>

        <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                backgroundColor: '#5856D6',
                justifyContent: 'center',
                width: 150,
                height: 50,
                borderRadius: 20,
            }}
        >
            <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 22,
                }}
            >
                Light / Dark
            </Text>
        </TouchableOpacity>
    </View>
  );
};
