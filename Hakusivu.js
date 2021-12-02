import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button, ListItem, Header, Avatar } from
    'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListaaKaikki from './komponentit/ListaaKaikki';


export default function Hakusivu() {
    return (
        <View style={styles.container}>
            <Header
                centerComponent={{ text: 'NAVIGAATIO', style: { color: '#fff' } }}
            />
            <StatusBar style="auto" />
            <ListaaKaikki/>

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
