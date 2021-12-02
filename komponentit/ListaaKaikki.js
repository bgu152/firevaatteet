import { initializeFirestore } from '@firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Alert, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, collection, getDocs, onSnapshot, itemsSnapshot, itemsCol, addDoc, deleteDoc  } from 'firebase/firestore';
import 'firebase/firestore';
import takki from '../assets/takki.png'
import outfit from '../assets/outfit.png'
import housut from '../assets/housut.png'
import mekko from '../assets/mekko.png'


import { Input, Button, ListItem, Header, Avatar } from 'react-native-elements';

import db from './Tietokanta';



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getAvatar(item) {
    if (!item.kategoria) {
        return outfit;
    } else if (item.kategoria == 'housut') {
        return housut;
    } else if (item.kategoria == 'takki') {
        return takki;
    } else if (item.kategoria == 'mekko') {
        return mekko;
    } else {
        return outfit;
    }
}




function ListaaKaikki() {
    const [list, setList] = useState([]);

    useEffect(() => {
        ListaaVaatteet()
    }, []);

    const updateList = () =>{
        setList([]);
        ListaaVaatteet()
    }

    

    async function ListaaVaatteet() {
        let vaatekappaleet = [];
        if(vaatekappaleet.length>0){
            for (let i = 0; i < vaatekappaleet.length; i++){
                console.log(vaatekappaleet[i])
            }
        }
        

        const snapshot = await getDocs(collection(db, "vaatekappaleet"));
        snapshot.forEach((doc) => {
            let uusiVaatekappale = { id: '', lapsi: '', pituudelle: '', kuvaus: '', kategoria: '', lisattypvm: '' };
            uusiVaatekappale.id = doc.id;
            uusiVaatekappale.lapsi = doc.data().lapsi;
            if (doc.data()?.pituudelle) {
                uusiVaatekappale.pituudelle = doc.data().pituudelle;
            }
            if (doc.data()?.kuvaus) {
                uusiVaatekappale.kuvaus = doc.data().kuvaus;
            }
            if (doc.data()?.kategoria) {
                uusiVaatekappale.kategoria = doc.data().kategoria;
            }
            if (doc.data()?.lisattypvm) {
                uusiVaatekappale.lisattypvm = doc.data().lisattypvm;
            }
            vaatekappaleet = [...vaatekappaleet, uusiVaatekappale];
        });
        setList(vaatekappaleet);
    };

    async function deleteFromDatabase(id) {
        console.log('deleteting: ' + id);
        await deleteDoc(doc(db, 'vaatekappaleet', id));
        updateList();
    }



    const renderKaikki = ({ item }) => (
        <ListItem style={styles.listcontainer} bottomDivider>
            <Avatar source={getAvatar(item)} style={{ width: 70, height: 70 }} />
            <ListItem.Content>
                <ListItem.Title style={{ fontSize: 18 }} >{capitalizeFirstLetter(item.kuvaus)} </ListItem.Title>
                <View style={styles.listItemcontainer}>
                    <ListItem.Subtitle>{item.lapsi}</ListItem.Subtitle>
                </View>
                <View style={styles.listItemcontainer}>
                    <ListItem.Subtitle>Lisätty: {item.lisattypvm}</ListItem.Subtitle>
                </View>
                <View style={styles.listItemcontainer}>
                    <ListItem.Subtitle>Pituudelle: {item.pituudelle} cm</ListItem.Subtitle>
                </View>

                <ListItem>
                    <Button title="Poista" onPress={() => deleteFromDatabase(item.id)} />

                </ListItem>

            </ListItem.Content>
        </ListItem>
    );


    return (
        <SafeAreaView style={styles.container}>
            <Header
                centerComponent={{ text: 'KAIKKI VAATTEET', style: { color: '#fff' } }}
            />
            <StatusBar style="auto" />
            <FlatList
                style={{ marginLeft: "5%" }}
                renderItem={renderKaikki}
                data={list}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    listcontainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    listItemcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

export default ListaaKaikki;