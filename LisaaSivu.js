import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import ListaaKaikki from './komponentit/ListaaKaikki';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LisaaVaatekappale from './komponentit/LisaaVaatekappale';

export default function LisaaSivu() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LisaaVaatekappale/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});