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
            justifyContent: 'center',
            width: '20%',
            height: 120,
            padding: 10,
            marginHorizontal: 8,
            marginBottom: 20,
            shadowOffset: {width: 10, height: 10},
            shadowColor: 'black',
            shadowOpacity: 3,
            elevation: 3,
            // background color must be set
            backgroundColor: '#fff',
          },
        ]}>
        {this.props.icon == 'qrcode-scan' ? (
          <Icon2
            name={this.props.icon}
            size={40}
            color={'orange'}
            style={{marginBottom: 0}}
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
