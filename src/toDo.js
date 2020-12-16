/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Text_} from './common/text';

export const TODO = (props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text_>This feature will be out soon, stay tuned!</Text_>
    </View>
  );
};
