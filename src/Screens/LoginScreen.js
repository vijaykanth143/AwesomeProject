import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Button,
} from 'react-native';
import React, {Component} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {FilledTextField} from 'react-native-material-textfield';
const data = [
  {
    label: 'username',
  },
  {
    label: 'Password',
    secure: true,
  },
];
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.pwdRef = React.createRef();
    // this.unsubscribe;

    // this.closeFingerPrintModal = this.closeFingerPrintModal.bind(this);
  }

  resetFormElements = () => {
    this.emailRef.setValue('');
    this.pwdRef.setValue('');
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          keyboardShouldPersistTaps="always">
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignContent: 'center',
              justifyContent: 'center',
              padding: '5%',
              borderRadius: 2,
              height: '100%',
            }}>
            <View style={{flex: 1}}>
              <View
                style={{
                  flex: 2,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Image
                  style={styles.logo}
                  source={require('./../../assets/Images/BRHlogoexpanded.png')}
                />
              </View>
              <View style={{flex: 4, justifyContent: 'center'}}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'contain',
                  }}
                  source={require('./../../assets/Images/signinPageDoll.png')}
                />
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 15,
                position: 'relative',
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
                  Hello
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 15,
                position: 'relative',
              }}>
              <FilledTextField
                label={'Username'}
                keyboardType="email-address"
                returnKeyType={'next'}
                ref={input => {
                  this.emailRef = input;
                }}
                onSubmitEditing={() => {
                  this.pwdRef.focus();
                }}
                blurOnSubmit={true}
                inputContainerStyle={[
                  {backgroundColor: '#F5F5F5'},
                  {backgroundColor: 'white'},
                ]}
                tintColor={'orange'}
                labelTextStyle={{fontFamily: 'Montserrat-Regular'}}
                titleTextStyle={{fontFamily: 'Montserrat-SemiBold'}}
                affixTextStyle={{fontFamily: 'Montserrat-SemiBold'}}
                contentInset={{
                  top: 12,
                  label: 10,
                  input: 12,
                }}
              />
            </View>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 15,
                position: 'relative',
              }}>
              <FilledTextField
                label={'Password'}
                blurOnSubmit={true}
                inputContainerStyle={[
                  {backgroundColor: '#F5F5F5'},
                  {backgroundColor: 'white'},
                ]}
                ref={input => {
                  this.pwdRef = input;
                }}
                onSubmitEditing={() => {
                  this.pwdRef.focus();
                }}
                tintColor={'orange'}
                labelTextStyle={{fontFamily: 'Montserrat-Regular'}}
                titleTextStyle={{fontFamily: 'Montserrat-SemiBold'}}
                affixTextStyle={{fontFamily: 'Montserrat-SemiBold'}}
                contentInset={{
                  top: 12,
                  label: 10,
                  input: 12,
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  right: 15,
                  top: 20,
                  color: 'orange',
                }}>
                Forgot Password?
              </Text>
            </View>
          </View>
          <View>
            <Button title="sign in" color={'orange'} style={{height: '10%'}} />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: '60%',
    width: '80%',
    resizeMode: 'contain',
  },
});
