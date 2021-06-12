import React, { useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';
import CreateStyle from './CreateStyle';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../shared/colors/colors';

const CreateUserScreen = ({navigation}) => {

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [type, setType] = useState("");
    let buttonTypeState = "";

    const createUser = async ()=>{
        const response = await fetch('https://travelnowapimoviles.herokuapp.com/cliente', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nombreCliente: name,
            emailCliente: email,
            paisCliente: country,
            ciudadCliente: city,
            rol: type,
            contrasenaCliente: password,
          })
        });
      const responseJson = await response.json();
      console.log(responseJson);
    }

    const validateForm = () =>{
      if(name === "" || country === "" || city === "" || email === "" || password === "" || password === "" || type === ""){
        Alert.alert("Error", "Todos los campos del formulario deben estar llenos");
      }else{
        if(password == passwordConfirm){
          Alert.alert("Error", "Usuario creado con éxito");
          createUser();
          navigation.navigate("Login");
        }else{
          Alert.alert("Error", "Las contraseñas no coinciden");
        }
      }
    }

  return <ScrollView style={CreateStyle.container}>
    <StatusBar backgroundColor={Colors.secondary}></StatusBar>
    <View style={CreateStyle.LogoContainer}>
      <Image source={require('./img/add-friend.png')} style={CreateStyle.logo}></Image>
    </View>
    <View style={CreateStyle.inputContainer}>

        
        <TextInput placeholder="Nombre y Apellidos" placeholderTextColor={"black"} style={CreateStyle.inputData} onChangeText={(e)=>setName(e)}></TextInput>
        <TextInput placeholder="Pais" style={CreateStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setCountry(e)}></TextInput>
        <TextInput placeholder="Ciudad" style={CreateStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setCity(e)}></TextInput>
        <TextInput placeholder="Correo electronico" style={CreateStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setMail(e)}></TextInput>
        <TextInput placeholder="Contraseña" secureTextEntry={true} style={CreateStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setPassword(e)}></TextInput>
        <TextInput placeholder="Confirmar contraseña" secureTextEntry={true} style={CreateStyle.inputData} placeholderTextColor={"black"}  onChangeText={(e)=>setPasswordConfirm(e)}></TextInput>
        <View style={CreateStyle.ContainerType}>
          <TouchableOpacity onPress={()=>setType("INVITADO")} style={CreateStyle.ButtonTypeInvited}>
            <Text style={CreateStyle.TextType}>INVITADO</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setType("ANFITRION")} style={CreateStyle.ButtonTypeAmphitryon}>
            <Text style={CreateStyle.TextType}>ANFITRIÓN</Text>
          </TouchableOpacity>
        </View>
    </View>
    <LinearGradient colors={[Colors.primary, Colors.secondary]} style={CreateStyle.CreateContainer}>
      <TouchableOpacity onPress={() =>validateForm()} disabled={buttonTypeState}>
          <Text style={CreateStyle.TextCreate}>CREAR USUARIO {type}</Text>
      </TouchableOpacity>
    </LinearGradient>
  </ScrollView>

};

export default CreateUserScreen;