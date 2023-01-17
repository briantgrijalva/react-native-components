import React, { useContext } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);

  return (
    <View
        style={styles.container}
    >
        <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                marginBottom: 20,
                opacity: opacity,
                transform: [{
                    translateY: position,
                }],
            }}
        />

        <Button
            title="FadeIn"
            onPress={() => {
                fadeIn();
                startMovingPosition(-100, 800);
            }}
            color={colors.primary}
        />
        <Button
            title="FadeOut"
            onPress={() => fadeOut()}
            color={colors.primary}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150,
    },
});
