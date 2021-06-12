import React, { useEffect, useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import HomeStyle from './HomeStyle';
import Colors from '../../shared/colors/colors';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';

const BookingScreen = ({route, navigation}) => {

    const { idUs, idAp } = route.params;
    const [arrival, setArrival] = useState();
    const [departure, setDeparture] = useState();
    const [img, setImg] = useState();
    const [address, setAddress] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();

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

    const createUser = async ()=>{
      try{
        const response = await fetch("https://travelnowapimoviles.herokuapp.com/reservar", {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fechaInicio: arrival, 
            fechaFinal: departure,
            usuario: idUs,
            apartamento: idAp,
          })
        });
      const responseJson = await response.json();
      console.log(responseJson);
      }catch (e){
        console.log("error indefinido en el query")
      }  
    }

    const apBooking = () =>{
        if(departure == "" || arrival == "" || departure == null || arrival == null){
            Alert.alert("Error", "No ha introducido las fechas de la reserva");
        }else{
            Alert.alert("Fantastico", "El partamento ha sido reservado");
            createUser();
            navigation.navigate("ListBookings", {
                idUs: idUs,
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

try{
  return <View style={HomeStyle.container}>
      <View style={HomeStyle.ContainerBooking}>
        <StatusBar backgroundColor={Colors.secondary}></StatusBar>

        <Text style={HomeStyle.Tittle}> Reservas </Text>

        <Image source={require('./img/flat.png')} style={HomeStyle.logo}></Image>
        <Image source={{ uri: img}} style={{ flex: 1, width: undefined, height: undefined, marginTop: 40 }}/>

        <Text style={HomeStyle.TextBooking}>{country} / {city}</Text>
        <Text style={HomeStyle.TextBooking}>Dirección: {address}</Text>

        <DatePicker
          style={HomeStyle.DatePickerStyle}
          date={arrival} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="Llegada"
          format="DD-MM-YYYY"
          minDate="11-06-2016"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(arrival) => {
            setArrival(arrival);
          }}
        />

        <DatePicker
          style={HomeStyle.DatePickerStyle}
          date={departure} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="Partida"
          format="DD-MM-YYYY"
          minDate="11-06-2021"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(departure) => {
            setDeparture(departure);
          }}
        />

        <TouchableOpacity onPress={() => apBooking()}>    
              <LinearGradient colors={[Colors.primary, Colors.primary]} style={HomeStyle.ButtonBooking}>
                <Text style={HomeStyle.ButtonText}>RESERVAR</Text>
              </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
}catch (e){
    console.log("error datapicker")
}
};

export default BookingScreen;