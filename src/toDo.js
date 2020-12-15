import React from 'react';
import {View} from 'react-native';
import {styles} from './common/styles';
import {Text_} from './common/text';

export const TODO = (props) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text_>This feature will be out soon, stay tuned!</Text_>
    </View>
  );
};
