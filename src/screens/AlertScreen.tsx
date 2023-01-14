import React from 'react';
import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import prompt from 'react-native-prompt-android';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            'Title',
            'This is the alert message',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'destructive',
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            {
              cancelable: true,
              onDismiss: () => console.log('On Dismiss'),
            }
        );
    };

    const showPrompt = () => {
        // only IOS
        // Alert.prompt(
        //     'Are you sure?',
        //     'This action cannot be undone',
        //     ( value: string ) => console.log('info', value),
        //     'plain-text',
        //     'Hello world',
        //     'number-pad'
        // );

        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder',
            }
        );
    };

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title="Alerts"/>

        <Button
            title="Show Alert"
            onPress={showAlert}
        />

        <View
        // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 10}}
        />

        <Button
            title="Show Prompt"
            onPress={showPrompt}
        />
    </View>
  );
};
