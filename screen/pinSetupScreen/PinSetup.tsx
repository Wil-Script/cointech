import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constant/colors'
import Back from '../../components/Back'
import *  as  Progress from 'react-native-progress';
import { TitleStyles } from '../../styles/Title'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackPAramList } from '../../constant/Type'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

type VerrificationNaviguationProp = NativeStackNavigationProp<RootStackPAramList, 'Pin'>

const CELL_COUNT = 4;
const PinSetup = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill<TextInput>({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    useEffect(() => {
        if(Number(value)>999){
            navigation.navigate('Welcome')
        }
    }, [value])
    const navigation = useNavigation<VerrificationNaviguationProp>()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Back />
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}></View>
            <Progress.Bar progress={0.8} width={370} unfilledColor={colors.griseStatutBar} height={6} borderWidth={0} borderRadius={20} />
            <View style={{ marginTop: 20, marginHorizontal: 20 }}>
                <Text style={{ ...TitleStyles.TitlemdBold, marginTop: 20 }}>Create passcode</Text>
                <Text style={{ ...TitleStyles.labelLgRegular, textAlign: 'center' }}>this info to be accurate with your ID documents</Text>
            </View>
            <View>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    InputComponent={TextInput}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            <Text style={styles.cellText}>
                                {symbol ? '●' : (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>)} />
            </View>



            <View>
            </View>
        </SafeAreaView>
    )
}

export default PinSetup

const styles = StyleSheet.create({
    root: { padding: 20 },
    title: { textAlign: 'center', fontSize: 24 },
    codeFieldRoot: { marginTop: 20, flexDirection: 'row', justifyContent: 'center' },
    cell: {
        width: 30,
        height: 30,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    cellText: {
        fontSize: 20,

    },
    focusCell: {
        borderColor: '#007AFF',
    },
})