import React, { useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';
import ApartmentViewStyle from './ApartmentViewStyle';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../shared/colors/colors';
import { useEffect } from 'react';

const ApartmentViewScreen = ({route, navigation}) => {

    const { idAp } = route.params;
    const [apartment, setApartment] = useState();
    const [address, setAdress] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [img, setImg] = useState("");

  const getApartment = async () => {
    try{
      const response = await fetch(`https://travelnowapimoviles.herokuapp.com/buscarxApartamento/${idAp}`);
      const dataResponse = await response.json();
      // console.log(dataResponse.mensaje);
      // setApartment(dataResponse.mensaje);
      setAdress(dataResponse.mensaje.direccion);
      setCountry(dataResponse.mensaje.pais);
      setCity(dataResponse.mensaje.ciudad);
      setImg(dataResponse.mensaje.urlImagen);
    }catch (e){
      console.log("error indefinido en el query");
    }  
  }

  useEffect(()=>{
    getApartment();
  },[]);

  try{
    return <ScrollView style={ApartmentViewStyle.container}>
    <StatusBar backgroundColor={Colors.secondary}></StatusBar>
    {/* <View style={ApartmentViewStyle.LogoContainer}>
      <Image source={require('./img/flat.png')} style={ApartmentViewStyle.logo}></Image>
    </View> */}
    <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ApartmentViewStyle.inputContainer}>

    <Image source={{ uri: img }} style={{ width: 400, height: 400, marginBottom: 40}}/>
    <Text style={ApartmentViewStyle.TextViewAp}>INFO. DEL APARTAMENTO</Text>
    <Text style={ApartmentViewStyle.TextViewAp}>Dirección: {address}</Text>
    <Text style={ApartmentViewStyle.TextViewAp}>{city} / {country}</Text>
    <Text style={ApartmentViewStyle.TextCreate}>¡RioKo.Com.Co te desea una excelente estadia¡</Text>
        
    </LinearGradient>
  </ScrollView>
  }catch (e){
    console.log("error en vista");
  }

};

export default ApartmentViewScreen;