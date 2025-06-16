import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
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
import OnboardingScreen from '../screen/onboardingScreen/OnboardingScreen'
import Message from '../screen/SupportScreen/Message'
import HomeSupport from '../screen/SupportScreen/HomeSupport'
import NaviguationFinish from './NaviguationFinish'
import Connection from '../screen/AcountSetupScreen/Connection'
import Navigation from '../screen/AcountSetupScreen/Navigation'
import Home from '../screen/AcountSetupScreen/Homeadress'
import Personnel from '../screen/AcountSetupScreen/Personnels'
import CountryScreen from '../screen/AcountSetupScreen/CountryScreen'
import PinSetup from '../screen/pinSetupScreen/PinSetup'



const Tab = createNativeStackNavigator<RootStackPAramList>()
//  ,cardOverlayEnabled:false
const StartStack = () => {
  return (

    <Tab.Navigator screenOptions={{ headerShown: false, presentation: 'card' }} initialRouteName='OnboardingScreen'>
      <Tab.Screen name='TakeId' component={TakeId} />
      <Tab.Screen name='OpenCamera' component={OpenCamera} />
      <Tab.Screen name='Verrification' component={Verrification} />
      <Tab.Screen name='TakePhoto' component={TakePhoto} />
      <Tab.Screen name='OpenScan' component={OpenScan} />
      <Tab.Screen name='Welcome' component={Welcome} />
      <Tab.Screen name='HomeAddingCard' component={HomeAddingCard} />
      <Tab.Screen name='AddCard' component={AddCard} />
      <Tab.Screen name='VerifyCard' component={VerifyCard} />
      <Tab.Screen name='CardList' component={CardList} />
      <Tab.Screen name='HomeSupport' component={HomeSupport} />
      <Tab.Screen name='Message' component={Message} />
      <Tab.Screen name='NaviguationFinish' component={NaviguationFinish} />
      <Tab.Screen name='OnboardingScreen' component={OnboardingScreen} />
      <Tab.Screen name='NavgationAccountSetup' component={Navigation} />
      <Tab.Screen name='Connection' component={Connection} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Personnels' component={Personnel} />
      <Tab.Screen name='CountryScreen' component={CountryScreen} />
      <Tab.Screen name='Pin' component={PinSetup} />
    </Tab.Navigator>
  )
}

export default StartStack