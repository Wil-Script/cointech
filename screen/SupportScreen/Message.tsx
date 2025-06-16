import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TitleStyles } from '../../styles/Title'
import Back from '../../components/Back'
import colors from '../../constant/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome'
import { RootStackPAramList } from '../../constant/Type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
type SupportNaviguation = NativeStackNavigationProp<RootStackPAramList,'Message'>
const Message = () => {
          const navigation = useNavigation<SupportNaviguation>() 
    return (
        <SafeAreaView style={{ backgroundColor: colors.griseStatutBar, flex: 1 }}>
            <View style={{ position: 'relative', flex: 1, marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Back />
                    <Text style={{ ...TitleStyles.TitlemdRegular, marginHorizontal: 'auto' }}> Support</Text>
                </View>
                {/* <View style={{flexDirection:'row',position:'absolute',bottom:20,alignItems:'center'}}> */}

                <KeyboardAvoidingView
                    behavior='height' style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 10,position:'absolute',bottom:20
                    }}>
                    <TouchableOpacity>
                        <Icon name='paperclip' size={20} />
                    </TouchableOpacity>
                    <TextInput style={{ backgroundColor: colors.white, width: '80%', borderRadius: 20, marginLeft: 10, color: colors.black, fontSize: 16, padding: 15 }} placeholder='envoyer un message ' placeholderTextColor={colors.gris} />
                    <TouchableOpacity >
                        <Icon name='send' size={20} color={colors.white} style={{ backgroundColor: colors.blueColor, height: 40, width: 40, borderRadius: 20, textAlign: 'center', paddingTop: 10 }} />
                    </TouchableOpacity>


                </KeyboardAvoidingView>


            </View>
            {/* </View> */}
        </SafeAreaView>
    )
}

export default Message

const styles = StyleSheet.create({})