import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../../constant/imagePath'

const SplahScreen = () => {
  return (
    <View style={{flex:1}}>
   <Image source={imagePath.Splash}/>
    </View>
  )
}

export default SplahScreen

const styles = StyleSheet.create({})