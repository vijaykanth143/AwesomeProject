import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import Slideshow from 'react-native-image-slider-show';
import img1 from './../../assets/Images/bangalore.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomButton from './CustomButton';

const dataSource = [
  {
    id: 1,
    url: img1,
  },
  {
    id: 2,
    url: require('./../../assets/Images/kolkata.jpg'),
  },
  {
    id: 3,
    url: require('./../../assets/Images/mumbai.jpg'),
  },
];
export class Currentbooking extends Component {
  render() {
    return (
      <View
        style={[
          {
            marginHorizontal: 35,
            shadowOffset: {width: 10, height: 10},
            shadowColor: 'black',
            shadowOpacity: 3,
            elevation: 3,
            // background color must be set
            backgroundColor: '#fff',
          },
        ]}>
        <View style={{backgroundColor: 'white'}}>
          <View>
            <Slideshow
              key={dataSource.map(item => item.id)}
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
            <Text style={{color: 'black', fontSize: 23, marginBottom: 10}}>
              Property name
            </Text>
            <Text style={{color: 'grey', fontSize: 18, marginBottom: 10}}>
              Booking ID
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 65}}>
                <Text style={{color: 'black', fontSize: 18}}>From</Text>
                <Text style={{color: 'grey', fontSize: 15}}>Jan 27 2022</Text>
                <Text style={{color: 'grey', fontSize: 15}}>10.00 AM</Text>
              </View>
              <View>
                <Text style={{color: 'black', fontSize: 18}}>To</Text>
                <Text style={{color: 'grey', fontSize: 15}}>Jan 31 2022</Text>
                <Text style={{color: 'grey', fontSize: 15}}>10.00 AM</Text>
              </View>
            </View>
            <CustomButton
              style1={{
                borderColor: 'orange',
                borderWidth: 1,
                alignItems: 'center',
                width: '40%',
                paddingVertical: 8,
                paddingHorizontal: 0,
                marginTop: 20,
                marginBottom: 10,
              }}
              text="CHECK IN"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Currentbooking;
