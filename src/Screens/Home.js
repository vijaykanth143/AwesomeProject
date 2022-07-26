import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon3 from 'react-native-vector-icons/Feather';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {Component} from 'react';
import Header from '../Components/Header';
import Searchbar from '../Components/searchbar';
import Card from '../Components/Card';
import Currentbooking from '../Components/Currentbooking';
import Property from '../Components/Property';
import CustomButton from '../Components/CustomButton';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

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
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }
  render() {
    console.log('----------------------------------', this.state.expanded);
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
        <View
          style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
          {data.map(item => {
            return (
              <Card icon={item.iconname} text={item.text} qr={item.text2} />
            );
          })}
        </View>
        {this.state.expanded ? (
          <>
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

              <TouchableWithoutFeedback
                onPress={() => {
                  ////console.log('Hello')
                }}>
                <View
                  style={{
                    borderColor: 'gray',
                    borderWidth: 1,
                    marginHorizontal: 30,
                    marginTop: 15,
                    paddingRight: 10,
                  }}>
                  <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{fields: 'geometry'}}
                    textInputProps={{placeholderTextColor: 'gray'}}
                    style={{alignItems: 'center'}}
                    fetchDetails={true} // you need this to fetch the details object onPress
                    placeholder="Search Properties, Areas etc..."
                    query={{
                      key: 'AIzaSyDgQlUgbgkWodIedIBpYIE8dMZJ7jjbbfA',
                      language: 'en', // language of the results
                    }}
                    renderLeftButton={() => (
                      <Icon
                        name="search1"
                        color="black"
                        size={20}
                        style={{
                          alignSelf: 'center',
                          paddingLeft: 5,
                        }}
                      />
                    )}
                    renderRightButton={() => (
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity>
                          <Icon3
                            name="filter"
                            size={25}
                            color={'#a9a9a9'}
                            style={{marginHorizontal: 10}}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image
                            source={require('./../../assets/Icons/greylocation.png')}
                            style={{height: 28, width: 25, marginBottom: 5}}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                    styles={{
                      textInput: {color: 'gray'},
                      row: {
                        backgroundColor: 'white',
                      },
                      description: {color: 'gray'},
                    }}
                    onPress={(data, details = null) => {
                      //console.log("data", data);
                      //console.log("details", details);
                      //console.log(JSON.stringify(details?.geometry?.location));

                      var params = {
                        latitude: JSON.stringify(details.geometry.location.lat),
                        longitude: JSON.stringify(
                          details.geometry.location.lng,
                        ),
                      };
                      this.openSearchResult(params, data.description, []);
                    }}
                    onFail={error => console.error(error)}
                  />
                </View>
              </TouchableWithoutFeedback>
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
          </>
        ) : (
          <View style={{alignItems: 'center', marginHorizontal: 20}}>
            <Pressable
              android_ripple={'orange'}
              style={[
                {
                  borderColor: 'orange',
                  borderWidth: 2,
                  alignItems: 'center',
                  width: '100%',
                  paddingVertical: 8,

                  paddingHorizontal: 0,
                  marginTop: 20,
                  marginBottom: 10,
                },
              ]}
              onPress={() => this.setState({expanded: !this.state.expanded})}>
              <Text
                style={[
                  {color: 'orange', letterSpacing: 0.7, fontWeight: '600'},
                ]}>
                DISCOVER SPACES
              </Text>
            </Pressable>
          </View>
        )}

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

        <Property title="Linked Properties" />
        <Property title="Upcoming Bookings" />
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
