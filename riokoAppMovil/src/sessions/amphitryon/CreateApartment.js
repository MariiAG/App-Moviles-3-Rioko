import React, { useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';
import CreateApartmentStyle from './CreateApartmentStyle';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../shared/colors/colors';

const CreateApartment = ({route, navigation}) => {

    const { idAm } = route.params;
    const [address, setAdress] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [img, setImg] = useState("");

    const createUser = async ()=>{
        const response = await fetch('https://travelnowapimoviles.herokuapp.com/crearApartamento', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            direccion: address,
            ciudad: city,
            pais: country,
            urlImagen: img,
            cliente: idAm,
          })
        });
      const responseJson = await response.json();
      console.log(responseJson);
    }

    const validateForm = () =>{
      if(address === "" || country === "" || city === "" || img === ""){
        Alert.alert("Error", "Todos los campos del formulario deben estar llenos");
      }else{
          Alert.alert("Info", "Apartamento creado correctamente");
          createUser();
          navigation.navigate("ListApartments",{
            idAm: idAm,
          });
      }  
    }

  return <ScrollView style={CreateApartmentStyle.container}>
    <StatusBar backgroundColor={Colors.secondary}></StatusBar>
    <View style={CreateApartmentStyle.LogoContainer}>
      <Image source={require('./img/flat.png')} style={CreateApartmentStyle.logo}></Image>
    </View>
    <View style={CreateApartmentStyle.inputContainer}>

        <TextInput placeholder="Imagen Destacada" placeholderTextColor={"black"} style={CreateApartmentStyle.inputData} onChangeText={(e)=>setImg(e)}></TextInput>
        <TextInput placeholder="Direcci??n" style={CreateApartmentStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setAdress(e)}></TextInput>
        <TextInput placeholder="Ciudad" style={CreateApartmentStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setCity(e)}></TextInput>
        <TextInput placeholder="Pais" style={CreateApartmentStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setCountry(e)}></TextInput>
        <TextInput placeholder="Precio x Noche" style={CreateApartmentStyle.inputData} placeholderTextColor={"black"}></TextInput>

        
    </View>
    <LinearGradient colors={[Colors.primary, Colors.secondary]} style={CreateApartmentStyle.CreateContainer}>
      <TouchableOpacity onPress={() =>validateForm()}>
          <Text style={CreateApartmentStyle.TextCreate}>CREAR APARTAMENTO</Text>
      </TouchableOpacity>
    </LinearGradient>
  </ScrollView>

};

export default CreateApartment;