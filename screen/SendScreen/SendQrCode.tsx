import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constant/colors'
import imagePath from '../../constant/imagePath'
import Back from '../../components/Back'
import QRCode from 'react-native-qrcode-svg';
import NavButton from '../../components/ButtonsWithIcon'
import { useNavigation } from '@react-navigation/native'
import { RootStackPAramList } from '../../constant/Type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type TakeIdNaviguationProp = NativeStackNavigationProp<RootStackPAramList,'SplahScreen'>

const SendQrCode = () => {
    const navigation = useNavigation<TakeIdNaviguationProp>()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f7f7' }}>
            <View style={{ marginHorizontal: 20 }}>
                <View>
                    <TouchableOpacity onPress={() => {

                    }}>
                        <Back />
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: 20, marginTop: 20, backgroundColor: colors.white, padding: 10, alignItems: 'center', borderRadius: 10 }}>
                    <QRCode
                        value="Just some string value"
                        size={250}
                        //   logo={{uri: base64Logo}}
                        //   logoSize={40}
                        //   logoBackgroundColor='transparent'
                        color={colors.blueColor}
                    />
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: '600', fontSize: 20 }} >Scan to get paid</Text>
                        <Text style={{ fontWeight: '300', fontSize: 15, textAlign: 'center' }}>hold the code inside the frame ,it will be scanned automatically</Text>
                    </View>
                </View>

                <NavButton name="Continuer" nameIcon="" fill={false} verify={false} route="CountryScreen" navigation={navigation} />
                <NavButton name="  Share to receive money " nameIcon="send" fill={true} verify={false} route="CountryScreen" navigation={navigation} />

            </View>

        </SafeAreaView>
    )
}

export default SendQrCode

const styles = StyleSheet.create({})