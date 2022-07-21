import {
  Text,
  StyleSheet,
  View,
  Image,
  PermissionsAndroid,
  TouchableWithoutFeedback,
  TouchableOpacity,
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
        <Image
          style={styles.logo}
          source={require('./../../assets/Images/BRHlogoexpanded.png')}
        />

        <View style={{alignItems: 'baseline', marginTop: 10}}>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={20}
                style={{marginRight: 15}}
                color={'orange'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="menu-outline" size={30} color={'orange'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: '60%',
    width: '50%',
    resizeMode: 'contain',
    marginTop: 15,
  },
  iconContainer: {
    //flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    padding: 18,
  },
});
