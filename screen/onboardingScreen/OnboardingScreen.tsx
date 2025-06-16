import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Buttons from '../../components/Buttons'
import PagerView, { PagerViewOnPageSelectedEventData } from 'react-native-pager-view'
import colors from '../../constant/colors'
import imagePath from '../../constant/imagePath'
import { TitleStyles } from '../../styles/Title'
import { NativeSyntheticEvent } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackPAramList } from '../../constant/Type'
import { useNavigation } from '@react-navigation/native'
import ButtonsWithIcon from '../../components/ButtonsWithIcon'

type naviguationOnboardingScreen = NativeStackNavigationProp<RootStackPAramList,'OnboardingScreen'>
const OnboardingScreen = () => {
    const [currentPage,setCurrentPage] = useState(0)
    const pagerViewRef = useRef<PagerView>(null)
    const navigation = useNavigation<naviguationOnboardingScreen>()
    // gars ici c'est pour recuperer et mettre a jour le side sur lequels on se trouve
    const onPageSelected = (e:NativeSyntheticEvent<PagerViewOnPageSelectedEventData>)=>{
        setCurrentPage(e.nativeEvent.position)
    }
    // ici c'est pour pouvir changer de slide depuis le bouton
    const goToPage = (pageIndex:number)=>{
        if(pagerViewRef.current){
            pagerViewRef.current.setPage(pageIndex)
        }
    }
    const Tab = [1,2,3]
    const Texte =[
        {
        id:1,
        title:`Trusted by millions \n of people, part of \n one part`},
        {
        id:2,
        title:`Spend money \n abroad , and track \n your expense `},
        {
        id:3,
        title:`Receive Money \nFrom Anywhere in \n the world`}
    ]
    return (
        <View style={{ flex: 1, backgroundColor: colors.white}}>
            <View style={styles.pagerView}>
            <PagerView ref={pagerViewRef} initialPage={0} style={{flex:0.7}}onPageSelected={onPageSelected}>
                <View key='0' style={styles.container} >
                    <Image source={imagePath.ClipPathGroup} style={styles.imageStyle} /> 
                </View>
                <View key='1' style={styles.container}>
                    <Image source={imagePath.SendMoneyAbroad} style={styles.imageStyle} />
                </View>
                <View key='2' style={styles.container}>
                    <Image source={imagePath.ReceiveMoney} style={styles.imageStyle} />
                   </View>
            </PagerView>
                   <View style={{flexDirection:'row',marginTop:20,justifyContent:'center'}}>
                        {Tab.map((_,index)=>{
                            return(
                                <TouchableOpacity key={index} style={{...styles.buttons,backgroundColor: currentPage==index?colors.blueColor:colors.griseStatutBar,width:currentPage==index?15:35}}  onPress={()=>{
                                     goToPage(index)   
                                }}></TouchableOpacity>
                            )
                        })}
                    </View>
                    { <Text style={{ ...styles.Title, ...TitleStyles.TitlexlSemiBold }}>{Texte[currentPage].title}</Text>}
                  </View>  
                  <></>
                  <ButtonsWithIcon  navigation={navigation} nameIcon='' name=' Next' fill={false} verify={false} route='Connection' />
        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    pagerView: {
        flex: 0.9,
        marginTop:40
    },
    imageStyle:
        {},
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        marginTop: 24,
        textAlign: 'center',
    },
    buttons:{
        borderWidth:0.3,
        borderColor:colors.black,
        borderRadius:8,
        // width:35,
        height:10,
        backgroundColor:colors.gris,
        marginHorizontal:7,
    }

})