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

export default class SelectSymptoms extends React.Component {
  constructor() {
    super();
    this.state = {
      symptoms: [
        [
          'Stomach Pain',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/stomachAche.jpg?raw=true',
        ],
        [
          'Chest Pain',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/Chest-pain.jpg?raw=true',
        ],
        [
          'Breathing Problem',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/breathingProblem.jpg?raw=true',
        ],
        [
          'Headache',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/headache.jpg?raw=true',
        ],
        [
          'Urine Problem',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/stomachAche.jpg?raw=true',
        ],
        [
          'Knee Pain',

          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/kneePain.jpg?raw=true',
        ],
        [
          'Child Health',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/childHealth.jpg?raw=true',
        ],
        [
          'Allergy',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/allergy.jpg?raw=true',
        ],
        [
          'Skin care',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/Skincare.jpg?raw=true',
        ],
        [
          'Stomach Pain',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/stomachAche.jpg?raw=true',
        ],
        [
          'Chest Pain',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/Chest-pain.jpg?raw=true',
        ],
        [
          'Breathing Problem',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/breathingProblem.jpg?raw=true',
        ],
        [
          'Headache',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/headache.jpg?raw=true',
        ],
        [
          'Urine Problem',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/stomachAche.jpg?raw=true',
        ],
        [
          'Knee Pain',

          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/kneePain.jpg?raw=true',
        ],
        [
          'Child Health',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/childHealth.jpg?raw=true',
        ],
        [
          'Allergy',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/allergy.jpg?raw=true',
        ],
        [
          'Skin care',
          'https://github.com/Arabhya07092007/Medibey-assests/blob/main/Skincare.jpg?raw=true',
        ],
      ],
    };
  }

  renderItem = ({item: data, index: pindex}) => {
    return (
      <View
        style={{
          margin: 10,
          marginBottom: 20,
          width: 100,
          height: 110,
        }}>
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
              height: 2,
            },
            shadowOpacity: 0.45,
            shadowRadius: 4,
            elevation: 5,

            borderWidth: 1.5,
            borderColor: '#F2F2F4',
          }}>
          <Image source={{uri: data[1]}} style={style.symptomsImg} />
        </TouchableOpacity>
        <Text
          style={{
            color: '#454545',
            alignSelf: 'center',
            fontSize: 14,
            fontWeight: '500',
          }}>
          {data[0]}
        </Text>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();
  render() {
    return (
      <View style={style.cont}>
        {/* <View style={{backgroundColor: '#230F55'}}>
          <View style={style.headerCont}>
            <View style={style.icnCont}>
              <Icon
                type={Icons.Feather}
                name={'arrow-left'}
                color="white"
                size={25}
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}
              />
            </View>
            <Text style={{color: 'white', fontWeight: '500', fontSize: 20}}>
              Select Your Symptops
            </Text>
          </View>
        </View> */}

        {/* this is boundary */}

        <View style={style.itemCont}>
          <FlatList
            contentContainerStyle={{
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
            keyExtractor={this.keyExtractor}
            data={this.state.symptoms}
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

  symptomsImg: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 50,
  },

  itemCont: {
    // paddingBottom: 35,
  },
});
