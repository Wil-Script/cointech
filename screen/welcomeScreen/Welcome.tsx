import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import *  as  Progress from 'react-native-progress'
import Back from '../../components/Back'

import Buttons from '../../components/Buttons'
import imagePath from '../../constant/imagePath'
import colors from '../../constant/colors';
import { TitleStyles } from '../../styles/Title'

const Welcome = () => {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
            <Back/>
            <View style={{justifyContent:'space-between',flex:1}}>
                <View style={styles.container}> 
                    <Progress.Bar progress={1} width={370} unfilledColor={colors.griseStatutBar} height={6} borderWidth={0} borderRadius={20} />
                    <Image source={imagePath.Welcome} style={styles.imageStyles} />
                    <Text style={{ ...TitleStyles.TitlesmBold, textAlign: 'center', marginTop: 8 }}>Congratulation!</Text>
                    <Text style={{ ...TitleStyles.TitlesmBold, textAlign: 'center', marginTop: 9 }}>Welcome to Coinpay</Text>
                    <Text style={{ ...TitleStyles.BodymdMedium, color: colors.SousTitle, textAlign: 'center', margin: 10 }}>we are happy to have you .it's time to send receive and track your expense</Text>
                </View>
                <View style={{marginBottom:20}}>
                <Buttons name='Continue' fill={false} verify={false} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    },
    imageStyles: {
        width:350,
        height:350
    },
})