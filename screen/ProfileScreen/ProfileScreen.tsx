import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TitleStyles } from '../../styles/Title'
import Back from '../../components/Back'
import imagePath from '../../constant/imagePath'
import colors from '../../constant/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage'
const ProfileScreen = () => {
    const  [picture,setPicture]=useState('')
    useEffect(()=>{ 
       const TakePhoto = async ()=> {
        try{
            let photo = await AsyncStorage.getItem('Photo')    
            if(photo){
                setPicture(photo)
            }

            }catch(e){
                console.error('erreur pour le fichier profiles ',3)
            }
    }
TakePhoto()},[])
    
    return (
        // <View>
        //   <Text>ProfileScreen</Text>
        // </View>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.griseStatutBar, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Back />
                <Text style={{ ...TitleStyles.TitlemdRegular, marginHorizontal: 'auto' }}>My Profile</Text>
            </View>
            <View style={{ backgroundColor: colors.white, padding: 10, marginTop: 20, borderRadius: 20 }}>
                <View style={{ alignItems: 'flex-end' }}><MaterialIcons name='edit' size={20} /></View>
                <View style={{ alignItems: 'center', width: '100%', marginTop: 20, gap: 5 }}>
                    <Image source={{uri:picture}} style={{ width: 65, height: 65, borderRadius: 30 }} />
                    <Text>Hugord Junior Dita </Text>
                    <Text>juniordita78@gmail.com</Text>
                    <Text>+237 671617223</Text>
                </View>
            </View>
            <View style={{ backgroundColor: colors.white, padding: 10, marginTop: 20, borderRadius: 20 }}>
                <View style={styles.option}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name='person' size={24} color={colors.blueColor} />
                        <Text style={{ color: '#000' }}> Personnal  Info</Text>
                    </View>
                    <TouchableOpacity>

                        <MaterialIcons name='chevron-right' size={36} color={colors.gris} />
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* <MaterialIcons name='' size={24} color={colors.blueColor}/> */}
                        <Image source={imagePath.bank} style={{ width: 24, height: 24 }} />
                        <Text style={{ color: '#000' }}> bank & card</Text>
                    </View>
                    <TouchableOpacity>
                        <MaterialIcons name='chevron-right' size={36} color={colors.gris} />
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name='attach-money' size={24} color={'red'} />
                        <Text style={{ color: '#000' }}> Transaction</Text>
                    </View>
                    <TouchableOpacity>

                        <MaterialIcons name='chevron-right' size={36} color={colors.gris} />
                    </TouchableOpacity>
                </View>
                <View style={styles.option}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name='settings' size={24} color={colors.blueColor} />
                        <Text style={{ color: '#000' }}> Settings</Text>
                    </View>
                    <TouchableOpacity>

                        <MaterialIcons name='chevron-right' size={36} color={colors.gris} />
                    </TouchableOpacity>
                </View>
                <View style={{ ...styles.option, borderBottomWidth: 0 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name='insert-chart' size={24} color={'green'} />
                        <Text style={{ color: '#000' }}> Data Privacy</Text>
                    </View>
                    <TouchableOpacity>

                        <MaterialIcons name='chevron-right' size={36} color={colors.gris} />
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    option: {
        borderBottomWidth: 1,
        borderColor: colors.gris,
        // opacity:0.4,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        // color:colors.black

    }
})