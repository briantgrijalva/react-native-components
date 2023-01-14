import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface Props {
    title: String;
}

export const HeaderTitle = ({ title }: Props) => {

    const { top } = useSafeAreaInsets();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ marginTop: top + 20, marginBottom: 20 }}>
    <Text style={ styles.title }>{ title }</Text>
</View>
  );
};
