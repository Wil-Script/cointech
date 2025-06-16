import React from 'react';
import { View, Image, Text } from 'react-native';
import Buttons from '../../components/Buttons';
import imagePath from '../../constant/imagePath';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../constant/colors';

export default function Valide() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={imagePath.valide} style={{ width: 350, height: 350 }} />

        <View
          style={{
            backgroundColor: colors.white,
            padding: 100,
            paddingHorizontal: 175,
          }}
        ></View>
      </View>
      <View style={{ alignItems: 'center', bottom: 220, gap: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>
          Verify your phone number {'\n'} before we send code
        </Text>
        <Text>
          {' '}
          Is this correect ?{' '}
          <Text style={{ fontWeight: '600' }}>+237690263590</Text>
        </Text>
      </View>
      <View style={{ left: 60, width: '70%', bottom: 210 }}>
        <Buttons name="Yes" fill={false} verify={false} />
        <Buttons name="NO" fill={true} verify={false} />
      </View>
    </SafeAreaView>
  );
}
