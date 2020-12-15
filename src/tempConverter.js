import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {styles} from './common/styles';
import {Text_} from './common/text';

export const TempConverter = (props) => {
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
          style={styles.fullContainer}>
          <Text_>Amazing Temperature Converter</Text_>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
