import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Shadow} from 'react-native-shadow-2';
export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.icon);
    return (
      <View
        style={[
          {
            alignItems: 'center',
            width: '20%',
            padding: 10,
            marginHorizontal: 10,
            marginBottom: 20,
            shadowColor: 'black',
            elevation: 10,
          },
        ]}>
        {this.props.icon == 'qrcode-scan' ? (
          <Icon2
            name={this.props.icon}
            size={40}
            color={'orange'}
            style={{marginBottom: 5}}
          />
        ) : (
          <Icon name={this.props.icon} size={40} color={'orange'} />
        )}

        <Text style={{color: 'black', textAlign: 'center', fontSize: 12}}>
          {this.props.text}
        </Text>
        <Text style={{color: 'black', textAlign: 'center', fontSize: 12}}>
          {this.props.qr}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
