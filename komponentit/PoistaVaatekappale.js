import { initializeFirestore } from '@firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TextInput, Text, View, Alert, FlatList, SafeAreaView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, collection, getDocs, onSnapshot, itemsSnapshot, itemsCol, addDoc, deleteDoc } from 'firebase/firestore';
import 'firebase/firestore';
import takki from '../assets/takki.png'
import { useForm, Controller } from "react-hook-form";
import { Input, Button, ListItem, Header, Avatar } from
    'react-native-elements';
import db from './Tietokanta';

export default function PoistaVaatekappale(props){
    useEffect(()=> {
        deleteFromDatabase(props.id)
    })
    async function deleteFromDatabase(id){
        await addDoc(doc(db,'vaatekappaleet',id));
    }

}

