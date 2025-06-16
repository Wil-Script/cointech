import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from 'react-native';
import { useEffect, useState } from "react";
import React from 'react'
import { RootStackPAramList } from '../../constant/Type'
import *  as  Progress from 'react-native-progress'
import colors from "../../constant/colors";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TitleStyles } from "../../styles/Title";
import InputComposants from "../../components/InputComposants";
import ButtonsWithIcon from '../../components/ButtonsWithIcon'
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ConnectionScreenNavigationProp = NativeStackNavigationProp<RootStackPAramList,'Connection'>;
  
 export default function connection ()  {
   const [verified,setVerified] = useState(true)
   const [email,setemail] = useState(true)
      useEffect(()=>{
        if (!email){
      setVerified(false)}},[email])
    const navigation = useNavigation<ConnectionScreenNavigationProp>()
// navigation.reset({index:0,
//         routes:[{name:'Connection'}]
//     })

    return(
       <SafeAreaView  style={{flex:1,padding:20,justifyContent:"space-between"}}>
        <View style={{}}>
        <View >
        <MaterialIcons name="chevron-left" size={32} />
        </View>
        <View style={{gap:10}} >
          <Progress.Bar progress={0.3} width={370} unfilledColor={colors.griseStatutBar} height={6} borderWidth={0} borderRadius={20} />
                <Text style={{...TitleStyles.TitlelgRegular}}>Add Your email</Text>
                <Text style={{alignItems:"center"}}>this info needs to be account with your Id documents</Text>
            <InputComposants nameIcon='envelope'verify={value=>setemail(value)}  placeholder="name@gmail.com" name="Accountemail" />
      
        </View>

        </View>
        
        <View style={{marginBottom:20}}>
           <ButtonsWithIcon  navigation={navigation} nameIcon='' name=' Continue' fill={false} verify={verified} route='Home' />
          
        </View>
       </SafeAreaView>

    )
}