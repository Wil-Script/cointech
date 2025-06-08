import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import RectangleScanner from 'react-native-rectangle-scanner'
import Buttons from '../../components/Buttons'
import { useNavigation } from '@react-navigation/native'
import { RootStackPAramList } from '../../constant/Type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import colors from '../../constant/colors'
import DocumentScanner, { ScanDocumentResponse } from 'react-native-document-scanner-plugin'


type OpenScanNaviguationProp = NativeStackNavigationProp<RootStackPAramList, 'OpenScan'>

const OpenScan = () => {
    const [imageUri, setImageUri] = useState<String[]>([]);
    const naviguation = useNavigation<OpenScanNaviguationProp>()

    useEffect(() => { scanDocument() }, [])
    const scanDocument = async (): Promise<void> => {
        // start the document scanner
        const { scannedImages }: ScanDocumentResponse = await DocumentScanner.scanDocument({
            croppedImageQuality: 100,
            maxNumDocuments: 2
        });

        // get back an array with scanned image file paths
        if (scannedImages && scannedImages.length > 0) {
            // set the img src, so we can view the first scanned image
            setImageUri([...imageUri, scannedImages[0]])
        }
        naviguation.navigate('TakePhoto')
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.gris }}>

        </View>
    )
}

export default OpenScan
