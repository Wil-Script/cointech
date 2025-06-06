import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '../constant/colors'
import  Icon from 'react-native-vector-icons/FontAwesome'

const InputComposants = ({placeholder,nameIcon}:{placeholder:string,nameIcon:string|boolean}) => {
  return (
    <View style={{}}>
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.gris}></TextInput>
      { nameIcon&& <Icon name={nameIcon.toString()} size={22} color={colors.blueColor} style={styles.icon}/>}
      
    </View>
  )
}

export default InputComposants

const styles = StyleSheet.create({
    input:{
        position:'relative',
        borderWidth:1,
        borderColor:colors.gris,
        marginTop:10,
        borderRadius:10,
        padding:10,
        paddingLeft:40,
        backgroundColor:colors.white,
    },
    icon:{
      position:'absolute',
      top:20,
      left:10,

    }
})