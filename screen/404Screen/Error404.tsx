import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '../../components/Back'
import colors from '../../constant/colors'
import imagePath from '../../constant/imagePath'
import Buttons from '../../components/Buttons'
import { TitleStyles } from '../../styles/Title'

const Error404 = () => {
  return (
    <SafeAreaView style={{backgroundColor:colors.white,flex:1}}>
        <Back/>
    <View style={styles.container}>
        <Image source={imagePath.Error} style={styles.imageStyle}/>
        <Text style={{ ...TitleStyles.TitlesmBold, textAlign: 'center', marginTop: 10 }}>Error 404</Text>
        <Text style={{ ...TitleStyles.TitlesmBold, textAlign: 'center', marginTop: 10 }}>Page Not Found</Text>
        <Text style={{ ...TitleStyles.BodymdMedium, color: colors.SousTitle, textAlign: 'center', margin: 10 }} >oops! it looks like the page you're looking for doesn't exist or has been moved . Please try again or go back to the home</Text>
    </View>
        <Buttons name='Back to home' verify={false} fill={false} />

    </SafeAreaView>
  )
}

export default Error404

const styles = StyleSheet.create({
    container:{
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    },
    imageStyle:{
    width: 300,
    height: 300,
    }

})