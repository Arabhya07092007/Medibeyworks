import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from './Auth/Welcome';
import Home from './Auth/Home';
import SignIn from './Auth/SignIn';
// import Doctor from './Doctor';
import SelectSymptoms from './SelectSymptoms';
import SelectDoctor from './SelectDoctor';
import Appointment from './Appointment';

import {
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          height: 60,
          backgroundColor: '#230F55',
        },

        // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,

        // headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
      }}>
      <Stack.Screen
        name="Welcome"
        options={{headerShown: false}}
        component={Welcome}
      />
      <Stack.Screen name="Home" options={{title: 'Medibey'}} component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} options={{}} />
      <Stack.Screen
        name="SelectSymptoms"
        options={{title: 'Select Your Symptoms'}}
        component={SelectSymptoms}
      />
      <Stack.Screen
        name="SelectDoctor"
        options={{title: 'Chose Your Doctor'}}
        component={SelectDoctor}
      />
      <Stack.Screen
        name="Appointment"
        options={{title: 'Book an Appointment'}}
        component={Appointment}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
