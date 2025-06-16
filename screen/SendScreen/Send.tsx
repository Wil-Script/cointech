import Buttons from '../../components/Buttons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import colors from '../../constant/colors';
import imagePath from '../../constant/imagePath';
import { CountryPicker } from "react-native-country-codes-picker";
import React, { useState } from 'react';
import { getAllInfoByISO } from 'iso-country-currency';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NavButton from '../../components/ButtonsWithIcon';
import { TitleStyles } from '../../styles/Title';


export default function Send() {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState('');
  const [items, setItems] = useState([
    {
      title:'Enter amount',
      value:'Continuer'
    },
    {
      title:'Send Request',
      value:'Request'
    },
  ]);
  const [show, setShow] = useState(false);
  const [countryCurrenty , setCountryCurrenty] = useState('');
  const [countryflag, setCountryflag] = useState('');
  const [sendRequest, setSendRequest] = useState(true)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F7F7' }}>
      <View style={{ marginHorizontal: 20 }}>
        <View>
          <TouchableOpacity onPress={()=>{
            if(sendRequest){
              //
            }else{
              setSendRequest(true)
            }
          }}>
            <Image
            source={imagePath.back}
            style={{ width: 20, height: 20 }}
          />
          </TouchableOpacity>
          
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontWeight: '600', fontSize: 20 }}>
            {sendRequest?items[0].title:items[1].title}
          </Text>
          <Text>enter an amount to get paid</Text>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            padding: 20,
            alignItems: 'center',
            borderRadius: 20,
            marginTop: 20,
            gap: 5
          }}>
          <Image source={imagePath.Netflix} style={{ width: 40, height: 40 }} />
          <Text>mehid assan </Text>
          <Text>juniordita@gmail.com</Text>
          {/* <DropDownPicker
          style={{width:50,height:50,alignSelf:'center'}}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          dropDownDirection="BOTTOM"
        /> */}
          {
            sendRequest && (<>

              <TouchableOpacity style={{  width: '20%', height: '18%', flexDirection: 'row' }} onPress={() => setShow(true)}>
                <MaterialIcons name='keyboard-arrow-down' size={20} /><Text style={{ fontSize: 20 }}>{countryflag && countryflag}</Text>
              </TouchableOpacity>
              <CountryPicker
                show={show}
                lang='en'
                pickerButtonOnPress={(item) => {
                  const code = item.code
                  const currenty = getAllInfoByISO(code)
                  setCountryCurrenty(currenty.currency);
                  setCountryflag(item.flag)
                  setShow(false);
                }}
              />
              <TextInput keyboardType="number-pad" value={amount} onChangeText={(text)=>setAmount(text)} style={{ borderBottomWidth: 1, width: '40%', fontSize: 30, color: colors.black ,textAlign:'center'}} />
            </>
            )
          }
        </View>
        {sendRequest ? (
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.blueColor,
                borderWidth: 0,
                borderColor: colors.white,
                paddingHorizontal: 12,
                paddingVertical: 16,
                borderRadius: 30,
                marginHorizontal: 20,
              }}
              onPress={()=>{
                
                if(amount ) setSendRequest(false)}}
              >
              <Text style={[styles.textStyles, {
                color: colors.white,
              },
              TitleStyles.labelLgMedium
              ]} >Continuer</Text>
            </TouchableOpacity>
            <TouchableOpacity><Text></Text></TouchableOpacity>
          </View>
          ):(
          <View style={{ marginTop: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: colors.blueColor,
                borderWidth: 0,
                borderColor: colors.white,
                paddingHorizontal: 12,
                paddingVertical: 16,
                borderRadius: 30,
                marginHorizontal: 20,
              }}>

              <Text style={[styles.textStyles, {
                color: colors.white,
              },
              TitleStyles.labelLgMedium
              ]} >Request {countryCurrenty} {amount} </Text>
            </TouchableOpacity>
          </View>)}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textStyles: { textAlign: 'center' },

})
