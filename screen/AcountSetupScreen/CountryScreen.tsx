import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import InputComposants from "../../components/InputComposants";
import ButtonsWithIcon from '../../components/ButtonsWithIcon'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import *  as  Progress from 'react-native-progress'
import colors from '../../constant/colors';
import { RootStackPAramList } from '../../constant/Type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { TitleStyles } from '../../styles/Title';
import { CountryPicker } from "react-native-country-codes-picker";


type ConnectionScreenNavigationProp = NativeStackNavigationProp<RootStackPAramList, 'CountryScreen'>;
const CountryScreen = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState<string|null>('');

  const [verify, setverify] = useState(true)
  const navigation = useNavigation<ConnectionScreenNavigationProp>()
  useEffect(()=>{
        if(countryCode == ''){
      console.log('pays is over')}else{
         setverify(false)
         console.log('sa ne marche pas')
      }
      }
      ,[countryCode])

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
            <Text style={{ ...TitleStyles.TitlelgRegular }}>Country of residence</Text>
            <Text style={{ alignItems: "center" }}>this info needs to be account with your Id documents</Text>

            <View style={{ marginTop: 20, gap: 20,flexDirection:'row',justifyContent:'space-between' }}>
              
              {countryCode && <Text style={{ fontSize: 16 }}>{countryCode}</Text>}
              <TouchableOpacity onPress={() => { setShow(true) }} style={{ backgroundColor: colors.blueColor, padding: 10, borderRadius: 10}}>
                <Text style={{ textAlign: 'center', color: colors.white, fontSize: 18 }}>choissir son pays </Text>
              </TouchableOpacity> 

              <CountryPicker
                show={show}
                lang='fr'
                // when picker button press you will get the country object with dial code
                pickerButtonOnPress={(item) => {
                  const Country = `(${item.dial_code}) ${item.flag}  ${item.code}`
                  setCountryCode(Country);
                  setShow(false);
                }}
              />
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 40 }}>
          <ButtonsWithIcon name="Continuer" nameIcon="" fill={false} verify={verify} route='TakeId' navigation={navigation} />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default CountryScreen

const styles = StyleSheet.create({})