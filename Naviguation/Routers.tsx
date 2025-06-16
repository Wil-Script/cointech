import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import StartStack from './StartStack'
import SplahScreen from '../screen/SplahScreen/SplahScreen'
import naviguationFinish from './NaviguationFinish'

const tab = createBottomTabNavigator()

const Routers = () => {
  const [Splash,setSplash] =useState(true);
  useEffect(()=>{ 
    const timer = setTimeout(()=>setSplash(false),1500)
    return () => clearTimeout(timer);
    },[])
  return (
 <NavigationContainer>
  {Splash?SplahScreen():StartStack()}
  {/* {naviguationFinish()} */}
 </NavigationContainer>
  )
}

export default Routers

const styles = StyleSheet.create({})