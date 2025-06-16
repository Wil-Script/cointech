import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Back from '../../components/Back'
import colors from '../../constant/colors'
import { TitleStyles } from '../../styles/Title'
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  BarChart,
} from "react-native-chart-kit";
import imagePath from '../../constant/imagePath'
const Spending = () => {
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["2-8", "9-15", "16-22", "23-29", "30-1"],
    datasets: [
      {
        data: [100, 53, 80, 45, 50]
      }
    ]
  };
  const [moisSelectionne, setMoisSelectionne] = useState('');
  const mois = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  const SpendingList = [
    {
      name: 'Google',
      logo: imagePath.Google,
      date: '1st jan 7:20pm',
      montant: 15.99
    },
    {
      name: 'Netflix',
      logo: imagePath.Netflix,
      date: '1st feb 7:00 am',
      montant: 90.99
    },
    {
      name: 'Telegram',
      logo: imagePath.Telegram,
      date: '23 jun 6:20pm',
      montant: 15.99
    },
  ]
  // pour recuperre  les images

  return (
    <SafeAreaView style={{ backgroundColor: colors.griseStatutBar, flex: 1, }}>
      <ScrollView style={{ marginLeft: 20, marginRight: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Back />
          <Text style={{ ...TitleStyles.TitlemdRegular, marginHorizontal: 'auto' }}>Spending</Text>
        </View>
        <View style={{ backgroundColor: '#EAEBFF', marginTop: 20, width: '40%', borderRadius: 20, }}>
          <Picker selectedValue={moisSelectionne}
            onValueChange={(itemValue) => setMoisSelectionne(itemValue)}>
            {mois.map((moisNom, index) => (
              <Picker.Item label={moisNom} value={moisNom} key={index} style={{ ...TitleStyles.TitlemdRegular, color: colors.black }} />
            ))}
          </Picker>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
          <View style={{ backgroundColor: '#304FFF', padding: 20, borderRadius: 20 }}>
            <Text style={{ ...TitleStyles.BodymdRegular, color: colors.white }}><Icon name="credit-card" size={15} />  Total Spend</Text>
            <Text style={{ ...TitleStyles.TitlelgRegular, color: colors.white }}>$500.000</Text>
          </View>
          <View style={{ backgroundColor: '#FED835', padding: 20, borderRadius: 20 }}>
            <Text style={{ ...TitleStyles.BodymdRegular }} ><Icon name="credit-card" size={15} color={colors.black} />  Available balance </Text>
            <Text style={{ ...TitleStyles.TitlelgRegular }}>$20,000.00</Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <BarChart
            style={{ backgroundColor: '#fff' }}
            data={data}
            width={320}
            height={220}
            yAxisLabel="$"
            yAxisSuffix=''
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#fff",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: () => '#304FFF',
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', backgroundColor: colors.white, padding: 20, borderRadius: 20 }}>
          <Image source={imagePath.spending} style={styles.size} />
          <Image source={imagePath.income} style={styles.size} />
          <Image source={imagePath.bill} style={styles.size} />
          <Image source={imagePath.saving} style={styles.size} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ ...TitleStyles.TitlemdXBold }} >SPending List</Text>
          <MaterialIcons name="compare-arrows" size={40} color="#28a745" />
        </View>
        {SpendingList.map((index, key) => {
  
         return  <View key={key} style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 20, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={index.logo} style={{ ...styles.size, borderRadius: 20 }} />
              <View style={{ marginHorizontal: 10 }}>
                <Text style={{ ...TitleStyles.HeadlinesmRegular, opacity: 0.5 }}>{index.name}</Text>
                <Text style={{ ...TitleStyles.BodymdRegular, color: '#ccc' }}>{index.date}</Text>
              </View>
            </View>
            <Text style={{ ...TitleStyles.TitlesmBold, color: 'red' }}>
              -${index.montant}
            </Text>
          </View>
        })}

      </ScrollView>
    </SafeAreaView>
  )
}

export default Spending

const styles = StyleSheet.create({
  size: {
    width: 40,
    height: 40,
  }
})