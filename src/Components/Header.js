import {
  Text,
  StyleSheet,
  View,
  Image,
  PermissionsAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
        <TouchableWithoutFeedback style={{justifyContent: 'center'}}>
          <Image
            style={styles.logo}
            source={require('./../../assets/Images/BRHlogoexpanded.png')}
          />
        </TouchableWithoutFeedback>
        <View style={{alignItems: 'baseline', marginTop: 10}}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={20}
              style={{marginRight: 15}}
              color={'orange'}
            />
            <Ionicons name="menu-outline" size={30} color={'orange'} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: '10%',
    width: '50%',
    resizeMode: 'contain',
    marginLeft: 13
  },
  iconContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    padding: 18,
  },
});
