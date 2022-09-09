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
import Icon, {Icons} from './Components/Icons';

export default class SelectDoctor extends React.Component {
  constructor() {
    super();
    this.state = {
      doctordata: [
        [
          'Dr Naveen Kumar',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/doctor-img1.png?raw=true',
          'Shivpurwa Mahmoorganj varanasi',
          '20',
          'BAMS',
          '₹50 service + medicine',
          ['+91 12345 67890', '+91 12345 67890'],
          3.5,
          ['Andrology Treatment', 'Cystoscopy'],
        ],
        [
          'Dr. Chandrashekhar Singh',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/doctor-img2.png?raw=true',
          '8X8J+H3H, Shivpurwa Rd, Opposite Park, Chandua Chhittupur, Chandua, Varanasi, Uttar Pradesh 221002',
          'N/A',
          '...',
          '...',
          ['+91 9369144021'],
          3.5,
          ['General Physician'],
        ],
        [
          'Dr. Brijesh Kumar',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/doctor-img1.png?raw=true',
          '72W3+9VP, Pandit Manmohan Malviya Rd, Shivala, Varanasi, Uttar Pradesh 221001',
          'Experience',
          'MBBS, MS, MCh',
          'Moderate charge',
          [' +91 542 2507766'],
          4.5,
          [
            'Neurosurgeon',
            'Spinal Cord',
            'Spinal Disorders Treatment',
            'Brain Tumour Surgery',
            'Spine Surgery',
          ],
        ],
        [
          'Doctor',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/doctor-img2.png?raw=true',
          'location',
          'Experience',
          'degree',
          'Charges',
          ['+91 Contact', '+91 contact'],
          12,
          ['Speciality', 'Speciality'],
        ],
        [
          'Dr Naveen Kumar',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/doctor-img1.png?raw=true',
          'Shivpurwa Mahmoorganj varanasi',
          '20',
          'BAMS',
          '₹50 service + medicine',
          ['+91 12345 67890', '+91 12345 67890'],
          3.5,
          ['Andrology Treatment', 'Cystoscopy'],
        ],
        [
          'Dr. Chandrashekhar Singh',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/doctor-img2.png?raw=true',
          '8X8J+H3H, Shivpurwa Rd, Opposite Park, Chandua Chhittupur, Chandua, Varanasi, Uttar Pradesh 221002',
          'N/A',
          '...',
          '...',
          ['+91 9369144021'],
          3.5,
          ['General Physician'],
        ],
        [
          'Dr. Brijesh Kumar',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/doctor-img1.png?raw=true',
          '72W3+9VP, Pandit Manmohan Malviya Rd, Shivala, Varanasi, Uttar Pradesh 221001',
          'Experience',
          'MBBS, MS, MCh',
          'Moderate charge',
          [' +91 542 2507766'],
          4.5,
          [
            'Neurosurgeon',
            'Spinal Cord',
            'Spinal Disorders Treatment',
            'Brain Tumour Surgery',
            'Spine Surgery',
          ],
        ],
        [
          'Doctor',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/doctor-img2.png?raw=true',
          'location',
          'Experience',
          'degree',
          'Charges',
          ['+91 Contact', '+91 contact'],
          12,
          ['Speciality', 'Speciality'],
        ],
      ],
    };
  }

  renderItem = ({item: data, index: pindex}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Appointment', {doctorData: data});
          // alert('doctor data : ' + data[0]);
          // console.clear();
          // console.log(data[0]);
        }}
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
        }}>
        <View style={{justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SelectDoctor');
            }}
            style={{
              borderRadius: 100,
              justifyContent: 'center',
              alignSelf: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.45,
              shadowRadius: 4,
              elevation: 3,

              // borderWidth: 1.5,
              // borderColor: '#F4F4F5',
            }}>
            <Image source={{uri: data[1]}} style={style.symptomsImg} />
          </TouchableOpacity>
          <Text style={{color: 'black', textAlign: 'center'}}>Ratings</Text>
        </View>
        <View
          style={{
            marginLeft: 10,
            // justifyContent: 'center',
            alignItem: 'center',
            // backgroundColor: 'red',
            // flex: 1,
            // marginRight: 10,
          }}>
          <Text style={{color: '#414146', fontSize: 17, fontWeight: '500'}}>
            {data[0]}
          </Text>
          <Text style={{color: '#414146', fontWeight: '00'}}>
            {data[3]} years experience
          </Text>

          <Text style={{color: '#414146'}}>
            {data[8][0] + ', ' + data[8][1]}
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: '#414146'}}>2.5 km away</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    console.log(this.state.doctordata[0]);
    return (
      <View style={style.cont}>
        {/* <View style={{backgroundColor: '#230F55'}}>
          <View style={style.headerCont}>
            <TouchableOpacity
              style={style.icnCont}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon
                type={Icons.Feather}
                name={'arrow-left'}
                color="white"
                size={25}
              />
            </TouchableOpacity>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 20}}>
              Select Doctor
            </Text>
          </View>
        </View> */}

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 15,
            margin: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={style.txtHeading}>General Physician</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#414146', fontSize: 16, marginRight: 7}}>
              Filter
            </Text>
            <View style={{}}>
              <Icon
                type={Icons.Ionicons}
                name={'filter-outline'}
                color="black"
                size={18}
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
            }}
            keyExtractor={this.keyExtractor}
            data={this.state.doctordata}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#E3EAF2',
    paddingBottom: 47,
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
    width: 75,
    height: 75,
    resizeMode: 'contain',
    borderRadius: 50,
    // borderWidth: 2,
  },

  symptomsImg: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    borderRadius: 50,
  },
});
