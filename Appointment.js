import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import {View} from 'react-native-gesture-handler';
import Icon, {Icons} from './Components/Icons';

function Appointment({route, navigation}) {
  const [is, setData] = React.useState();
  return (
    <View style={style.cont}>
      {/* <View style={{backgroundColor: '#230F55'}}>
        <View style={style.headerCont}>
          <TouchableOpacity
            style={style.icnCont}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon
              type={Icons.Feather}
              name={'arrow-left'}
              color="white"
              size={25}
            />
          </TouchableOpacity>
          <Text style={{color: 'white', fontWeight: '500', fontSize: 20}}>
            Book An Appointment
          </Text>
        </View>
      </View> */}

      <View
        style={{
          margin: 10,
          marginHorizontal: 15,
          backgroundColor: 'white',
          flexDirection: 'row',
          borderRadius: 15,
          padding: 10,
          // borderRadius: 15,
          // marginTop: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,
          elevation: 5,
          backgroundColor: '#E9EEFA',
        }}>
        <View style={{justifyContent: 'center'}}>
          <View>
            <Image
              source={{uri: route.params.doctorData[1]}}
              style={style.doctorImg}
            />
          </View>
          <Text style={{color: 'black', textAlign: 'center'}}>Ratings</Text>
        </View>

        {/*<Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Book an appointment
          </Text> */}
        <View style={{marginLeft: 10}}>
          <Text style={{color: '#414146', fontSize: 18, fontWeight: '500'}}>
            {route.params.doctorData[0]}
          </Text>
          <Text style={{color: '#414146'}}>
            {route.params.doctorData[3]} years experience
          </Text>

          <Text style={{color: '#414146'}}>
            {route.params.doctorData[8][0] +
              ', ' +
              route.params.doctorData[8][1]}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#414146'}}>2.5 km away</Text>
            <Text style={{color: '#414146'}}>Directions</Text>
          </View>

          <Text style={{color: '#414146'}}>
            {route.params.doctorData[6][0]}
          </Text>
        </View>
      </View>

      <ScrollView>
        {/* <View style={{backgroundColor: 'lightyellow', height: 200}}></View> */}
        <View style={{flex: 2}}>
          <View style={style.timecont}>
            <Text style={style.timehd}>Morning</Text>
            <View horizontal={true} style={style.itemflexCont}>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>09:00 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>09:30 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItemFocused}>10:00 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>10:30 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>11:00 AM</Text>
              </View>
            </View>
          </View>
          <View style={style.timecont}>
            <Text style={style.timehd}>Afternoon</Text>
            <View horizontal={true} style={style.itemflexCont}>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>09:00 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>09:30 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>10:00 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>10:30 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>11:00 AM</Text>
              </View>
            </View>
          </View>
          <View style={style.timecont}>
            <Text style={style.timehd}>Evening</Text>
            <View horizontal={true} style={style.itemflexCont}>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>09:00 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>09:30 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>10:00 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>10:30 AM</Text>
              </View>
              <View style={style.slotcont}>
                <Text style={style.slotItem}>11:00 AM</Text>
              </View>
            </View>
          </View>

          <View style={style.bookSecCont}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <View
                style={{
                  backgroundColor: '#230F55',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Icon
                  type={Icons.Feather}
                  name={'user'}
                  color="white"
                  size={28}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'grey', fontWeight: '600', fontSize: 18}}>
                  Doctor
                </Text>
                <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
                  {route.params.doctorData[0]}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <View
                style={{
                  backgroundColor: '#230F55',
                  justifyContent: 'center',
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  borderRadius: 50,
                }}>
                <Icon
                  type={Icons.Feather}
                  name={'calendar'}
                  color="white"
                  size={28}
                />
              </View>
              <View style={{marginLeft: 10}}>
                <Text style={{color: 'grey', fontWeight: '600', fontSize: 18}}>
                  Date and Time
                </Text>
                <Text style={{color: 'black', fontWeight: '600', fontSize: 20}}>
                  Today, 25 aug 8:00 PM
                </Text>
              </View>
            </View>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: '#230F55',
                  fontSize: 22,
                  textAlign: 'center',
                  fontWeight: 'bold',
                  // paddingTop: 20,
                  padding: 10,
                  borderRadius: 50,
                }}>
                BOOK SLOT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Appointment;

const style = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerCont: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    // backgroundColor: 'red',
    // justifyContent: 'center',
  },
  icnCont: {
    // flex: 2,
    marginRight: '8%',
  },
  txtHeading: {
    color: '#414146',
    fontSize: 20,
    fontWeight: 'bold',
  },

  doctorImg: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 50,
  },

  timecont: {
    margin: 12,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
  },

  timehd: {
    color: '#230F55',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  slotcont: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  slotItem: {
    color: '#230F55',
    borderColor: '#230f5593',
    fontWeight: '500',
    borderWidth: 2,
    borderRadius: 10,
    padding: 3,
    margin: 5,
    paddingBottom: 1,
    paddingTop: 5,
  },

  slotItemFocused: {
    color: 'white',
    borderColor: '#230F55',
    backgroundColor: '#230F55',
    fontWeight: '500',
    borderWidth: 2,
    borderRadius: 10,
    padding: 3,
    margin: 5,
    paddingBottom: 1,
    paddingTop: 5,
  },

  itemflexCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'red',
  },

  bookSecCont: {
    // flexDirection: 'row',
    marginTop: 10,
    padding: 15,
    paddingTop: 20,
    backgroundColor: '#E9EEFA',
    // justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
