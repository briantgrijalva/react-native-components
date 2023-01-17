import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useState }  from 'react';
import { SafeAreaView, ImageSourcePropType, Text, Dimensions, View, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

const {width: screenWidth } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];

interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({ navigation }:Props) => {

    const {opacity, fadeIn} = useAnimation();

    const [activeIndex, setActiveIndex] = useState(0);

    const [isLastItem, setIsLastItem] = useState(false);

    const { theme: { colors } } = useContext(ThemeContext);

    const renderItem = (item: Slide) => {
        return (
            <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    flex: 1,
                    backgroundColor: colors.background,
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={item.img}
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center',
                    }}
                />
                <Text style={{...styles.title, color: colors.primary}}>{ item.title }</Text>
                <Text style={{...styles.subTitle, color: colors.text}}>{ item.desc }</Text>
            </View>
        );
    };

  return (
    <SafeAreaView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
            flex: 1,
            // backgroundColor: 'red',
            paddingTop: 50,
        }}
    >
        <Carousel
            // ref={(c) => { this._carousel = c; }}
            data={items}
            renderItem={ ({item}: any) => renderItem(item) }
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            layout="default"
            onSnapToItem={(index) => {
                setActiveIndex(index);
                if (index === items.length - 1) {
                    setIsLastItem(true);
                    fadeIn();
                }
            }}
        />

        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                // backgroundColor: 'lightblue',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                alignItems: 'center',
            }}
        >
            <Pagination
                dotsLength={items.length}
                activeDotIndex={activeIndex}
                // eslint-disable-next-line react-native/no-inline-styles
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    backgroundColor: colors.primary,
                }}
            />

            {
                isLastItem && (
                    <Animated.View
                        style={{
                            opacity,
                        }}
                    >

                        <TouchableOpacity
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{
                                flexDirection: 'row',
                                backgroundColor: colors.primary,
                                width: 140,
                                height: 50,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            activeOpacity={0.8}
                            onPress={() => {
                                navigation.navigate('HomeScreen');
                            }}
                        >
                            <Text
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    fontSize: 25,
                                    color: 'white',
                                }}
                            >
                                Start
                            </Text>
                            <Icon
                                name="chevron-forward-outline"
                                color="white"
                                size={30}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                )
            }
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5866D6',
    },
    subTitle: {
        fontSize: 16,
    },
});
