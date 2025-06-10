import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text,  TextInput, TouchableOpacity, StyleSheet,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from "react";
import React, { useLayoutEffect} from 'react'
import image from "./image";
import { Image } from "react-native";
import Buttons from "../../components/Buttons";
import { Button } from 'react-native';
import style from "./styles";
import { StackNavigationProp } from '@react-navigation/stack';
import type { rooteur } from './type'
type ConnectionScreenNavigationProp = StackNavigationProp<rooteur, 'connection'>;

type Props = {
  navigation: ConnectionScreenNavigationProp;
};

  
 export default function connection ({navigation}: Props)  {
  const [email, setEmail] = useState ('');
   useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('homeadress')} style={{ marginRight: 15 }}>
          <Text style={{ fontSize: 18 }}>→</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

    return(
       <SafeAreaView style={{flex:1,justifyContent:"center"}}>
        <view style={{alignItems:"center"}} >
            <Image source={(image.email)} style={{ width: 400, height: 700,}} />
            <Text style={{alignItems:"center"}}>veuillez entrer votre adresse pour vous conectez <br />dans le cadre ci dessous </Text>
            <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        style={style.input}
      />
      <TouchableOpacity 
      style={style.new}
      onPress={() => navigation.navigate('homeadress')}>
      <Text>Aller à l’adresse</Text>
    </TouchableOpacity>
        <Buttons name="verifier" fill={false} verify={true} />
        </view>
       </SafeAreaView>

    )
}