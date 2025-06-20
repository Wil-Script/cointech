import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../constant/colors'
import  Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'

const InputComposants = ({placeholder,nameIcon,name}:{placeholder:string,nameIcon:string|boolean,name:string}) => {
  const [data,SetData]= useState('')
  useEffect( ()=>{Sauv()}
     ,[data])
     const Sauv = async ()=>{
    try{
      const test = await AsyncStorage.setItem(name,JSON.stringify(data)) 
    }catch(e){ }
  }
  // {console.log('voici les data '+data)}
  return (
    <View style={{}}>
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.gris} value={data} onChangeText={(texte)=>{SetData(texte)}}></TextInput>
      { nameIcon&& <Icon name={nameIcon.toString()} size={22}  style={styles.icon}/> }
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
        color:colors.black,
    },
    icon:{
      position:'absolute',
      top:20,
      left:10,

    }
})