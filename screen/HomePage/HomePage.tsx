import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constant/colors'
import FA5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import Buttons from '../../components/Buttons'
import ButtonsWithIcon from '../../components/ButtonsWithIcon'
import { TitleStyles } from '../../styles/Title'
import imagePath from '../../constant/imagePath'

const HomePage = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.gris, }}>
            <ImageBackground source={imagePath.HomeBackground} style={styles.firstPart}>
                {/* <View style={styles.firstPart}> */}

                <View style={styles.SousSection1}  >
                    <Icon name='trophy' size={24} color={colors.white} />
                    <View style={styles.SeacrhBarSection}>
                        <Icon name='search' size={24} color={colors.white} />
                        <TextInput style={styles.Input} placeholderTextColor={colors.white} placeholder='Search "Payements"' />
                    </View>
                    <Icon name='bell-o' size={24} color={colors.white} />
                </View>
                <View style={styles.SousSection2}>
                    <Text style={{ ...TitleStyles.TitlexlXBold, color: colors.white }}>$20,000</Text>
                    <Text style={{ ...TitleStyles.labelmdRegular, color: colors.griseButton }} >available balance</Text>

                    <TouchableOpacity
                        style={{
                            borderWidth: 1,
                            borderColor: colors.white,
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 30,
                            marginHorizontal: 20,
                        }}>

                        <Text style={[styles.textStyles, {
                            color: colors.white,
                            opacity: 1,
                        },
                        TitleStyles.labelLgMedium
                        ]} >
                            <FA5 name='wallet' size={22} color={colors.white} />
                            {`  Add Money`}</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.ActionSection}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={imagePath.retrait} style={styles.size} />
                        <Text>Send</Text>
                    </View>
                    <Text style={styles.Bar} ></Text>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={imagePath.depot} style={styles.size} />
                        <Text>Request</Text>
                    </View>
                    <Text style={styles.Bar} ></Text>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={imagePath.bank} style={styles.size} />
                        <Text>Bank</Text>
                    </View>
                </View>

                {/* </View> */}
            </ImageBackground>

            <View style={styles.secondPart}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                    <Text style={{ ...TitleStyles.labelLgBold }}>Transaction </Text>
                    
                            <Icon name='long-arrow-right' size={25} />

                    {/* icon sur cette partie si la pour peut etre  vouloir afficher plsu d'information */}
                </View>
                <View style={{ backgroundColor: colors.white, borderRadius: 10, padding: 20 }}>
                    <View style={styles.ContainerInformationSecondPart}>
                        <View style={styles.SousSectionContainerInformation}>
                            <Image source={imagePath.spending} style={styles.size} />
                            <Text>Spending</Text>
                        </View>
                        <View style={styles.SousSectionContainerInformation}>
                            <Text style={{ color: 'red' }}>-$500</Text>
                            <Icon name='arrow-right' />

                        </View>
                    </View>
                    <View style={styles.ContainerInformationSecondPart}>
                        <View style={styles.SousSectionContainerInformation}>
                            <Image source={imagePath.income} style={styles.size} />
                            <Text>Income</Text>
                        </View>
                        <View style={styles.SousSectionContainerInformation}>
                            <Text style={{ color: 'green' }}>$3000</Text>
                            <Icon name='arrow-right' />

                        </View>
                    </View>
                    <View style={styles.ContainerInformationSecondPart}>
                        <View style={styles.SousSectionContainerInformation}>
                            <Image source={imagePath.bill} style={styles.size} />
                            <Text>Bills</Text>
                        </View>
                        <View style={styles.SousSectionContainerInformation}>
                            <Text style={{ color: 'red' }}>-$800</Text>
                            <Icon name='arrow-right' />

                        </View>
                    </View>
                    <View style={{ ...styles.ContainerInformationSecondPart, borderBottomWidth: 0 }}>
                        <View style={styles.SousSectionContainerInformation}>
                            <Image source={imagePath.saving} style={styles.size} />
                            <Text>Saving</Text>
                        </View>
                        <View style={styles.SousSectionContainerInformation}>
                            <Text style={{ color: 'orange' }}>$500</Text>
                            <Icon name='arrow-right' />

                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    textStyles: {
        textAlign: 'center',
    },
    firstPart: {
        // backgroundColor: colors.blueColor,
        paddingHorizontal: 10,
        position: 'relative',
        height: 300,
        // flex: 0.3,
        // marginTop:20
    },
    SousSection1: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    SeacrhBarSection: {
        flexDirection: 'row', alignItems: 'center',
        borderRadius: 20,
        backgroundColor: colors.white,
        opacity: 0.8,
        paddingLeft: 10
    },
    Input: {
        width: 250,
        height: 40,
        color: colors.black,
    },
    SousSection2: {
        alignItems: 'center',
        gap: 2,
        marginTop: 10
    },
    ActionSection: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
        position: 'absolute',
        bottom: -20,
        left: '20%',
        width: '70%',
    },
    Bar: {
        borderColor: colors.gris,
        borderLeftWidth: 1,

    },
    secondPart: {
        // flex:0.5,
        marginTop: 30,
        padding: 15,
        //  opacity:0.5

    },
    ContainerInformationSecondPart: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: colors.gris

    },
    SousSectionContainerInformation: {
        flexDirection: 'row',
        gap: 5,
        alignItems:'center',
    },
    size: {
        width: 35,
        height: 35
    }

})