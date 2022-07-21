import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import React, {Component} from 'react';
import Header from '../Components/Header';
import Searchbar from '../Components/searchbar';
import Card from '../Components/Card';
import Currentbooking from '../Components/Currentbooking';
import Property from '../Components/Property';

const data = [
  {
    iconname: 'md-document-text-sharp',
    text: 'Manage Documents',
  },
  {
    iconname: 'warning',
    text: 'Manage Issues',
  },
  {
    iconname: 'qrcode-scan',
    text: 'Scan',
    text2: 'QR',
  },
  {
    iconname: 'calendar-sharp',
    text: 'Manage Bookings',
  },
];
const searchByCity = [
  {
    id: 1,
    image: require('./../../assets/Images/bangalore.jpg'),
    city: 'Bangalore',
  },
  {
    id: 2,
    image: require('./../../assets/Images/kolkata.jpg'),
    city: 'Kolkata',
  },
  {
    id: 3,
    image: require('./../../assets/Images/mumbai.jpg'),
    city: 'Mumbai',
  },
];

export default class Home extends Component {
  render() {
    return (
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        style={{flex: 1, alignContent: 'flex-start', backgroundColor: 'white'}}>
        <Header />
        <View style={{alignItems: 'center', marginTop: 20}}>
          <View>
            <Text style={styles.greeting}>Hello, Hisham</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginHorizontal: 10, color: 'grey'}}>
              Company name
            </Text>
            <Text style={{marginHorizontal: 10, color: 'grey'}}>
              Employee ID 456789
            </Text>
          </View>
        </View>
        <Searchbar text="Search Company Properties..." icon="list-2" />
        <View style={{alignItems: 'center'}}>
          <Image
            style={{height: 250, width: 180, resizeMode: 'cover'}}
            source={require('./../../assets/Images/signinPageDoll.png')}
          />
        </View>
        <View style={{padding: 10, flexDirection: 'row', width: '100%'}}>
          {data.map(item => {
            return (
              <Card icon={item.iconname} text={item.text} qr={item.text2} />
            );
          })}
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              marginBottom: 0,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            DISCOVER PROPERTIES
          </Text>
          <Searchbar style={styles.bar2} text="Search Area" icon="filter" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              paddingHorizontal: 25,
              paddingBottom: 10,
              paddingTop: 20,
            }}>
            Search by City
          </Text>
          <View
            style={{
              paddingHorizontal: 25,
              paddingTop: 15,
              paddingBottom: 30,
            }}>
            <FlatList
              data={searchByCity}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity style={{paddingRight: 20}}>
                    <ImageBackground
                      source={item.image}
                      resizeMode="cover"
                      style={{
                        width: 180,
                        height: 120,

                        justifyContent: 'flex-end',
                      }}>
                      <Text
                        style={{
                          color: '#ffffff',
                          fontWeight: '700',
                          fontSize: 15,
                          letterSpacing: 0.5,
                          paddingHorizontal: 10,
                          marginVertical: 15,
                        }}>
                        {item.city}
                      </Text>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              paddingHorizontal: 25,
              paddingBottom: 10,
              paddingTop: 20,
            }}>
            Current Booking
          </Text>
          <Currentbooking />
        </View>
        <Property />
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  greeting: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 0.6,
  },
  bar2: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
    marginHorizontal: 35,
    paddingVertical: 0,
    marginTop: 15,
  },
});
