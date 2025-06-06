import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '../../components/Back'
import { Image } from 'react-native'
import imagePath from '../../constant/imagePath'
import colors from '../../constant/colors'
import { TitleStyles } from '../../styles/Title'
import ButtonsWithIcon from '../../components/ButtonsWithIcon'

const HomeAddingCard = () => {
  return (
   <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
    <Back/>
    <View style={{justifyContent:'space-between',flex:0.8}}>
        <View style={styles.container}>
        <Image source={imagePath.addingCard} style={styles.card}/>
        <Text style={{ ...TitleStyles.TitlelgBold, textAlign: 'center'}}>Let's add your card</Text>
        <Text style={{ ...TitleStyles.labelLgRegular, color: colors.SousTitle, textAlign: 'center', margin: 10 }} >experience the power plateform with our plateform</Text>
        </View>
        <ButtonsWithIcon nameIcon='plus' name='   add your card' fill={false} verify={false}/>
    </View>
   </SafeAreaView>
  )
}

export default HomeAddingCard

const styles = StyleSheet.create({
    container:{
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    },
    card:{
        width:380,
        height:380,
    }
})