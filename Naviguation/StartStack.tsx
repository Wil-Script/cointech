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



const Tab = createNativeStackNavigator<RootStackPAramList>()
 
const StartStack = () => {
  return (
   
      <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName='TakeId'>
      <Tab.Screen name='TakeId' component={TakeId}/>
      <Tab.Screen name='OpenCamera' component={OpenCamera}/>
      <Tab.Screen name='Verrification' component={Verrification}/>
      <Tab.Screen name='TakePhoto' component={TakePhoto}/>
      <Tab.Screen name='OpenScan' component={OpenScan}/>
      <Tab.Screen name='Welcome' component={Welcome}/>
    </Tab.Navigator>  
  )
}

export default StartStack