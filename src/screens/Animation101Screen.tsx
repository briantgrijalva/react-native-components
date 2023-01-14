import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();

  return (
    <View
        style={styles.container}
    >
        <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                ...styles.purpleBox,
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
        />
        <Button
            title="FadeOut"
            onPress={() => fadeOut()}
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
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
    },
});
