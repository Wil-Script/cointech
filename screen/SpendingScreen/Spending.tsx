import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '../../components/Back'

const Spending = () => {
  return (
    <SafeAreaView>
        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <Back/>
        <Text>Spending</Text>
        </View>
    </SafeAreaView>
  )
}

export default Spending

const styles = StyleSheet.create({})