import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import React, { useEffect, useState } from 'react';
import Buttons from "../../components/Buttons";
import styles from "./styles";
// import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import CheckBox from "@react-native-community/checkbox";
// import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackPAramList } from '../../constant/Type'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import InputComposants from "../../components/InputComposants";
import ButtonsWithIcon from '../../components/ButtonsWithIcon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TitleStyles } from "../../styles/Title";
import *  as  Progress from 'react-native-progress'
import colors from "../../constant/colors";

type ConnectionScreenNavigationProp = NativeStackNavigationProp<RootStackPAramList, 'Home'>;

export default function home() {
  const [inputverification,setinputverification] = useState(true)
  const [inputverification2,setinputverification2] = useState(true)
  const [inputverification3,setinputverification3] = useState(true)
  const [verify,setverify] = useState(true)
  useEffect(()=>{
    if(!inputverification3&&!inputverification2&&!inputverification){
    setverify(!verify)
  }
  },[inputverification3,inputverification2,inputverification])
  
  const navigation = useNavigation<ConnectionScreenNavigationProp>()
  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:colors.griseStatutBar}}>
      <View style={{justifyContent:'space-between',flex:1}}>
      <View >
      <View style={{marginHorizontal:10}} >
        <TouchableOpacity>
        <MaterialIcons name="chevron-left" size={35} />
        </TouchableOpacity>
      </View>
              <Progress.Bar progress={0.6} width={370} unfilledColor={colors.griseStatutBar} height={6} borderWidth={0} borderRadius={20} />
      <View style={{gap:2,margin:20}} >
        <Text style={{ ...TitleStyles.TitlelgRegular }}>Add Your email</Text>
        <Text style={{ alignItems: "center" }}>this info needs to be account with your Id documents</Text>
        <View style={{marginTop:30}}>
        <Text style={{...TitleStyles.BodymdMedium,fontSize:16}} >Adresse Line:</Text>
        <InputComposants nameIcon=''verify={(value)=>setinputverification(value)} placeholder="Mr john Doe" name="email" />
        <Text style={{...TitleStyles.BodymdMedium,fontSize:16}} >City:</Text>
        <InputComposants nameIcon='' placeholder="myCity" name="email"verify={(value)=>setinputverification2(value)} />
        <Text style={{...TitleStyles.BodymdMedium,fontSize:16}} >PostCode:</Text>
        <InputComposants nameIcon='' placeholder="ex:0000" name="email" verify={(value)=>setinputverification3(value)} />
        </View>
      {/* <View></View> */}
      </View>
      
      </View>
          <View style={{marginBottom:40}}>
          <ButtonsWithIcon name="Continue" nameIcon="" fill={false} verify={verify} route="Personnels" navigation={navigation} />
        </View>
      </View>
      
    </SafeAreaView>
  )
}

