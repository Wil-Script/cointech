import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constant/colors'
import Back from '../../components/Back'
import InputComposants from '../../components/InputComposants'
import { TitleStyles } from '../../styles/Title'
import ButtonsWithIcon from '../../components/ButtonsWithIcon'
import { LiteCreditCardInput, CreditCardFormData, CreditCardFormField } from "react-native-credit-card-input";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackPAramList } from '../../constant/Type'
import { useNavigation } from '@react-navigation/native'

type AddCardNaviguation = NativeStackNavigationProp<RootStackPAramList, 'AddCard'>


const AddCard = () => {
    const navigation = useNavigation<AddCardNaviguation>();

    const [verified, setVerified] = useState(true)
    const [focusedField, setFocusedField] = useState<CreditCardFormField>();
    const [formaData, setFormaData] = useState<CreditCardFormData>();

    useEffect(() => { checkData() }, [formaData])
    const checkData = async () => {
        try {
            const name = await AsyncStorage.getItem('name')
            const email = await AsyncStorage.getItem('email')
            // verification si tous les chants sont remplis
            // formaData?.valid
            // if (name !== '' && email !== ''&&formaData?.values.expiry!=''&&formaData?.values.number!=''&& formaData?.values.cvc!='' && formaData?.values.type != undefined) {
                setVerified(false)
                const sauvegarde = await AsyncStorage.setItem('Credit card',JSON.stringify(formaData?.values.numbergi)); 
            // } else {
                // console.log('sa ne marche pas malheureseuments')
            // }
        } catch (e) {
            console.log('error lors du control des donnee')
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.griseStatutBar, opacity: 1 }}>
            <Back />
            <View style={{ marginHorizontal: 20 }}>
                <Text style={{ ...TitleStyles.TitlelgRegular, marginTop: 10 }}>Add card</Text>
                <Text style={{ ...TitleStyles.labelmdRegular }} >enter you credit card info into the box below</Text>
            </View>

            <View style={styles.container}>
                <Text style={{ ...TitleStyles.labelmdRegular, marginTop: 10 }}>Account Holder Name:</Text>
                <InputComposants nameIcon={false} placeholder='Full name' name='name' />
                <Text style={{ ...TitleStyles.labelmdRegular, marginTop: 10 }}>Email:</Text>
                <InputComposants nameIcon='envelope' placeholder='hugord@gmai.com' name='email' />
                <Text style={{ ...TitleStyles.labelmdRegular, marginTop: 10 }}>Card Number:</Text>

                < LiteCreditCardInput inputStyle={{ color: colors.black }} style={styles.creditCard} onFocusField={setFocusedField} onChange={setFormaData} />
                {/* <ButtonsWithIcon /> */}
                <ButtonsWithIcon nameIcon='' name='add your card' navigation={navigation} route='VerifyCard' fill={false} verify={verified} />

            </View>
        </SafeAreaView>
    )
}

export default AddCard

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    creditCard: {
        borderWidth: 1,
        borderColor: colors.gris,
        marginTop: 10,
        borderRadius: 10,
        padding: 10,
        paddingLeft: 40,
        backgroundColor: colors.white,
        // backgroundColor:colors.white
    }
})