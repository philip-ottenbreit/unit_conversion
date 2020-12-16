/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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

export const UnitWrapper = (props) => {
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
          <Text_ style={{marginBottom: 12, fontSize: 20, fontWeight: 'bold'}}>
            Convert:
          </Text_>
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
                onChangeText={props.inputHandler}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={{textAlignVertical: 'center'}}>
                  {props.fromUnit}
                </Text>
                <Icon
                  onPress={props.fromUnitDropdown}
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
                style={{flex: 1, color: 'black'}}
                editable={false}
                value={props.toUnitInputFieldValue}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={{textAlignVertical: 'center'}}>
                  {props.toUnit}
                </Text>
                <Icon
                  onPress={props.toUnitDropdown}
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
              display: props.showToggle ? 'flex' : 'none',
              marginTop: 12,
              padding: 20,
              alignSelf: props.toggleToUnitDropDown ? 'flex-end' : 'flex-start',
            }}>
            {props.availableUnits.map((item) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  props.toggleToUnitDropDown
                    ? props.setToUnit(item.abbrev)
                    : props.setFromUnit(item.abbrev);
                  props.setShowToggle(false);
                }}>
                <Text style={{paddingVertical: 10}}>{item.name}</Text>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>

          <TouchableOpacity
            onPress={props.convert}
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
