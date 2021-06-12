import React, { useEffect, useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';
import LoginStyle from './LoginStyle';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../shared/colors/colors';

const LoginScreen = ({navigation}) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const getUser = async () => {
  try{  
    if(email == "" || email == null){
      Alert.alert("Los campos no pueden estar vacios");
    }else{
        const response = await fetch(`https://travelnowapimoviles.herokuapp.com/buscarxEmail/${email}`);
        const dataResponse = await response.json();
        let passwd = dataResponse.mensaje.contrasenaCliente; 
        let type = dataResponse.mensaje.rol;
        console.log(dataResponse);
      if(passwd != password || password == "" || password == null){
        Alert.alert("Contraseña incorrecta");
      }else{
        if(type == "INVITADO"){
          Alert.alert(type,"Bienvenido a Rioko.com.co");
          navigation.navigate("Invited", {
            id: dataResponse.mensaje._id,
            nombreCliente: dataResponse.mensaje.nombreCliente,
            emailCliente: dataResponse.mensaje.emailCliente,
            paisCliente: dataResponse.mensaje.paisCliente,
            ciudadCliente: dataResponse.mensaje.ciudadCliente,
            rol: dataResponse.mensaje.rol,
            contrasenaCliente: dataResponse.mensaje.contrasenaCliente,
          });
        }else{
          Alert.alert(type,"Bienvenido a Rioko.com.co");
          navigation.navigate("Amphitryon", {
            id: dataResponse.mensaje._id,
            nombreCliente: dataResponse.mensaje.nombreCliente,
            emailCliente: dataResponse.mensaje.emailCliente,
            paisCliente: dataResponse.mensaje.paisCliente,
            ciudadCliente: dataResponse.mensaje.ciudadCliente,
            rol: dataResponse.mensaje.rol,
            contrasenaCliente: dataResponse.mensaje.contrasenaCliente,
          });
        }
      }
    }
    console.log(dataResponse.mensaje.contrasenaCliente);
  }catch (e){
    console.log("error inesperado");
  }  
  }

  const createUser = () =>{
    navigation.navigate("Registrarme");
  }

  return <ScrollView style={LoginStyle.container}>
    <LinearGradient colors={[Colors.primary, Colors.secondary]} >
        <StatusBar backgroundColor={Colors.primary}></StatusBar>

        <View style={LoginStyle.logoContainer}>

            <Image source={require('./img/k.png')} style={LoginStyle.logo}></Image>
            <Text style={LoginStyle.title}>&reg; RIOKO.COM.CO </Text>
            <Text style={LoginStyle.subtitle}>¡BIENVENIDO!</Text>

        </View>
        <View style={LoginStyle.inputContainer}>

            <TextInput placeholder="ejemplo@gmail.com" style={LoginStyle.inputData} onChangeText={(e)=>setMail(e)}></TextInput>

            <TextInput placeholder="********" secureTextEntry={true} style={LoginStyle.inputData} onChangeText={(e)=>setPassword(e)}></TextInput>

        </View>
        <LinearGradient style={LoginStyle.CreateContainer} colors={[Colors.secondary, Colors.primary]}>

            <TouchableOpacity onPress={() =>getUser()}>
                  <LinearGradient colors={[Colors.primary, Colors.light]} style={LoginStyle.LoginButton}>
                    <Text style={LoginStyle.TextButton}>INICIAR SESIÓN</Text>
                  </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>createUser()}>
                  <LinearGradient colors={[Colors.primary, Colors.light]} style={LoginStyle.LoginButton}>
                    <Text style={LoginStyle.TextCreate}>CREAR CUENTA</Text>
                  </LinearGradient>
            </TouchableOpacity>

        </LinearGradient>
      </LinearGradient>
  </ScrollView>

};

export default LoginScreen;