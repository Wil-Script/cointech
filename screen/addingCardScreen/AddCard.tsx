import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constant/colors'
import Back from '../../components/Back'
import InputComposants from '../../components/InputComposants'
import { TitleStyles } from '../../styles/Title'
import Buttons from '../../components/Buttons'
import  {  LiteCreditCardInput,CreditCardFormData,CreditCardFormField }  from  "react-native-credit-card-input" ; 


const AddCard = () => {

const [focusedField, setFocusedField] = useState<CreditCardFormField>();
 const [formaData,setFormaData] = useState<CreditCardFormData>()
    return (
   <SafeAreaView style={{flex:1,backgroundColor:colors.griseStatutBar,opacity:1}}>
    <Back/>
    <View style={{marginHorizontal:20}}>
            <Text style={{...TitleStyles.TitlelgRegular,marginTop:10}}>Add card</Text>
    <Text style={{...TitleStyles.labelmdRegular}} >enter you credit card info into the box below</Text>
    </View>

    <View style={styles.container}>
        <Text style={{...TitleStyles.labelmdRegular,marginTop:10}}>Account Holder Name:</Text>
        <InputComposants nameIcon={false} placeholder='Full name'/>
        <Text style={{...TitleStyles.labelmdRegular,marginTop:10}}>Email:</Text>
        <InputComposants nameIcon='envelope' placeholder='hugord@gmai.com'/>
        <Text style={{...TitleStyles.labelmdRegular,marginTop:10}}>Card Number:</Text>
        < LiteCreditCardInput  inputStyle={{color:colors.black}} style={styles.creditCard} onFocusField={setFocusedField} onChange={setFormaData} />
        <Buttons  name='verify' fill={false} verify={true}/>
    </View>
   </SafeAreaView>
  )
}

export default AddCard

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        marginTop:20,
    },
    creditCard:{
                borderWidth:1,
                borderColor:colors.gris,
                marginTop:10,
                borderRadius:10,
                padding:10,
                paddingLeft:40,
                backgroundColor:colors.white,
        // backgroundColor:colors.white
    }
})