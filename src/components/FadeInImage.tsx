import React, { useContext, useState } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}:Props) => {

    const { fadeIn, opacity } = useAnimation();

    const [ isLoading, setIsLoading ] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    };

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            {
                isLoading &&
                    <ActivityIndicator
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{position: 'absolute'}}
                        color={colors.primary}
                        size={30}
                    />
            }

            <Animated.Image
                source={{uri}}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity,
                }}
            />
        </View>
    );
};
