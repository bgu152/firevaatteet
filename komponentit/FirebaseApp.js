import { initializeFirestore } from '@firebase/firestore';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image,StyleSheet, Text, View,Alert, FlatList, SafeAreaView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, collection, getDocs, onSnapshot, itemsSnapshot, itemsCol, addDoc } from 'firebase/firestore';
import 'firebase/firestore';
import takki from '../assets/takki.png'


import { Input, Button, ListItem, Header, Avatar  } from 'react-native-elements';

import Firebase from './Tietokanta';

  let vaatekappaleet = [];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function paivamaaraHienoksi(string){
    return string.substring(6,8) + "." + string.substring(4,6) + "."+string.substring(0,4);
  }
  

 function ListaaVaatteet() {
    const [list, setList] = useState([]);
    
    useEffect(() => {
      ListaaVaatteet();      
    },[]);




  async function ListaaVaatteet() {
    
    const snapshot = await getDocs(collection(db, "vaatekappaleet"));
    snapshot.forEach((doc) => {
      let uusiVaatekappale = { key: '', lapsi: '', pituudelle:'',  kuvaus: '',kategoria:'', lisattypvm: '' };
      uusiVaatekappale.key = doc.id;
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

  const renderKaikki = ({ item }) => (
    <ListItem style={styles.listcontainer} bottomDivider>
      <Avatar source ={takki} style ={{width:70, height: 70}}/>
      <ListItem.Content>
        <ListItem.Title style={{ fontSize: 18 }} >{capitalizeFirstLetter(item.kuvaus)} </ListItem.Title>
        <View style={styles.listItemcontainer}>
          <ListItem.Subtitle>{ item.lapsi}</ListItem.Subtitle>
        </View>
        <View style={styles.listItemcontainer}>
          <ListItem.Subtitle>Lisätty: {paivamaaraHienoksi(item.lisattypvm)}</ListItem.Subtitle>
        </View>
        <View style={styles.listItemcontainer}>
          <ListItem.Subtitle>Pituudelle: {item.pituudelle} cm</ListItem.Subtitle>
        </View>

        <ListItem>
          
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
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
   },
   listItemcontainer: {
     flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
   }
  });

  export default ListaaVaatteet;