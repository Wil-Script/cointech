import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Platform, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import type { RootStackPAramList } from './../../constant/Type';
import InputComposants from "../../components/InputComposants";
import ButtonsWithIcon from '../../components/ButtonsWithIcon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TitleStyles } from "../../styles/Title";
import *  as  Progress from 'react-native-progress'
import colors from "../../constant/colors";


type ConnectionScreenNavigationProp = NativeStackNavigationProp<RootStackPAramList, 'Personnels'>;



export default function personnel() {
  const [date1, setDate1] = useState<Date | null>(null); // date affichée
  const [date2, setDate2] = useState(new Date()); // date temporaire
  const [vdate, setVdate] = useState(false); // contrôle affichage calendrier
  const [inputverification, setinputverification] = useState(true)
  const [inputverification2, setinputverification2] = useState(true)
  const [verify, setverify] = useState(true)
  useEffect(()=>{
      if(!inputverification2&&!inputverification&&!date1){
      setverify(!verify)
    }
    },[inputverification2,inputverification,setDate1])
  useEffect(()=>{
    async ()=>{

    }
  },[setDate1])
  const navigation = useNavigation<ConnectionScreenNavigationProp>()

  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate1(selectedDate);
      setVdate(false)
    }
  };



  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')
      }/${date.getFullYear()}`;
  }; // donne le format de date a notre donnee et ajuste le calendrier a chaque ajustement 
  // et permet d'obtenir la derniere date 

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ justifyContent: 'space-between', flex: 1 }}>
        <View >
          <View style={{ marginHorizontal: 10 }} >
            <TouchableOpacity>
              <MaterialIcons name="chevron-left" size={35} />
            </TouchableOpacity>
          </View>
          <Progress.Bar progress={0.6} width={370} unfilledColor={colors.griseStatutBar} height={6} borderWidth={0} borderRadius={20} />
          <View style={{ gap: 2, margin: 20 }} >
            <Text style={{ ...TitleStyles.TitlelgRegular }}>Add Your email</Text>
            <Text style={{ alignItems: "center" }}>this info needs to be account with your Id documents</Text>
            <View style={{ marginTop: 30 }}>
              <Text style={{ ...TitleStyles.BodymdMedium, fontSize: 16 }} >Full name:</Text>
              <InputComposants nameIcon='' verify={setinputverification} placeholder="Mr john Doe" name="FullName" />
              <Text style={{ ...TitleStyles.BodymdMedium, fontSize: 16 }} >Username:</Text>
              <InputComposants nameIcon='at' verify={setinputverification2} placeholder="myUsers" name="UserName" />

              <Text style={{ ...TitleStyles.BodymdMedium, fontSize: 16, marginVertical: 15 }} >Date of Birth :</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ flexDirection: 'row', position: 'relative', }} onPress={() => setVdate(true)}>
                  <MaterialIcons name="calendar-today" size={30} style={{ position: 'absolute', top: '10%', zIndex: 1 }} />
                  <Text style={{ backgroundColor: colors.white, borderWidth: 1, borderColor: colors.gris, width: 340, borderRadius: 10, padding: 15, paddingLeft: 50 }}
                  >{formatDate(date1)}</Text>

                </TouchableOpacity>

                {vdate && (
                  <DateTimePicker
                    value={date2}
                    mode="date"
                    display={'default'}
                    onChange={handleDateChange}
                    maximumDate={new Date()}
                  />
                )}
              </View>

            </View>
          </View>

        </View>
        <View style={{ marginBottom: 40 }}>
          <ButtonsWithIcon name="Continue" nameIcon=""  verify={verify}fill={false}  route="CountryScreen" navigation={navigation} />
        </View>
      </View>

    </SafeAreaView>
  );
}

