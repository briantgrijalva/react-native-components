import React, { useContext, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    const renderItems = (item: number) => {
        return (
            // <Image
            //     source={{uri: `https://picsum.photos/id/${item}/500/400`}}
            //     // eslint-disable-next-line react-native/no-inline-styles
            //     style={{
            //         width: '100%',
            //         height: 400,
            //     }}
            // />
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/500/400`}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
        );
    };

    const loadMoreItems = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);

    };

    const { theme: { colors } } = useContext(ThemeContext);
  return (
    <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
            flex: 1,
            backgroundColor: colors.background,
        }}
    >
        <FlatList
            data={numbers}
            keyExtractor={(item) => item.toString()}
            renderItem={({item}) => renderItems(item)}

            ListHeaderComponent={() => (
                <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        marginHorizontal: 20,
                    }}
                >
                    <HeaderTitle title="Infinite Scroll"/>
                </View>
            )}

            onEndReached={() => loadMoreItems()}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => (
                <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <ActivityIndicator size={28} color={colors.primary}/>
                </View>
            )}
        />
    </View>
  );
};

// const styles = StyleSheet.create({
//     textItem: {
//         backgroundColor: 'green',
//         height: 150,
//     },
// });
