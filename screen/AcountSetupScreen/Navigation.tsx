import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Connection from './Connection';
import Home from './Homeadress';
import Personnels from './Personnels';
import CountryScreen from './CountryScreen';
import { RootStackPAramList } from './../../constant/Type';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackPAramList>();
const navigation = () => {
    return (
            <Stack.Navigator initialRouteName='Connection' screenOptions={{headerShown:false}}>
                <Stack.Screen name='Connection' component={Connection} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Personnels' component={Personnels} />
                <Stack.Screen name='CountryScreen' component={CountryScreen} />
            </Stack.Navigator>
    )
}

export default navigation

const styles = StyleSheet.create({})
