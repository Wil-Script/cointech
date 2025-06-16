import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from '../constant/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../screen/HomePage/HomePage';
import Spending from '../screen/SpendingScreen/Spending';
import ProfileScreen from '../screen/ProfileScreen/ProfileScreen';
import HomeSupport from '../screen/SupportScreen/HomeSupport';

const Tab = createBottomTabNavigator()
const naviguation = () => {
  return ( 
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle:{
        position:'relative',
        // borderRadius:20
      },
      tabBarActiveTintColor:colors.white,
      tabBarActiveBackgroundColor:colors.blueColor
    }}>
      <Tab.Screen name='Home'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>(
          <MaterialIcons name='home' size={30} color={focused?colors.white:colors.blueColor}  />
        ),
        // tabBarBackground:{}
        }} component={HomePage} />
      <Tab.Screen name='Spending'
        options={{ 
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>(
          <MaterialIcons name='pie-chart' size={30} color={focused?colors.white:colors.blueColor}/>
        ), }} component={Spending} />
      <Tab.Screen name='Scan' 
        options={{ 
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>(
          <MaterialIcons name='qr-code-scanner' size={30} color={focused?colors.white:colors.blueColor}/>
        ), 
        }}  component={ProfileScreen} />
      <Tab.Screen name='Message'
        options={{ 
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>(
          <MaterialIcons name='message' size={30} color={focused?colors.white:colors.blueColor}/>
        ) }} component={HomeSupport} />
      <Tab.Screen name='Personne'
        options={{ 
          tabBarLabel: '',
          tabBarIcon: ({ focused }) =>(
          <MaterialIcons name='person' size={30} color={focused?colors.white:colors.blueColor}/>
        ) }} component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default naviguation

const styles = StyleSheet.create({})