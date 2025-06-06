import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import imagePath from '../constant/imagePath'

const Back = () => {
  return (
    <View>
        <TouchableOpacity>
        <Image style={styles.imageStyle} source={imagePath.back} />
        </TouchableOpacity>
    </View>
  )
}

export default Back
const styles =StyleSheet.create({
    imageStyle:{
    width: 18,
    height: 18,
    marginTop: 20,
    marginLeft: 10
    }
})