import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Back from '../../components/Back'
import ButtonsWithIcon from '../../components/ButtonsWithIcon'
import Toast from 'react-native-toast-message';
import { TitleStyles } from '../../styles/Title';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackPAramList } from '../../constant/Type';
import { useNavigation } from '@react-navigation/native';
import colors from '../../constant/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

type CardListnaviguation = NativeStackNavigationProp<RootStackPAramList,'CardList'>
const CardList = () => {
    const navigation = useNavigation<CardListnaviguation>()
    const [Card,setCard] = useState<any>()
    useEffect(()=>{Number()},[])
    Toast.show({
        type: 'success',
        text1: 'Your card successfully added card',
        visibilityTime: 3000,
        position: 'top',
        topOffset: 30,
    });
    const Number = async()=>{
        try{
            let card:object|string|null = await  AsyncStorage.getItem('Credit card')
             card =JSON.parse(card as string)
            if(card){
                setCard(card)
                const mask = maskCardNumber(card as string)
                setCard(mask)
            }
            
        }catch(e){console.error(e)}
    }
    const maskCardNumber = (cardNumber: string): string => {
   const visibleDigits = cardNumber.slice(-4);
   return `**** **** **** ${visibleDigits}`;
   };
    return (
        <View style={{flex:1}}>
            <Back />
                    <Toast />

            <View style={{ marginHorizontal: 20, marginTop: 60, justifyContent:'space-between',flex:1}}>
                <View>
                    <Text style={{ ...TitleStyles.TitlemdSemiBold }}>Card list</Text>
                    <Text style={{ ...TitleStyles.labelmdRegular }}>Enter you credit card info into the box below</Text>
                    <View style={{backgroundColor:colors.white,borderRadius:20,padding:20,marginTop:20,flexDirection:'row'}}><Text>ACCOUNT  </Text> <Text>{Card}</Text> </View>

                </View>
                <View style={{marginBottom:40}}>
                <ButtonsWithIcon name='  add another Card' route='HomeAddingCard' nameIcon='plus' verify={false} fill={false} navigation={navigation} />
                <ButtonsWithIcon name='constinue' route='HomeAddingCard' nameIcon='' verify={false} fill={true} navigation={navigation} />
                </View>
            </View>
        </View>
    )
}

export default CardList