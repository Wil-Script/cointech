import {
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../constant/colors';
import imagePath from '../../constant/imagePath';
import {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TitleStyles } from '../../styles/Title';
import { RootStackPAramList } from '../../constant/Type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// type TakeIdNaviguationProp = NativeStackNavigationProp<RootStackPAramList,'SplahScreen'>


export default function Recip() {
  const [search, setSearch] = useState('');
  const [data,setData]= useState([
    {id: '1', email: ' tchouaffiyannis237@gmail.com',name:'yannis', montant: '-40€'},
    {id: '2', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '3', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '4', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '5', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '6', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '7', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
  ]);
  const [dataSearch,setDataSearch]= useState([
    {id: '1', email: ' tchouaffiyannis237@gmail.com',name:'yannis', montant: '-40€'},
    {id: '2', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '3', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '4', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '5', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '6', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
    {id: '7', email: ' hugorjunior@gmail.com', montant: '-500€',name:'hugord'},
  ]);
    // const naviguation = useNavigation<TakeIdNaviguationProp>(); 
  
    // fonction pour implementre la recherche 
    const handleSearch = (query:string)=>{
      if (query === '') {
      setData(dataSearch)
    } else {
      const filerredTodos = data.filter((todo) =>
        todo.email.toLowerCase().includes(query.toLowerCase()))
      setData(filerredTodos);
    }

    }
      useEffect(() => {
    handleSearch(search)
  }, [search])
  
  
  return (

    <SafeAreaView style={{flex: 1, backgroundColor: colors.griseStatutBar}}>
        
      <View style={{flex: 1,marginHorizontal: 20}}>
        <TouchableOpacity style={{}}>
          <Image
          source={imagePath.back}
          style={{width: 20, height: 20, top: 20}}
        />
        </TouchableOpacity>
        
        <View style={{marginBottom:20}}>
          <Text style={{fontSize: 26, fontWeight: 'bold', marginTop: 50}}>
            Choose Recipient
          </Text>
          <Text style={{fontSize: 16}}>
            Please Select your recipient to receive money.
          </Text>
        </View>

        <View
          style={{
            borderRadius: 10,
            backgroundColor:colors.white,
            flex:1,
            // position:'relative'
          }}>
            <View style={{position:'relative',alignItems:'center'}}>
              <TextInput
              style={{
                borderRadius: 10,
                backgroundColor: colors.griseStatutBar,
                fontSize: 16,
                padding: 10,
                elevation: 2,
                width: 300,
                paddingLeft:40,
              }}
              placeholder="search 'Recipient email'"
              value={search}
              placeholderTextColor={colors.gris}
              onChangeText={text => setSearch(text)}
              
            />
              <MaterialIcons name='search' size={30} color={colors.griseButton} style={{position:'absolute',top:10,left:20}}/> 

            </View>
              <View style={{height:400}}>
                <FlatList
                data={data}
                keyExtractor={item => item.id}
                ListHeaderComponent={<Text style={{ marginTop:20}}> Most Recent</Text>}
                renderItem={({item}) => (
                  <TouchableOpacity  style={styles.card}>
                    <View style={{flexDirection:'row'}}>
                      <Image source={imagePath.Google} style={{width:30,height:30}}/>
                      <View>
                      <Text style={{...TitleStyles.labelmdRegular}}> {item.name}</Text>
                      <Text style={{...TitleStyles.labelmdRegular,fontSize:12}}> {item.email}</Text>
                      </View>
                    </View>
                    <Text style={{color:'red',fontSize:16}}>{item.montant}</Text>
                  </TouchableOpacity>
                )}
              />
              </View>
              
              <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{ borderRadius: 40, backgroundColor: colors.blueColor, marginTop: 75, padding: 5,
            // position:'absolute', top:'50%'
             }} onPress={() =>  
        { 
          // Permission()
          //  CheckPermission()
          // console.log('voici le retour de notre fonction',retour)
          // naviguation.navigate('OpenScan')
          }

        }>
          <Image style={styles.ScanQr} source={imagePath.ScanQr} />
        </TouchableOpacity>  
            </View> 
            </View>
            </View>
    </SafeAreaView>
      

  );
}
const styles = StyleSheet.create({
  card: {
    padding: 16, 
    borderRadius: 10, 
    marginBottom: 12, 
    borderBottomWidth:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  ScanQr: {
    width: 60,
    height: 60,
    // opacity:0.7,
  }
});
