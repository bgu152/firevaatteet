import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListaaKaikki from './komponentit/ListaaKaikki';
import LisaaVaatekappale from './komponentit/LisaaVaatekappale';
import { Input, Button, ListItem, Header, Avatar } from
  'react-native-elements';
  import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';  


import Hakusivu from './Hakusivu';
import LisaaSivu from './LisaaSivu';

function HakusivuAPP() {
  return (
    <View style={styles.container}>
      <LisaaSivu/>
    </View>
  );
}

function LisaaSivuAPP() {
  return (
    <View style={styles.container}>
      <Hakusivu/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'HakusivuAPP') {
      iconName = 'md-search';
    } else if (route.name === 'LisaaSivuAPP') {
      iconName = 'md-settings';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  }
});

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="HakusivuAPP" component={HakusivuAPP} />
          <Tab.Screen name="LisaaSivuAPP" component={LisaaSivuAPP} />
        </Tab.Navigator>
      </NavigationContainer>
   
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
