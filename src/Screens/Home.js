import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import React, {Component} from 'react';
import Header from '../Components/Header';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, alignContent: 'flex-start'}}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
