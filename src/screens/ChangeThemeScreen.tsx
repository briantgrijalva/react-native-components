import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext( ThemeContext );

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title="Theme"/>
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
        >
            <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                }}
                onPress={setLightTheme}
            >
                <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22,
                    }}
                >
                    Light
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                }}
                onPress={setDarkTheme}
            >
                <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 22,
                    }}
                >
                    Dark
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};
