import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StartStack from './StartStack'
import naviguation from './NaviguationFinish'
import { RootStackPAramList } from '../constant/Type'
const RootStack = createStackNavigator<RootStackPAramList>()

const NavigationDebut = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name='StartStack' component={StartStack}/>
      <RootStack.Screen name='NaviguationFinish' component={naviguation}/>
    </RootStack.Navigator>
  )
}

export default NavigationDebut

const styles = StyleSheet.create({})