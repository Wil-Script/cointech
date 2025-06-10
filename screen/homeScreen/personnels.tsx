import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, TouchableOpacity,FlatList, Platform } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import Buttons from "../../components/Buttons";
import styles from "./styles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { StackNavigationProp } from '@react-navigation/stack';
import type { rooteur } from './type';

type ConnectionScreenNavigationProp = StackNavigationProp<rooteur, 'personnels'>;

type Props = {
  navigation: ConnectionScreenNavigationProp;
};

const flags = [
    { code: 'fr', emoji: 'FR', label: 'France '},
    { code: 'cm', emoji: 'CM', label: 'Cameroun'},
    { code: 'br', emoji: 'BR', label: 'Bresil'},
    { code: 'ci', emoji: 'CI', label: 'Cote d/Ivoire'}
];

export default function personnel({ navigation }: Props) {
  const [code, setCode] = useState<string |null>(null); //afficher les drapeau des pays
  const [pays, setPays] = useState<string |null>(null); //afficher les noms des dans l'espaces reserver 
  const [nom, setNom] = useState(''); // declaration d'une constante interne dans le code
  const [nameuse, setNameuse] = useState('');
  const [erreur, setErreur] = useState('');
  const [date1, setDate1] = useState<Date | null>(null); // date affichée
  const [date2, setDate2] = useState(new Date()); // date temporaire
  const [vdate, setVdate] = useState(false); // contrôle affichage calendrier

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('personnels')} style={{ marginRight: 15 }}>
          <Text style={{ fontSize: 18 }}>→</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const verifier = () => {
    if (nom.trim() === '') {
      setErreur('Ce champ est obligatoire');
    } else {
      setErreur('');
    }
  };
  const renderFlag = ({ item}: any) => (
    <TouchableOpacity
    style={[
        styles.subtitle,
        code === item.code &&  styles.selectedFlag, 
    ]}
    onPress={() => setCode(item.code)}
 >

    <Text style={styles.flagEmoji}>{item.emoji}</Text>
    <Text style={styles.flagEmoji}>{item.label}</Text>
    </TouchableOpacity>
  );
  const handleDateChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setDate1(selectedDate);
    }
  };

  const handleValidate = () => {
    setVdate(false);
    const selected = flags.find((item) => item.code === code);
    if (selected) {
        setPays(selected.label)
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return `${date.getDate().toString().padStart(2, '0')}/${
      (date.getMonth() + 1).toString().padStart(2, '0')
    }/${date.getFullYear()}`;
  }; // donne le format de date a notre donnee et ajuste le calendrier a chaque ajustement 
    // et permet d'obtenir la derniere date 

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ alignItems :'center'}}>Entrez vos informations</Text>
        <Text style={{ alignItems :'center'}}>Remplissez convenablement tous les champs</Text>

        <Text style={styles.subtitle}>Nom</Text>
        <TextInput
          style={[styles.input, erreur ? styles.erreurs : null]}
          value={nom}
          onChangeText={setNom}
          placeholder="Entrez votre nom"
        />
        {erreur ? <Text style={{ color: 'red' }}>{erreur}</Text> : null}

        <Text style={styles.subtitle}>Prénom</Text>
        <TextInput
          placeholder="Veuillez saisir votre prénom"
          placeholderTextColor="#888"
          style={styles.input}
          value={nameuse}
          onChangeText={setNameuse}
        />

        <TouchableOpacity 
         style={{
            backgroundColor:'blue',
            borderWidth: 10,
            borderColor:'white',
            paddingHorizontal:12,
            paddingVertical:16,
            borderRadius:30,
            marginHorizontal:20,
         }} // introduction d'un nouveau style
         onPress={verifier}>
          <Text style={styles.input}>Valider</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.new} onPress={() => setVdate(true)}>
          <Text style={styles.input}>Choisir la date de naissance</Text>
        </TouchableOpacity>

        {vdate && (
          <View style={styles.pickerContainer}>
            <DateTimePicker
              value={date2}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
              maximumDate={new Date()}
            />
            <TouchableOpacity style={styles.new} onPress={handleValidate}>
              <Text style={styles.new}>Valider la date</Text>
            </TouchableOpacity>
          </View>
        )}

        {date1 && (
          <Text style={{ marginTop: 10 }}>
            Date sélectionnée : <Text style={{ fontWeight: 'bold' }}>{formatDate(date1)}</Text>
          </Text>
        )}
        <Text style={styles.subtitle}>Choisissez votre pays:</Text>
      <FlatList
        data={flags}
        keyExtractor={(item) => item.code}
        renderItem={renderFlag}
        numColumns={4}
        
      />

      <TouchableOpacity
        style={[styles.button, !code && styles.buttonDisabled]}
        onPress={handleValidate}
        disabled={!code}
      >
        <Text style={styles.input}>Valider</Text>
      </TouchableOpacity>

      {pays && (
        <View style={styles.resultBox}>
          <Text style={styles.subtitle}>
            ✅ Pays sélectionné : {pays}
          </Text>
          <Buttons name="verifier" fill={false} verify={true} />
      </View>
      )
    }
    </View>
    </SafeAreaView>
  );
}































 