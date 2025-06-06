import { Platform } from 'react-native'
import { View, Text, PermissionsAndroid } from 'react-native'
import { requestMultiple, PERMISSIONS, RESULTS } from 'react-native-permissions'
const Permission = async ()=> {
    try {
      const grantedRead = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
        {
          title: 'demande d\'autorisation ',
          message: 'gars je veux voir tes photos',
          buttonNeutral: 'plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'ok',
        },
      );

      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'demande d\' access a la camera ',
          message: 'gars je veux le scan pour la camera',
          buttonNeutral: 'plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'ok',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('tu peux use la photos gars');
      } else {
        console.log('le gars a refuser');
      }
      grantedRead === PermissionsAndroid.RESULTS.GRANTED ? console.log('il veut pas que  tu es access a ses fichiers') : console.log('le gars a refuser');

    } catch (e) {
      console.warn(e);
    }
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'demande d\' autorisation ',
          message: 'gars je veux sauvegarder une toff',
          buttonNeutral: 'plus tard',
          buttonNegative: 'Annuler',
          buttonPositive: 'ok',
        },
      );
      granted === PermissionsAndroid.RESULTS.GRANTED?console.log('il ne veux pas que tu utilise son stockage pour sauvegardez les donnees'):console.log('le gars a refuser');

    } catch (e) {
      console.warn(e)
    }
    //   const permissionsToRequest = Platform.select({
//     ios:[PERMISSIONS.IOS.CAMERA,PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY],
//     android:[PERMISSIONS.ANDROID.CAMERA,PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]
//   })!;
//   const statues = await requestMultiple(permissionsToRequest);
//   // on verifie si tout nos requete multiples sont deja 
//   for(const key in statues){
//     if(statues[key as keyof typeof statues] !== RESULTS.GRANTED){
//       return false;
//     }
//   }
// return true

}

export default Permission