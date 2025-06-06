import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '../../components/Back'
import colors from '../../constant/colors'
import ButtonsIcon from '../../components/ButtonsWithIcon'
import { TitleStyles } from '../../styles/Title'
import imagePath from '../../constant/imagePath'

const HomeSupport = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
        <View style={{flexDirection:'row',alignItems:'center',}}>
        <Back/>
         <Text style={{...TitleStyles.TitlesmBold,marginTop:20,marginHorizontal:'auto'}}>Support</Text> 
         </View > 

        <View>
            
            <Image source={imagePath.Support} style={styles.imageStyles}/>
            <Text style={{...TitleStyles.TitlemdXBold,textAlign:'center'}}>CoinPay  Support </Text>
            <Text style={{ ...TitleStyles.BodymdMedium, color: colors.SousTitle, textAlign: 'center', margin: 10 }}>Our dedicated team is here to assist you with any question or issues related to our Coinpay mobile app</Text>
        </View>
        <View style={{bottom:-80}}>
            <ButtonsIcon nameIcon='comments' name='  Start Chat' fill={false} verify={false}/>
            <ButtonsIcon nameIcon='circle-question' name='  View FAQ' fill={true} verify={false}/>
        </View>
    </SafeAreaView>
  )
}

export default HomeSupport

const styles = StyleSheet.create({
    imageStyles:{
    width: 360,
    height: 360,
    }
})