import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import *  as  Progress from 'react-native-progress';
import colors from '../../constant/colors';
import imagePath from '../../constant/imagePath';
import { TitleStyles } from '../../styles/Title';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackPAramList } from '../../constant/Type';
import { useNavigation } from '@react-navigation/native';

type TakePhotoNavigationProp = NativeStackNavigationProp<RootStackPAramList,'TakePhoto'>
const TakePhoto = () => {
  const Navigation = useNavigation<TakePhotoNavigationProp>()
  return (
    <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1,position:'relative' }}>
      <TouchableOpacity>
        <Image style={styles.imageStyle} source={imagePath.back} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Progress.Bar progress={0.6} width={370} unfilledColor={colors.griseStatutBar} height={6} borderWidth={0} borderRadius={20} />
        <Image style={styles.scanImage} source={imagePath.photo} />
        <Text style={{ ...TitleStyles.TitlelgBold, textAlign: 'center', marginTop: 10 }}>Tahe seflie to verify your identity</Text>
        <Text style={{ ...TitleStyles.BodymdMedium, color: colors.SousTitle, textAlign: 'center', marginTop: 10 }}>quick and esay identification using your phone's camera. Confirm you identity with self-captured photo</Text>

      </View>
      <View style={{position:'absolute',bottom:10,left:'40%'}}>
          <TouchableOpacity style={{ borderRadius: 40, backgroundColor: colors.blueColor, padding: 5 }} 
           onPress={()=>{
            Navigation.navigate('OpenCamera')
           }}
           >
            <Image style={styles.ScanQr} source={imagePath.camera} />
          </TouchableOpacity>
          <Text style={{ textAlign: 'center', color: colors.SousTitle }}>Picture</Text>
        </View>
    </SafeAreaView>
  )
}

export default TakePhoto

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