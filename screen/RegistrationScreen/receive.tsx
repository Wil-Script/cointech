import Buttons from "../../components/Buttons";
import imagePath from "../../constant/imagePath";
import { SafeAreaView,View,Image, Text} from "react-native";
import Button from "../../components/Buttons";

 export default function Receive (){
    return(
    <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
    <View style={{marginTop: -70, top:100}}>
        <Image source={(imagePath.receive)} style={{width:300, height:500}}/>
        <Text style={{fontSize:25, position: 'absolute',  fontWeight:'600',}}> Verify your phone number</Text>
        <View style={{top:-150,}}>
         <Button name="Yes" fill={false} verify={false}/>
         <Button name='No' fill={true} verify={false}/>
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{fontSize:25, fontWeight:600, bottom:595}}>before we send code </Text>
        </View>

    </View>
    </SafeAreaView>
    )
    
} 
