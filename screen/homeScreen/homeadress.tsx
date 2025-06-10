import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,  } from 'react-native';
import React, { useState } from 'react';
import { useLayoutEffect } from "react";
import image from "./image";
import { Image } from "react-native";
import Buttons from "../../components/Buttons";
import styles from "./styles";
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import CheckBox from "@react-native-community/checkbox";  
import { StackNavigationProp } from '@react-navigation/stack';
import type { rooteur } from './type'
type ConnectionScreenNavigationProp = StackNavigationProp<rooteur, 'homeadress'>;

type Props = {
  navigation: ConnectionScreenNavigationProp;
};


export default function home ({navigation}: Props) {
const [line, setLine] = useState('');
const [ville, setVille] = useState('');
const [postcode, setPostcode] = useState('');
const [sex, setSex] = useState('');
const [option1, setOption1] = useState(false);
const [option2, setOption2] = useState(false);
const [option3, setOption3] = useState(false);
useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('personnels')} style={{ marginRight: 15 }}>
          <Text style={{ fontSize: 18 }}>→</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);


    return(
        <SafeAreaView style={{flex:1,justifyContent:"center"}}>
        <view style={{alignItems:"center"}} >
             <TouchableOpacity style={styles.new} onPress={() => navigation.navigate('personnels')}/>
            <Image source={(image.email)} style={{ width: 400, height: 700,}} />
            <Text style={{alignItems:"center"}}>entrer votre adresse de la ligne </Text>
            <TextInput
        placeholder="veuillez remplir votre adresse line "
        placeholderTextColor="#888"
        style={styles.input} // importation de styles
        value={line}
        onChangeText={setLine}
        keyboardType="email-address"
        />
        <TextInput
        placeholder="veuillez remplir votre ville "
        placeholderTextColor="#888"
        style={styles.input} //  applique le style ici
        value={ville}
        onChangeText={setVille}
        keyboardType="name-phone-pad"
        ></TextInput>
        <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input} //  applique le style ici
        value={postcode}
        onChangeText={setPostcode}
        keyboardType="numeric"
        ></TextInput>
        <Text style={{textAlign: 'center', marginTop: 20}}>selectionner le sex</Text> 
        <Picker
        selectedValue={sex} // liste deroulante  
        onValueChange={(itemValue) => setSex(itemValue)} // commande pour inserer une liste deroulante 
        style={{ width: 300, height: 50 }}
        >
            <Picker.Item label="veuilleur choisir le sex" value=''/>
            <Picker.Item label="homme " value='homme'/>
            <Picker.Item label="femme" value='femme'/>
        </Picker>
        </view>
        <View style={{ padding: 30 }}> 
      <Text style={{ marginBottom: 10 }}>Choisissez une ou plusieurs options :</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <CheckBox value={option1} onValueChange={setOption1} // chemin a suivre pour le checkbox
        />
        <Text style={{marginBottom: 10}}>option1</Text>
      </View>
      <View style={{ padding: 30 }}>
      <Text style={{ marginBottom: 10 }}>Choisissez une ou plusieurs options :</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <CheckBox value={option2} onValueChange={setOption2}/>
        <Text style={{marginBottom: 10}}>option2</Text>
      </View>
      </View>
      <Buttons name="=continue" fill={false} verify={true}/>
      </View>
       </SafeAreaView>
    )
}
    
