import { initializeFirestore } from '@firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image,StyleSheet, Text, View,Alert, FlatList, SafeAreaView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, collection, getDocs, onSnapshot, itemsSnapshot, itemsCol, addDoc } from 'firebase/firestore';
import 'firebase/firestore';
import takki from '../assets/takki.png'


import { Input, Button, ListItem, Header, Avatar  } from 'react-native-elements';

const firebaseConfig = {
    apiKey: "AIzaSyCHvCJvYy1v12xXKXKM2mCm-XStjbmdfJQ",
    authDomain: "vaateappi2.firebaseapp.com",
    projectId: "vaateappi2",
    storageBucket: "vaateappi2.appspot.com",
    messagingSenderId: "729084283728",
    appId: "1:729084283728:web:96f2cf07245d9f41e17a55"
  };

  const app = initializeApp(firebaseConfig);
  export default initializeFirestore(app, { experimentalAutoDetectLongPolling: true, });