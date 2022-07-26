import {Pressable, Text, View} from 'react-native';
import React, {Component} from 'react';

export class CustomButton extends Component {
  render() {
    const style =
      this.props.name == 'Discover Properties'
        ? this.props.style2
        : this.props.style1;
    return (
      <Pressable android_ripple={'orange'} style={[style]}>
        <Text
          style={[{color: 'orange', letterSpacing: 0.7}, this.props.textStyle]}>
          {this.props.text}
        </Text>
      </Pressable>
    );
  }
}

export default CustomButton;
