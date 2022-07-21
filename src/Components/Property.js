import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class Property extends Component {
  render() {
    return (
      <View style={{padding: 30}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
            Linked Properties
          </Text>
          <Text style={{color: 'orange'}}>View all</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
