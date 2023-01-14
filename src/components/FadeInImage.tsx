import React, { useState } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';

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
                        color="#86b300"
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
