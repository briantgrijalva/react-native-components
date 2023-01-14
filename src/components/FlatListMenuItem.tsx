import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem: MenuItem;
}

export const FlatListMenuItem = ( { menuItem }: Props ) => {

    const navigation = useNavigation<any>();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color="#07c5c5"
                    size={ 24 }
                />
                <Text style={styles.itemText}>
                    {menuItem.name}
                </Text>
                <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{flex: 1}}
                />
                <Icon
                    name="chevron-forward-outline"
                    color="#07c5c5"
                    size={ 24 }
                    // style={styles.arrowIcon}
                />
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 18,
    },
    arrowIcon: {
        left: 200,
    },
});
