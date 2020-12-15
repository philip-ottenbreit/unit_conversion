import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {styles} from './common/styles';
import {Text_} from './common/text';

export const ListOfUnits = (props) => {
  const units = [
    {
      unit: 'Mass',
      goTo: 'MassConverter',
    },
    {
      unit: 'Temperature',
      goTo: 'TempConverter',
    },
    {
      unit: 'Area',
      goTo: 'TODO',
    },
    {
      unit: 'Speed',
      goTo: 'TODO',
    },
  ];
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
          <FlatList
            data={units}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.bigButton}
                onPress={() => props.navigation.navigate(item.goTo)}>
                <Text_ style={styles.centerText}>{item.unit}</Text_>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
