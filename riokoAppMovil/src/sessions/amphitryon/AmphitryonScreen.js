import React, { useEffect, useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import AmphitryonStyle from './AmphitryonStyle';
import Colors from '../../shared/colors/colors';
import LinearGradient from 'react-native-linear-gradient';

const AmphitryonScreen = ({route, navigation}) => {

    const { id, nombreCliente, emailCliente, paisCliente, ciudadCliente, rol, contrasenaCliente } = route.params;
    const [name, setName] = useState(nombreCliente);
    const [country, setCountry] = useState(paisCliente);
    const [city, setCity] = useState(ciudadCliente);
    const [email, setEmail] = useState(emailCliente);
    const [password, setPassword] = useState(contrasenaCliente);
    const [passwordConfirm, setPasswordConfirm] = useState(contrasenaCliente);
    const [editable, setEditable] = useState(false);

    const goToHome = () =>{
        navigation.navigate("Home");
    }

    const updateUser = async ()=>{
    try{
        const response = await fetch(`https://travelnowapimoviles.herokuapp.com/actualizarCliente/${id}`, {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nombreCliente: name,
            emailCliente: email,
            paisCliente: country,
            ciudadCliente: city,
            rol: rol,
            contrasenaCliente: password,
          })
        });
      const responseJson = await response.json();
      console.log(responseJson);
    }catch (e){
        console.log("error inesperado del query");
    }  
    }

    const updateInfo = () =>{
        if(name == nombreCliente && country == paisCliente && city == ciudadCliente && email == emailCliente && password == contrasenaCliente){
            Alert.alert("Info", "No ha realizado ningun cambio en el usuario");
        }else{
            if(name == "" || country == "" || city == "" || email == "" || password == "" || passwordConfirm == ""){
                Alert.alert(country, "Los campos del formulario no pueden estar vacios");
            }else{
                if(password === passwordConfirm){
                    Alert.alert("Genial", "Datos actualizados correctamente");
                    updateUser();
                }else{
                    Alert.alert("Error", "Las contraseñas no coinciden");
                }
            }
        }
    }

    return <View style={AmphitryonStyle.container}>
    <ScrollView>
      <View style={AmphitryonStyle.ContainerTitle}>

          <StatusBar backgroundColor={Colors.secondary}></StatusBar>
          <Image source={require('./img/k.png')} style={AmphitryonStyle.Logo}></Image>
          <Text style={AmphitryonStyle.Tittle}>{nombreCliente}</Text>
          <Text style={AmphitryonStyle.Text}>{ciudadCliente} / {paisCliente}</Text>
          <TouchableOpacity onPress={() => goToHome()}>
            <LinearGradient colors={[Colors.primary, Colors.primary]} style={AmphitryonStyle.ButtonSearch}>
              <Text style={AmphitryonStyle.ButtonText}>Ver pagina principal</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient colors={[Colors.primary, Colors.primary]} style={AmphitryonStyle.ButtonSearch}>
              <Text style={AmphitryonStyle.ButtonText}>Ver mis apartamentos</Text>
            </LinearGradient>
          </TouchableOpacity>
      
      </View>
      <View style={AmphitryonStyle.ContainerInput}>

          <TextInput placeholder="Nombre y Apellidos" placeholderTextColor={"black"} style={AmphitryonStyle.InputData}  onChangeText={(e)=>setName(e)} editable={editable}>{name}</TextInput>
          <TextInput placeholder="Pais" style={AmphitryonStyle.InputData} placeholderTextColor={"black"}  onChangeText={(e)=>setCountry(e)} editable={editable}>{country}</TextInput>
          <TextInput placeholder="Ciudad" style={AmphitryonStyle.InputData} placeholderTextColor={"black"}  onChangeText={(e)=>setCity(e)} editable={editable}>{city}</TextInput>
          <TextInput placeholder="Correo electronico" style={AmphitryonStyle.InputData} placeholderTextColor={"black"}  onChangeText={(e)=>setEmail(e)} editable={editable}>{email}</TextInput>
          <TextInput placeholder="Contraseña" secureTextEntry={true} style={AmphitryonStyle.InputData} placeholderTextColor={"black"}  onChange={(e)=>setPassword(e)} editable={editable}>{password}</TextInput>
          <TextInput placeholder="Confirmar contraseña" secureTextEntry={true} style={AmphitryonStyle.InputData} placeholderTextColor={"black"}  onChange={(e)=>setPasswordConfirm(e)} editable={editable}>{password}</TextInput>

          <View style={AmphitryonStyle.ContainerOptions}>
              <TouchableOpacity style={AmphitryonStyle.ButtonEdit} onPress={() =>setEditable(true)}>
                  <Text style={AmphitryonStyle.TextButtonOptions}>EDITAR</Text>
              </TouchableOpacity>
              <TouchableOpacity style={AmphitryonStyle.ButtonSave} onPress={() =>updateInfo()}>
                  <Text style={AmphitryonStyle.TextButtonOptions}>GUARDAR</Text>
              </TouchableOpacity>
          </View>

      </View>
    </ScrollView>
  </View>

};

export default AmphitryonScreen;