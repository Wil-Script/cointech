import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera'
import *  as  Progress from 'react-native-progress';
import colors from '../../constant/colors';
import imagePath from '../../constant/imagePath';
import { TitleStyles } from '../../styles/Title';
import CheckPermission from './Permission';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackPAramList } from '../../constant/Type';

type TakeIdNaviguationProp = NativeStackNavigationProp<RootStackPAramList,'TakeId'>

const TakeId = () => {

  const naviguation = useNavigation<TakeIdNaviguationProp>(); 

  return (
    <SafeAreaView style={{backgroundColor:'#fff',flex:1}}>
      <TouchableOpacity>
        <Image style={styles.imageStyle} source={imagePath.back} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Progress.Bar progress={0.2} width={370} unfilledColor={colors.griseStatutBar} height={6} borderWidth={0} borderRadius={20} />
        <Image style={styles.scanImage} source={imagePath.ScanId} />
        <Text style={{ ...TitleStyles.TitlelgBold, textAlign: 'center', marginTop: 10 }}>Scan Id documents to verify your identity</Text>
        <Text style={{ ...TitleStyles.BodymdMedium, color: colors.SousTitle, textAlign: 'center', marginTop: 10 }}>confirm you identity with just a few taps on your phone</Text>

        <TouchableOpacity style={{ borderRadius: 40, backgroundColor: colors.blueColor, marginTop: 75, padding: 5 }} onPress={() =>  
        { 
          // Permission()
           CheckPermission()
          // console.log('voici le retour de notre fonction',retour)
          naviguation.navigate('OpenScan')
          }

        }>
          <Image style={styles.ScanQr} source={imagePath.ScanQr} />
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', color: colors.SousTitle }}>Scan</Text>

      </View>
    </SafeAreaView>
  )
}

export default TakeId

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  imageStyle: {
    width: 18,
    height: 18,
    marginTop: 20,
    marginLeft: 10
  },
  scanImage: {
    width: 350,
    height: 350,
  },
  ScanQr: {
    width: 60,
    height: 60,
    // opacity:0.7,
  }
})