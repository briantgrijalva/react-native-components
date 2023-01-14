import React, { useState } from 'react';
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const ModalScreen = () => {

    const [isVisble, setIsVisble] = useState(false);

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title="Modal Screen"/>

        <Button
            title="Abrir modal"
            onPress={() => setIsVisble(true)}
        />

        <Modal
            animationType="fade"
            visible={isVisble}
            transparent={true}
        >
            <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                    backgroundColor: 'white',
                    width: 200,
                    height: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.25,
                    elevation: 4,
                    borderRadius: 5,
                }}>
                    {/* <HeaderTitle title="Modal"/> */}
                    <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{fontSize: 20, fontWeight: 'bold'}}
                    >Modal</Text>
                    <Text
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{fontSize: 16, fontWeight: '300', marginBottom: 20}}
                    >Modal body</Text>
                    <Button
                        title="Close"
                        onPress={() => setIsVisble(false)}
                    />
                </View>
            </View>
        </Modal>
    </View>
  );
};
