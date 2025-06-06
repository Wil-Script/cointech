import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Camera, useCameraDevice, } from 'react-native-vision-camera'
// import Scanner 
import RectangleScanner from 'react-native-rectangle-scanner'
import Buttons from '../../components/Buttons'
import { useNavigation } from '@react-navigation/native'
import { RootStackPAramList } from '../../constant/Type'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type OpenCameraNaviguationProp = NativeStackNavigationProp<RootStackPAramList,'OpenCamera'>

const OpenCamera = () => {
    const ScannerRef = useRef<any>(null)
    const [imageUri,setImageUri] =useState<any>();
    const [ocrResult,setOcrResult] = useState([])
    const naviguation = useNavigation<OpenCameraNaviguationProp>()
    const handleOnPictureTaken = async({croppedImage}:{croppedImage:string}) =>{
        setImageUri(croppedImage)
    }

    // definit une valeur unique a chaque rendues
    const cameraRef = useRef(null)
    // selection la camera arriere front pour la camera avant
    const CameraArriere = useCameraDevice('back');

    if(CameraArriere == null){
        <View> impossible d'avoir acces a votre camera arriere </View>
    }else{
    return (
        <View style={{flex:1}}>
            
             <Camera ref={cameraRef}
                style={{ flex: 1,position:'relative' }}
                device={CameraArriere}
                isActive={true}
                photo={true}
            />
            <View style={{position:'absolute',bottom:20,right:10}}>
                <TouchableOpacity onPress={()=>naviguation.navigate('Verrification')}>
            <Buttons name='continiuer' fill={false} verify={true} />

                </TouchableOpacity>
            </View>
        </View>
    )}
}

export default OpenCamera