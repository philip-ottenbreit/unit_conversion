/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './common/styles';
import {Text_} from './common/text';

export const MassConverter = (props) => {
  const [fromUnit, setFromUnit] = useState('KG');
  const [toUnit, setToUnit] = useState('G');
  const [_, setToggleFromUnitDropDown] = useState(false);
  const [toggleToUnitDropDown, setToggleToUnitDropDown] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const [fromUnitInputFieldValue, setFromUnitInputFieldValue] = useState('');
  const [toUnitInputFieldValue, setToUnitInputFieldValue] = useState('');

  const convert = (unit) => {
    switch (unit) {
      case 'kg to g':
    }
    alert(fromUnitInputFieldValue);
  };

  const inputHandler = ({name, text}) => {
    if (name === 'fromInput') {
      setFromUnitInputFieldValue(text);
    }
  };

  return (
    <>
      <StatusBar
        networkActivityIndicatorVisible
        backgroundColor="#0e5d0e"
        barStyle="light-content"
      />
      <SafeAreaView style={styles.fullContainer}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{
            ...styles.fullContainer,
            marginTop: 24,
            marginHorizontal: 23,
          }}>
          <Text_ style={{marginBottom: 12}}>Convert:</Text_>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              flex: 1,
            }}>
            <View
              style={{
                width: '45%',
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: 'grey',
                borderRadius: 4,
                marginLeft: '3%',
              }}>
              <TextInput
                style={{flex: 1}}
                keyboardType="number-pad"
                keyboardAppearance="dark"
                value={fromUnitInputFieldValue}
                onChangeText={(text) => inputHandler({name: 'fromInput', text})}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={{textAlignVertical: 'center'}}>{fromUnit}</Text>
                <Icon
                  onPress={() => {
                    setToggleFromUnitDropDown(true);
                    setToggleToUnitDropDown(false);
                    setShowToggle(true);
                  }}
                  style={{textAlignVertical: 'center', marginRight: 5}}
                  name="caret-down"
                  color="grey"
                  size={20}
                />
              </View>
            </View>
            <Text style={{textAlignVertical: 'center', marginHorizontal: 23}}>
              TO
            </Text>
            <View
              style={{
                width: '45%',
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: 'grey',
                borderRadius: 4,
                marginRight: '3%',
              }}>
              <TextInput
                style={{flex: 1}}
                editable={false}
                value={toUnitInputFieldValue}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={{textAlignVertical: 'center'}}>{toUnit}</Text>
                <Icon
                  onPress={() => {
                    setToggleFromUnitDropDown(false);
                    setToggleToUnitDropDown(true);
                    setShowToggle(true);
                  }}
                  style={{textAlignVertical: 'center', marginRight: 5}}
                  name="caret-down"
                  color="grey"
                  size={20}
                />
              </View>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{alignItems: 'center'}}
            style={{
              width: '45%',
              borderRadius: 3,
              borderWidth: 1,
              borderColor: 'grey',
              display: showToggle ? 'flex' : 'none',
              marginTop: 12,
              padding: 20,
              alignSelf: toggleToUnitDropDown ? 'flex-end' : 'flex-start',
            }}>
            <TouchableWithoutFeedback
              style={{}}
              onPress={() => {
                toggleToUnitDropDown ? setToUnit('KG') : setFromUnit('KG');
                setShowToggle(false);
              }}>
              <Text style={{paddingVertical: 10}}>KG (Kilogram)</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                toggleToUnitDropDown ? setToUnit('LB') : setFromUnit('LB');
                setShowToggle(false);
              }}>
              <Text style={{paddingVertical: 10}}>LB (Pound)</Text>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                toggleToUnitDropDown ? setToUnit('G') : setFromUnit('G');
                setShowToggle(false);
              }}>
              <Text style={{paddingVertical: 10}}>G (Gram)</Text>
            </TouchableWithoutFeedback>
          </ScrollView>

          <TouchableOpacity
            onPress={() => convert()}
            style={{
              backgroundColor: '#0e5d0e',
              width: '100%',
              padding: 20,
              borderRadius: 5,
              marginVertical: 25,
            }}>
            <Text_ style={{textAlign: 'center', color: '#ffffff'}}>
              CONVERT
            </Text_>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
