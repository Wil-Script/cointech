import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../constant/colors';
import imagePath from '../../constant/imagePath';

export default function Rec() {
  const [select, setSelect] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View>
          <Image source={imagePath.back} style={styles.backIcon} />
        </View>

        <View style={styles.selectTitle}>
          <Text style={styles.titleText}>Select a purpose</Text>
        </View>

        <View style={styles.subTextContainer}>
          <Text>Select a Method for Sending</Text>
        </View>

        {/* Personnal Option */}
        <TouchableOpacity
          style={[styles.option,
          select === 'personnal' && { borderBottomColor: colors.blueColor, borderBottomWidth: 3 }
          ]}
          onPress={() => setSelect('personnal')}>
          <View
            style={[
              styles.circle,
              select === 'personnal' && styles.circleSelected,
            ]}
          />
          <Image source={imagePath.person} style={styles.personIcon} />
          <View style={styles.optionText}>
            <Text>Personnal</Text>
            <Text>pay your friends and family</Text>
          </View>
        </TouchableOpacity>

        {/* Business Option */}
        <TouchableOpacity
          style={[styles.option,
              select === 'business' && {borderBottomColor:colors.blueColor,borderBottomWidth:3}
          ]}
          onPress={() => setSelect('business')}>
          <View
            style={[
              styles.circle,
              select === 'business' && styles.circleSelected,
            ]}
          />
          <Image source={imagePath.briefcase} style={styles.businessIcon} />
          <View style={styles.optionText}>
            <Text>Business</Text>
            <Text>pay your employee</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  container: {
    marginHorizontal: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
    marginTop: 30,
  },
  selectTitle: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  titleText: {
    fontSize: 26,
    fontWeight: '600',
  },
  subTextContainer: {
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  option: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginRight: 10,
  },
  circleSelected: {
    backgroundColor: colors.blueColor,
    borderColor: colors.blueColor,
  },
  personIcon: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  businessIcon: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
  optionText: {
    marginHorizontal: 10,
  },
});
