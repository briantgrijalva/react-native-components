import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {

    const { top } = useSafeAreaInsets();

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<String>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('We finished refreshing');
            setRefreshing(false);
            setData('Hello world!');
        }, 3500);
    };

  return (
    <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
            marginTop: refreshing ? top : 0,
        }}
        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={10}
                progressBackgroundColor="#86b300"
                colors={['white', 'grey', 'black']}
                // style={{backgroundColor: '#86b300'}}
                // tintColor="white"
            />
        }
    >
        <View style={styles.globalMargin}>
            <HeaderTitle title="Pull to refresh"/>

            {
                data && <HeaderTitle title={data}/>
            }

        </View>
    </ScrollView>
  );
};
