import React, { useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity} from 'react-native';
import LoginStyle from './LoginStyle';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../shared/colors/colors';

const LoginScreen = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const validateInput = () =>{
    if(email === ""){
      Alert.alert("Usuario incorrecto");
    }
    else{
      if (password === ""){
        Alert.alert("Contraseña incorrecta");
      }else{
        Alert.alert("Iniciando Sesión");
      }
    }
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

            <TouchableOpacity onPress={()=>validateInput()}>
              <LinearGradient colors={[Colors.primary, Colors.light]} style={LoginStyle.LoginButton}>
                <Text style={LoginStyle.TextButton}>INICIAR SESIÓN</Text>
              </LinearGradient>
            </TouchableOpacity>

        </View>
        <LinearGradient colors={[Colors.secondary, Colors.primary]} style={LoginStyle.CreateContainer}>
            <TouchableOpacity >
              <LinearGradient colors={[Colors.primary, Colors.light]} style={LoginStyle.LoginButton}>
                <Text style={LoginStyle.TextCreate}>CREAR NUEVA CUENTA</Text>
              </LinearGradient>
            </TouchableOpacity>
        </LinearGradient>
      </LinearGradient>
  </ScrollView>

};

export default LoginScreen;