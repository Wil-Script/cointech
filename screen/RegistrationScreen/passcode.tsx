import {Image,
  View,
  Text,
  NativeAppEventEmitter,
  StyleSheet,
  TextInput,
  ViewComponent,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constant/colors';
import style from './style';
import imagePath from '../../constant/imagePath';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function () {
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1,  backgroundColor:colors.white,}}>
      <View style={{alignContent:'flex-end' ,marginHorizontal:3, marginTop:20,}}>
        <Image source={imagePath.back} style={{width:20,height:20}}/>
      </View>
      <View style={{ marginTop:50,paddingHorizontal:30, }}>
        <Text style={{fontSize:25, fontWeight:"600"}}>Create passcode</Text>
        <Text>This infos to be accurate with your ID document</Text>
      </View>
      <View>
        <Text
          style={{
            marginLeft: -300,
            marginBottom: 100,
            bottom: 290,
            fontSize: 28,
          }}>
          {' '}
          {'←'}{' '}
        </Text>
      </View>
      <View style={{alignItems: 'center',}}>
        <TextInput
          style={styles.y}
          placeholder="entrez votre mot de passe"
          placeholderTextColor={colors.black}
          secureTextEntry={true}
          editable={true}
          value={password}
          onChangeText={text => setPassword(text.replace(/[^0-9]/g, ''))} // Garde uniquement les chiffres
          keyboardType="number-pad"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    color: colors.black,
  },
  Yannis: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  hugor: {
    marginBottom: -90,
    bottom: 170,
    textAlign: 'center',
    fontWeight: 600,
    lineHeight: 100,
    fontSize: 25,
  },
  container: {
    marginBottom: -10,
    alignItems: 'center',
    color:colors.blueColor,
    fontSize: 12,
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 50,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusCell: {
    borderColor: '#007AFF',
  },
  text: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
    marginTop: 100,
    fontWeight: '600',
    textAlign: 'center',
  },

  y: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    color:colors.black,
  
  },
});
