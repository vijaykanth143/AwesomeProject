import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {FilledTextField} from 'react-native-material-textfield';

export default class InputFields extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 20, marginTop: 15, position: 'relative'}}>
        <FilledTextField
          label={this.props.label}
          keyboardType="email-address"
          returnKeyType={'next'}
          blurOnSubmit={true}
          secureTextEntry={this.props.secure}
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
    );
  }
}

const styles = StyleSheet.create({});
