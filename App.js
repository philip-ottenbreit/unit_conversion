/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ListOfUnits} from './src/listOfUnits';
import {MassConverter} from './src/massConverter';
import {TempConverter} from './src/tempConverter';
import {TODO} from './src/toDo';

const Stack = createStackNavigator();

export class App extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ListOfUnits"
          screenOptions={{
            headerTitle: 'UNIT CONVERTER',
            headerStyle: {
              backgroundColor: '#169016',
            },
            headerTintColor: '#fff',
          }}>
          <Stack.Screen name="ListOfUnits" component={ListOfUnits} />
          <Stack.Screen
            options={{
              headerTitle: 'MASS CONVERTER',
            }}
            name="MassConverter"
            component={MassConverter}
          />
          <Stack.Screen
            options={{
              headerTitle: 'TEMPERATURE CONVERTER',
            }}
            name="TempConverter"
            component={TempConverter}
          />
          <Stack.Screen
            options={{
              headerStyle: {backgroundColor: '#ffffff'},
              headerBackTitleStyle: {color: '#169016'},
              headerTintColor: '#169016',
              headerTitle: '',
            }}
            name="TODO"
            component={TODO}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
