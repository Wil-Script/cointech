import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constant/colors'
import { TitleStyles } from '../styles/Title'
import React from 'react'


const Buttons = ({name,fill,verify}:{name:string,fill:boolean,verify:boolean}) => { 
    return (
    <View style={{marginTop:10 }}>
      {fill=verify?false:fill}
      <TouchableOpacity disabled={verify}
      style={{
            backgroundColor:verify?colors.griseButton:fill?colors.white:colors.blueColor,
            borderWidth:fill? 1 : 0,
            borderColor:fill?colors.blueColor:colors.white,
            paddingHorizontal:12,
            paddingVertical:16,
            borderRadius:30,
            marginHorizontal:20,
            // width:360,
            // height:53,
            //condition(a>2)?oui:non
        }}>
          
        <Text style={[styles.textStyles,{
            color:verify?colors.black:fill?colors.blueColor:colors.white,
            opacity:verify?0.6:1,
          },
            TitleStyles.labelLgMedium
        ]} >{name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
  textStyles:{
            textAlign:'center',
  }
})