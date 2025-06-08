import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import TakeId from '../screen/AccountVerificationScreen/TakeId'
import Verrification from '../screen/AccountVerificationScreen/Verrification'
import OpenCamera from '../screen/AccountVerificationScreen/OpenCamera'
import OpenScan from '../screen/AccountVerificationScreen/OpenScan'
import TakePhoto from '../screen/AccountVerificationScreen/TakePhoto'
import { RootStackPAramList } from '../constant/Type'
import Welcome from '../screen/welcomeScreen/Welcome'
import HomeAddingCard from '../screen/addingCardScreen/HomeAddingCard'
import AddCard from '../screen/addingCardScreen/AddCard'
import VerifyCard from '../screen/addingCardScreen/VerifyCard'
import CardList from '../screen/addingCardScreen/CardList'
import HomePage from '../screen/HomePage/HomePage'



const Tab = createNativeStackNavigator<RootStackPAramList>()
 
const StartStack = () => {
  return (
   
      <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeAddingCard'>
      <Tab.Screen name='TakeId' component={TakeId}/>
      <Tab.Screen name='OpenCamera' component={OpenCamera}/>
      <Tab.Screen name='Verrification' component={Verrification}/>
      <Tab.Screen name='TakePhoto' component={TakePhoto}/>
      <Tab.Screen name='OpenScan' component={OpenScan}/>
      <Tab.Screen name='Welcome' component={Welcome}/>
      <Tab.Screen name='HomeAddingCard' component={HomeAddingCard}/>
      <Tab.Screen name='AddCard' component={AddCard}/>
      <Tab.Screen name='VerifyCard' component={VerifyCard}/>
      <Tab.Screen name='CardList' component={CardList}/>
      <Tab.Screen name='HomePage' component={HomePage}/>
    </Tab.Navigator>  
  )
}

export default StartStack