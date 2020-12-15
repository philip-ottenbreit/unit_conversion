import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Text_ = ({style, children}) => (
  <Text style={{...textStyle.text, ...style}}>{children}</Text>
);

const textStyle = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
  },
});
