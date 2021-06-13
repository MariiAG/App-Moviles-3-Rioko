import React, { useEffect, useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import HomeStyle from './HomeStyle';
import Colors from '../../shared/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from 'react-native-action-button';
import { FAB } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import CreateStyle from '../../auth/create-user/CreateStyle';

const HomeScreen = ({route, navigation}) => {

  const { id, nombreCliente, emailCliente, paisCliente, ciudadCliente, rol} = route.params;
  const [apartments, setApartments] = useState();

  const getApartment = async () => {
  try{
    const response = await fetch("https://travelnowapimoviles.herokuapp.com/buscarApartamento");
    const dataResponse = await response.json();
    setApartments(dataResponse.mensaje);
    console.log(dataResponse.mensaje);
  }catch (e){
    console.log("error indefinido en el query")
  }  
  }

  const goToProfile = () =>{
    if(rol == "INVITADO"){
      navigation.navigate("Invited", {
        id: id,
        nombreCliente: nombreCliente,
        paisCliente: paisCliente,
        ciudadCliente: ciudadCliente
      });
    }else{
      navigation.navigate("Amphitryon", {
        id: id,
        nombreCliente: nombreCliente,
        paisCliente: paisCliente,
        ciudadCliente: ciudadCliente
      });
    }
  }

  useEffect(()=>{
    try{
      getApartment();
    }catch{
      console.log("error indefinido");
    }
  }, []);

  const goToBooking = (item) =>{
    if(rol == "INVITADO"){
      navigation.navigate("Booking", {
        idUs: id,
        idAp: item._id,
      });
    }else{
      Alert.alert("Info", "Solo los invitados tienen permitido reservar");
    }
  }

  return <View style={HomeStyle.container}>
      <View style={HomeStyle.ContainerTitle}>
        <StatusBar backgroundColor={Colors.secondary}></StatusBar>
        <Image source={require('./img/k.png')} style={HomeStyle.logo}></Image>
        <Text style={HomeStyle.Tittle}>RioKo.Com.Co</Text>

        <TouchableOpacity onPress={() => goToProfile()}>
              <LinearGradient colors={[Colors.primary, Colors.primary]} style={HomeStyle.ButtonUserPerfil}>
                <Text style={HomeStyle.ButtonText}>MI PERFIL</Text>
              </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={HomeStyle.ContainerList}>

      <FlatList 
          data={apartments}
          keyExtractor={item => item._id}
          renderItem={({item})=><TouchableOpacity style={HomeStyle.ItemList} onPress={() =>goToBooking(item)}>
              <View style={HomeStyle.ContainerImage}>
              <Image source={{ uri: item.urlImagen }} style={{ width: 100, height: 100}}/>
              </View>
              <View style={HomeStyle.ContainerApartmentData}>
                <Text style={HomeStyle.TextId}>{item._id}</Text>
                <Text><Text style={HomeStyle.SubTitleItem}>Pais: </Text> {item.pais}</Text>
                <Text><Text style={HomeStyle.SubTitleItem}>Ciudad:</Text> {item.ciudad}</Text>
                <Text><Text style={HomeStyle.SubTitleItem}>Dirección:</Text> {item.direccion}</Text>
                <Text><Text style={HomeStyle.SubTitleItem}>Precio x noche:</Text> 120.000</Text>
              </View>
          </TouchableOpacity>}>
          <Text><Text style={HomeStyle.SubTitleItem}></Text> </Text>
      </FlatList>
      <View></View>
      </View>
    </View>

};

export default HomeScreen;