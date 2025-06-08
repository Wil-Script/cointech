import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constant/colors'
import Back from '../../components/Back'
import ButtonsWithIcon from '../../components/ButtonsWithIcon'
import { TitleStyles } from '../../styles/Title'
import { OtpInput } from "react-native-otp-entry";
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackPAramList } from '../../constant/Type'
import { useNavigation } from '@react-navigation/native'

type AddCardNaviguation = NativeStackNavigationProp<RootStackPAramList, 'VerifyCard'>
const VerifyCard = () => {
    const navigation = useNavigation<AddCardNaviguation>()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.griseStatutBar, marginHorizontal: 20 }}>
            <Back />
            <View>
                <View>
                    <Text style={{ ...TitleStyles.TitlelgBold }}>verify your card </Text>
                    <Text style={{ ...TitleStyles.labelmdRegular }}>we send  6 digits code to yourname@example.com</Text>
                    <View style={{ marginTop: 20 }}>
                        <OtpInput numberOfDigits={6} onTextChange={(texte) => console.log(texte)} theme={{ filledPinCodeContainerStyle: styles.containerStyles }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Text>Didn't get a code?</Text>
                        <Text style={{ color: colors.blueColor }}>Resend</Text>
                    </View>
                </View>
                <View>
                    {/* <ButtonWithIcon /> */}
                    <ButtonsWithIcon nameIcon='' name='verify' navigation={navigation} route='CardList' fill={false} verify={false} />
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default VerifyCard

const styles = StyleSheet.create({
    containerStyles: {
        borderWidth: 4,

    }
})