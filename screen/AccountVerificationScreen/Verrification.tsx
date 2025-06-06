import { ActivityIndicator, FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '../../constant/imagePath'
import colors from '../../constant/colors'
import *  as  Progress from 'react-native-progress';
import { Checkbox } from 'react-native-paper'
import { TitleStyles } from '../../styles/Title'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackPAramList } from '../../constant/Type'
import { useNavigation } from '@react-navigation/native'

type VerrificationNaviguationProp = NativeStackNavigationProp<RootStackPAramList,'Verrification'>
const Verrification = () => {
  const [activity,setActivity] = useState(false)

  useEffect(()=>{
    const timer =setTimeout(()=>setActivity(true),1000)
    return ()=> clearTimeout(timer)
  },[])
       const navigation = useNavigation<VerrificationNaviguationProp>()

  useEffect(()=>{
    if(activity){
    const navigationTimer =setTimeout(()=>
      {navigation.navigate('Welcome')},3000)
   return ()=> clearTimeout(navigationTimer);
    }
  },
[activity])
          
     
  const [information, useInformation] = useState([
    {
      id: 1,
      title: 'Phone verified',
      verified: true
    },
    {
      id: 2,
      title: 'Cheking up documen Id',
      verified: true
    },
    {
      id: 3,
      title: 'virifying photo',
      verified: true
    }
  ])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white, }}>
      <TouchableOpacity onPress={()=>{navigation.navigate('TakePhoto')}}>
        <Image style={styles.imageStyle} source={imagePath.back} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Progress.Bar progress={0.9} width={370} unfilledColor={colors.griseStatutBar} height={6} borderWidth={0} borderRadius={20} />
        <Image style={styles.verificationImage} source={imagePath.verification} />
        <Text style={{ ...TitleStyles.TitlelgBold, textAlign: 'center', marginTop: 10 }}>Setting up your account</Text>
        <Text style={{ ...TitleStyles.BodymdMedium, color: colors.SousTitle, textAlign: 'center', marginTop: 10 }}>we are analyzing your data to verify</Text>
        <FlatList
          data={information}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ ...styles.verificationContainer, borderBottomWidth: item.id === 3 ? 0 : 0.8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.number}>
                  <Text >{item.id}</Text>
                </View>
                <Text style={{ ...TitleStyles.labelLgRegular, color: colors.black, opacity: 0.6 }}>{item.title}</Text>
              </View>
              {
                activity?<Checkbox
                  status={item.verified ? 'checked' : 'unchecked'}
                />:<ActivityIndicator/> 
              }
                
              

            </View>
          )}
        />
      </View>

    </SafeAreaView>
  )
}

export default Verrification

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
  verificationImage: {
    width: 300,
    height: 300,
  },
  verificationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth:1,
    borderColor: colors.gris,
    // gap:50,
    marginTop: 10,
    padding: 20,
    alignItems: 'center'
  },
  number: {
    backgroundColor: colors.blueColor,
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign: 'center',
    opacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40
  },
  
})