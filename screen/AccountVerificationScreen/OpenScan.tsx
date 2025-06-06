import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import RectangleScanner from 'react-native-rectangle-scanner'
import Buttons from '../../components/Buttons'
import { useNavigation } from '@react-navigation/native'
import { RootStackPAramList } from '../../constant/Type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import colors from '../../constant/colors'
import DocumentScanner, { ScanDocumentResponse } from 'react-native-document-scanner-plugin'


//   interface ScanDocumentResponse {
//     scannedImages?: string[];
//     // autres propriétés si nécessaire
// }
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
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.gris }}>
            {
                imageUri[0] && (
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, alignItems: 'center', marginTop: 20, gap: 30 }}>
                            <Image
                                source={{ uri: imageUri[0] as string }}
                                style={{ width: 311, height: 215 }}
                                resizeMode='contain'
                            />
                            <Image
                                source={{ uri: imageUri[1] as string }}
                                style={{ width: 311, height: 215 }}
                                resizeMode='contain'
                            />

                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                            {/* <Buttons name='continuer' fill={false} verify={false} /> */}
                            <Pressable onPress={() => { naviguation.navigate('TakePhoto') }}>
                           <Text>Suite</Text>
                        </Pressable>
                        </View>
                        <Pressable onPress={() => { setImageUri(['']) }}>
                           <Text>hugord</Text>
                        </Pressable>
                    </View>

                )
            }


        </View>
    )
}

export default OpenScan
