import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Slideshow from 'react-native-image-slider-show';
import img1 from './../../assets/Images/bangalore.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from './CustomButton';

const dataSource = [
  {
    url: img1,
  },
  {
    url: require('./../../assets/Images/kolkata.jpg'),
  },
  {
    url: require('./../../assets/Images/mumbai.jpg'),
  },
];
export class Currentbooking extends Component {
  render() {
    return (
      <View
        height="45%"
        width="100%"
        style={{padding: 15, paddingHorizontal: 35}}>
        <View style={{backgroundColor: 'white'}}>
          <View>
            <Slideshow
              dataSource={dataSource}
              style={{height: 200, width: '100%'}}
              height={170}
              containerStyle={{resizeMode: 'cover'}}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255,255,255,0.8)',
              width: 30,
              height: 30,
              alignItems: 'center',
              justifyContent: 'space-around',
              alignSelf: 'flex-end',
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            onPress={() => {
              console.log('heart pressed');
            }}>
            <Icon name="hearto" color={'black'} size={16} />
          </TouchableOpacity>
          <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
            <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
              Property name
            </Text>
            <Text style={{color: 'grey', fontSize: 15, marginBottom: 10}}>
              Booking ID
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 25}}>
                <Text style={{color: 'black', fontSize: 15}}>From</Text>
                <Text style={{color: 'grey', fontSize: 12}}>Jan 27 2022</Text>
                <Text style={{color: 'grey', fontSize: 12}}>10.00 AM</Text>
              </View>
              <View>
                <Text style={{color: 'black', fontSize: 15}}>To</Text>
                <Text style={{color: 'grey', fontSize: 12}}>Jan 31 2022</Text>
                <Text style={{color: 'grey', fontSize: 12}}>10.00 AM</Text>
              </View>
            </View>
            <CustomButton />
          </View>
        </View>
      </View>
    );
  }
}

export default Currentbooking;
