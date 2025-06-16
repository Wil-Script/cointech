import { View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Camera, useCameraDevice,useCodeScanner } from 'react-native-vision-camera'
// import Scanner 
import { useNavigation } from '@react-navigation/native'
import { RootStackPAramList } from '../../constant/Type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import colors from '../../constant/colors'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

// type OpenCameraNaviguationProp = NativeStackNavigationProp<RootStackPAramList, 'OpenCamera'>

const OpenCamera = () => {
    useEffect(() => {
        CheckPermission();
    }, [])

    const CheckPermission = async () => {
        const newCameraPermission = await Camera.requestCameraPermission();
        const newMicrophonePermission = await Camera.requestMicrophonePermission();
        console.log(newCameraPermission)
    };
    const codeScanner = useCodeScanner({
  codeTypes: ['qr', 'ean-13'],
  onCodeScanned: (codes) => {
    console.log(`Scanned ${codes.length} codes!`)
  }
})
    // definit une valeur unique a chaque rendues
    const cameraRef = useRef<Camera>(null)
    const CameraArriere = useCameraDevice('back');
    const [imageData, setImageData] = useState('');
    const [takephoto, setTakePhoto] = useState(false)
    // const naviguation = useNavigation<OpenCameraNaviguationProp>()



    // selection la camera arriere front pour la camera avant

    if (CameraArriere == null) {
        return <ActivityIndicator />
    }
    const TakePictures = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePhoto();
            setImageData(photo.path)
            try {
                await AsyncStorage.setItem('photo',photo.path);
            } catch (e) { console.log(e) }
            setTakePhoto(true)
            await CameraRoll.save(`file://${photo.path}`, {
                type: 'photo',
            })
            console.log(photo.path)
            // naviguation.navigate('Verrification')
        }
    }
    return (
        <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <Camera ref={cameraRef}
                        style={{ flex: 1, position: 'relative' }}
                        device={CameraArriere}
                        isActive={true}
                        photo={true}
                        codeScanner={codeScanner}
                    />
                    <View style={{ backgroundColor: 'rgba(0,0,0,0.7)', width: '100%', height: 120, position: 'absolute', bottom: 0 }}>
                    </View>
                    <View style={{ position: 'absolute', bottom: 55, alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { TakePictures() }
                            // naviguation.navigate('Verrification')
                        } style={{
                            height: 60,
                            width: 60,
                            backgroundColor: colors.white,
                            borderRadius: 40

                        }}>
                            {/* <Buttons name='continiuer' fill={false} verify={true} /> */}

                        </TouchableOpacity>
                    </View>

                </View>
        </View>

    )
}


export default OpenCamera