import React from 'react';
import { StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     isSuscribed: false,
    // });

    // const onChange = (value: string, field: string) => {
    //     setForm({
    //         ...form,
    //         [field]: value,
    //     });

    // };

    const {form, onChange, isSuscribed} = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false,
    });

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <ScrollView>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View
                    style={styles.globalMargin}
                >
                    <HeaderTitle title="TextInputs"/>

                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder="Write your name here"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, 'name')}
                    />
                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder="Write your email here"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType="email-address"
                        keyboardAppearance="dark"
                    />

                    {/* Ejemplo */}
                    <View style={stylesScreen.switchRow}>
                        <Text style={stylesScreen.switchText}>Subscribe</Text>
                        <CustomSwitch isOn={isSuscribed} onChange={ (value) => onChange(value, 'isSuscribed' )}/>
                    </View>
                    <HeaderTitle title={JSON.stringify( form, null, 3 )}/>

                    <HeaderTitle title={JSON.stringify( form, null, 3 )}/>

                    <TextInput
                        style={stylesScreen.inputStyle}
                        placeholder="Write your phone here"
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType="number-pad"
                    />

                    <View
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{height: 100}}
                    />
                </View>
            </TouchableWithoutFeedback>

        </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: '#86b300',
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    switchText: {
        fontSize: 25,
    },
});
