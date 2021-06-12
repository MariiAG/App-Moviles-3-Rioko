import React, { useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';
import CreateApartmentStyle from './CreateApartmentStyle';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../shared/colors/colors';

const UpdateApartment = ({route, navigation}) => {

    const { idAp, addressAp, cityAp, countryAp, imgAp, amphitryonAp } = route.params;
    const [address, setAdress] = useState(addressAp);
    const [country, setCountry] = useState(countryAp);
    const [city, setCity] = useState(cityAp);
    const [img, setImg] = useState(imgAp);

    const updateApartment = async ()=>{
      try{
        const response = await fetch(`https://travelnowapimoviles.herokuapp.com/editarApartamento/${idAp}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            direccion: address,
            ciudad: city,
            pais: country,
            urlImagen: img,
          })
        });
      const responseJson = await response.json();
      console.log(responseJson);
      }catch (e){
        console.log(e);
      }
    }

    const validateForm = () =>{
      if(address === "" || country === "" || city === "" || img === ""){
        Alert.alert("Error", "Todos los campos del formulario deben estar llenos");
        console.log("hola");
      }else{
          Alert.alert("Info", "Apartamento actualizado correctamente");
          updateApartment();
          navigation.navigate("ListApartments",{
            idA: amphitryonAp,
          });
      }  
    }

  return <ScrollView style={CreateApartmentStyle.container}>
    <StatusBar backgroundColor={Colors.secondary}></StatusBar>
    <View style={CreateApartmentStyle.LogoContainer}>
      <Image source={require('./img/flat.png')} style={CreateApartmentStyle.logo}></Image>
    </View>
    <View style={CreateApartmentStyle.inputContainer}>

        <TextInput placeholder="Imagen Destacada" placeholderTextColor={"black"} style={CreateApartmentStyle.inputData} onChangeText={(e)=>setImg(e)}>{img}</TextInput>
        <TextInput placeholder="Dirección" style={CreateApartmentStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setAdress(e)}>{address}</TextInput>
        <TextInput placeholder="Ciudad" style={CreateApartmentStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setCity(e)}>{city}</TextInput>
        <TextInput placeholder="Pais" style={CreateApartmentStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setCountry(e)}>{country}</TextInput>
        
    </View>
    <LinearGradient colors={[Colors.primary, Colors.secondary]} style={CreateApartmentStyle.CreateContainer}>
      <TouchableOpacity onPress={() =>validateForm()}>
          <Text style={CreateApartmentStyle.TextCreate}>ACTUALIZAR APARTAMENTO</Text>
      </TouchableOpacity>
    </LinearGradient>
  </ScrollView>

};

export default UpdateApartment;