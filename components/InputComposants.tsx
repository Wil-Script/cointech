import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../constant/colors'

const InputComposants = ({placeholder}:{placeholder:string}) => {
  return (
    <View style={{}}>
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.gris}></TextInput>
    </View>
  )
}

export default InputComposants

const styles = StyleSheet.create({
    input:{
        borderWidth:1.5,
        borderColor:colors.gris,
        marginTop:10,
        borderRadius:10,
        marginHorizontal:16,

    }
})