import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../constant/colors'
import { TitleStyles } from '../styles/Title'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { RootStackPAramList } from '../constant/Type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavButtonProps<RouteName extends keyof RootStackPAramList> = {
  route: RouteName;
  navigation: NativeStackNavigationProp<RootStackPAramList, any>;
  fill: boolean;
  verify: boolean;
  nameIcon: string;
  name: string;
}

export default function NavButton<RouteName extends keyof RootStackPAramList>({ route, navigation, name, fill, verify, nameIcon }: NavButtonProps<RouteName>) {

  return <View style={{ marginTop: 10 }}>
    {fill = verify ? false : fill}
    <TouchableOpacity disabled={verify} onPress={() => navigation.navigate(route as any)}
      style={{
        backgroundColor: verify ? colors.griseButton : fill ? colors.white : colors.blueColor,
        borderWidth: 1,
        borderColor: fill ? colors.blueColor : colors.white,
        paddingHorizontal: 10,
        paddingVertical: 16,
        borderRadius: 30,
        marginHorizontal: 20,
      }}>

      <Text style={[styles.textStyles, {
        color: verify ? colors.black : fill ? colors.blueColor : colors.white,
        opacity: verify ? 0.6 : 1,
      },
      TitleStyles.labelLgMedium
      ]} >
        <Icon name={nameIcon} size={22} color={verify ? colors.black : fill ? colors.blueColor : colors.white} />
        {name}</Text>
    </TouchableOpacity>
  </View>
}

// const ButtonsWithIcon = ({ name, fill, verify, nameIcon }: { name: string, fill: boolean, verify: boolean, nameIcon: string }) => {
//   return (
//     <View style={{ marginTop: 10 }}>
//       {fill = verify ? false : fill}
//       <TouchableOpacity disabled={verify} onPress={() => navigation.navigate('AddCard')}
//         style={{
//           backgroundColor: verify ? colors.griseButton : fill ? colors.white : colors.blueColor,
//           borderWidth: 1,
//           borderColor: fill ? colors.blueColor : colors.white,
//           paddingHorizontal: 10,
//           paddingVertical: 16,
//           borderRadius: 30,
//           marginHorizontal: 20,
//         }}>

//         <Text style={[styles.textStyles, {
//           color: verify ? colors.black : fill ? colors.blueColor : colors.white,
//           opacity: verify ? 0.6 : 1,
//         },
//         TitleStyles.labelLgMedium
//         ]} >
//           <Icon name={nameIcon} size={22} color={verify ? colors.black : fill ? colors.blueColor : colors.white} />
//           {name}</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default ButtonsWithIcon

const styles = StyleSheet.create({
  textStyles: {
    textAlign: 'center',
  }
})