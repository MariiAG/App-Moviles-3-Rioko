import React, { useEffect, useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import InvitedStyle from './InvitedStyle';
import Colors from '../../shared/colors/colors';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';

const ListBookingsScreen = ({route, navigation}) => {

    const { idUs } = route.params;
    const [arrival, setArrival] = useState();
    const [departure, setDeparture] = useState();
    const [img, setImg] = useState();
    const [address, setAddress] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();

    const getBookings = async () => {
      try{
        const response = await fetch(`https://travelnowapimoviles.herokuapp.com/buscarxApartamento/${idAp}`);
        const dataResponse = await response.json();
        setCountry(dataResponse.mensaje.pais);
        setImg(dataResponse.mensaje.urlImagen);
        setAddress(dataResponse.mensaje.direccion);
        setCity(dataResponse.mensaje.ciudad);
        
        console.log(dataResponse.mensaje);
      }catch (e){
        console.log("error indefinido en el query")
      }  
  }

    const getApartment = async () => {
        try{
          const response = await fetch(`https://travelnowapimoviles.herokuapp.com/buscarxApartamento/${idAp}`);
          const dataResponse = await response.json();
          setCountry(dataResponse.mensaje.pais);
          setImg(dataResponse.mensaje.urlImagen);
          setAddress(dataResponse.mensaje.direccion);
          setCity(dataResponse.mensaje.ciudad);
          
          console.log(dataResponse.mensaje);
        }catch (e){
          console.log("error indefinido en el query")
        }  
    }

  useEffect(()=>{
      try{
        getApartment();
      }catch{
        console.log("error indefinido");
      }
    }, []);

  useEffect(()=>{
    try{
      getBookings();
    }catch{
      console.log("error indefinido");
    }
  }, []);

try{
  return <View style={InvitedStyle.container}>
      <View>
        <StatusBar backgroundColor={Colors.secondary}></StatusBar>
        <View style={InvitedStyle.Tittle}>Mi lista de reservas</View>
      </View>
    </View>
}catch (e){
    console.log("error datapicker")
}
};

export default ListBookingsScreen;