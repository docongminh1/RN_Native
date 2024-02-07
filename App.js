import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
    NativeModules,
    Platform,
    TouchableOpacity
} from 'react-native';

const testConnectNative = NativeModules.TestConnectNative;
const TestConnectNative = {
    sendMessage: (msg) => {
        console.log("🚀 ~ msg:", msg)
        testConnectNative.sendMessageToNative(msg);
    },

    sendCallback: (callback) => {
        testConnectNative.sendCallbackToNative(callback);
    },

    exitRN: (tag) => {
        if (Platform.OS === 'ios') {
            testConnectNative.dismissViewController(tag);
        } else {
            testConnectNative.finishActivity();
        }
    },

    goToNative: (tag) => {
        if (Platform.OS === 'ios') {
            testConnectNative.goToSecondViewController(tag);
        } else {
            testConnectNative.goToSecondActivity();
        }
    },
};

function App(props) {
    const [textNative, setTextNative] = useState(
        props.message_from_android_native,
    );
    const [textRN, setTextRN] = useState('');

    useEffect(() => {
        console.log('React Native is callingggg', props);
    }, []);

    return (
        <SafeAreaView>
            <View>
                <Text>{textNative}</Text>
                <View>
                    <TextInput
                        value={textRN}
                        onChangeText={(text) => {
                            setTextRN(text);
                        }}
                        style={{width: 400, height: 50, borderWidth: 1}}
                    />
                </View>
                <TouchableOpacity
                    style={styles.btnSend}
                    onPress={() => { TestConnectNative.sendMessage(textRN) }}>
                    <Text style={styles.textBtnSend}>
                        Send message to native
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnSend}
                    onPress={() => {
                        TestConnectNative.sendCallback(nativeMessage => {
                            console.log( `This log is from js code callback with native message: "${nativeMessage}"`);
                        })
                    }}>
                    <Text style={styles.textBtnSend}>
                        Send callback to native
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    textInput: {
        height: 50,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        margin: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    btnSend: {
        backgroundColor: 'gray',
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 5,
        alignSelf: 'center',
    },
    textBtnSend: {
        color: 'white',
    },
    textInfo: {
        color: 'black',
        alignSelf: 'center',
    },
});

export default App;
