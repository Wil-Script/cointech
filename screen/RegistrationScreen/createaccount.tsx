import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CountryPicker } from "react-native-country-codes-picker";
import Buttons from '../../components/Buttons';
import colors from '../../constant/colors';
import imagePath from '../../constant/imagePath';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CreateAccount() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('CM');
  const [callingCode, setCallingCode] = useState<string>('237');
  const [show, setShow] = useState(false);



  return (
    <SafeAreaView style={styles.Yannis}>
      <View>
        <Image
          source={imagePath.back}
          style={{ width: 20, height: 20, marginTop: 20 }}
        />
      </View>
      <View style={{ bottom: 20, paddingHorizontal: 10 }}>
        <Text style={styles.labe}>create an account</Text>
        <Text style={{ fontSize: 15 }}>
          Enter your mobile number to verify your account
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Numéro de téléphone</Text>
        <View style={styles.phoneContainer}>
          
          <CountryPicker
            show={show}
            lang='fr'
            pickerButtonOnPress={(item) => {
              const Country = `(${item.dial_code}) ${item.flag}  ${item.code}`

              setCallingCode(item.dial_code);
              setCountryCode(item.flag);
              setShow(false);
            }}
          />
          <Text style={styles.countryCode}>+{callingCode}</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="6 00 00 00 00"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <Text style={styles.label}>Mot de passe</Text>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Icon name="lock" size={20} color="black" />
      </View>
      <View
        style={{ flex: 1, justifyContent: 'center', marginBottom: 1, top: 50 }}
      >
        {' '}
        <Buttons name="Sign up" fill={false} verify={true} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    marginBottom: 8,
    marginTop: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  countryCode: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    marginTop: 10,
  },
  labe: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 17,
    fontWeight: '600',
    top: -5,
    paddingTop: 40,
    paddingBottom: 1,
  },
  Yannis: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
