import {Text, StyleSheet, View, Image, FlatList} from 'react-native';
import React, {Component} from 'react';

const searchByCity = [
  {
    id: 1,
    image: require('./../../assets/Images/kolkata.jpg'),
    city: 'Bangalore',
  },
  {
    id: 2,

    image: require('./../../assets/Images/bangalore.jpg'),
    city: 'Kolkata',
  },
  {
    id: 3,
    image: require('./../../assets/Images/mumbai.jpg'),
    city: 'Mumbai',
  },
];
export default class Property extends Component {
  render() {
    return (
      <View style={{padding: 25}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
            {this.props.title}
          </Text>
          <Text style={{color: 'orange'}}>View all</Text>
        </View>

        <FlatList
          data={searchByCity}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
                marginRight: 20,
                marginLeft: 0,
                shadowOffset: {width: 10, height: 10},
                shadowColor: 'orange',
                shadowOpacity: 3,
                elevation: 3,
                // background color must be set
                backgroundColor: '#fff',
              }}>
              <Image
                source={item.image}
                style={{
                  width: 180,
                  height: 120,
                  margin: 10,
                  resizeMode: 'contain',
                }}
              />
              <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
                <Text style={{color: 'grey', fontSize: 20, marginBottom: 10}}>
                  Property name
                </Text>
                <Text style={{color: 'black', fontSize: 15, marginBottom: 10}}>
                  Booking ID
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={{marginRight: 25}}>
                    <Text style={{color: 'black', fontSize: 15}}>From</Text>
                    <Text style={{color: 'grey', fontSize: 12}}>
                      Jan 27 2022
                    </Text>
                    <Text style={{color: 'grey', fontSize: 12}}>10.00 AM</Text>
                  </View>
                  <View>
                    <Text style={{color: 'black', fontSize: 15}}>To</Text>
                    <Text style={{color: 'grey', fontSize: 12}}>
                      Jan 31 2022
                    </Text>
                    <Text style={{color: 'grey', fontSize: 12}}>10.00 AM</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  elevation: {
    shadowColor: '#52006A',
    elevation: 20,
  },
});
