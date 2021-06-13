import React, { useEffect, useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import ListBookingStyle from './ListBookingStyle';
import Colors from '../../shared/colors/colors';
import LinearGradient from 'react-native-linear-gradient';

const ListBookingsScreen = ({route, navigation}) => {

    const { idUs } = route.params;
    const [booking, setBooking] = useState();
    const [ID, setID] = useState("");

  const getBookings = async () => {
    try{
      const response = await fetch(`https://travelnowapimoviles.herokuapp.com/buscarReservas`);
      const dataResponse = await response.json();
      let result;
      result = dataResponse.mensaje.filter(function(booking){
        return(booking.usuario==idUs)
      })
      setBooking(result);
      console.log(dataResponse.mensaje);
    }catch (e){
      console.log("error indefinido en el query")
    }  
  }

  const deleteBooking = async () => {
    try {
        const response = await fetch(`https://travelnowapimoviles.herokuapp.com/eliminarReserva/${ID}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     id: id,
            // })
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse)
    } catch (e) {
      console.log("Hubo un error inesperado, vuelva a intentarlo más tarde");
    }
  }

  const validateDeleteBooking = (item) =>{
    Alert.alert(
      "CUIDADO",
      "¿Seguro que desea eliminar la reserva?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            setID(item);
            deleteBooking();
            getBookings();
          } 
        }
      ]
    );
  }

  const validateSeeApartment = (item) =>{
    // Alert.alert(
    //   "Info",
    //   "¿Quiere ver el apartamento que ha reservado?",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => {
          navigation.navigate("ApartmentViewScreen", {
            idAp: item,
          });
    //       } 
    //     }
    //   ]
    // );
  }

  useEffect(()=>{
    try{
      getBookings();
    }catch{
      console.log("error indefinido");
    }
  }, []);

try{
  return <View style={ListBookingStyle.container}>
      <View>
        <StatusBar backgroundColor={Colors.secondary}></StatusBar>
        <View style={ListBookingStyle.Tittle}><Text style={ListBookingStyle.Tittle}>Lista de reservas</Text></View>

        <View style={ListBookingStyle.ContainerList}>
        <FlatList 
          data={booking}
          keyExtractor={item => item._id}
          renderItem={({item})=><TouchableOpacity style={ListBookingStyle.ItemList} onPress={() =>goToBooking(item)}>
              <Text><Text style={ListBookingStyle.SubTitleItem}>Fecha de llegada: </Text> {item.fechaInicio}</Text>
              <Text><Text style={ListBookingStyle.SubTitleItem}>Fecha de salida: </Text> {item.fechaFinal}</Text>

              <View style={ListBookingStyle.ContainerOptions}>
                <TouchableOpacity onPress={() =>validateDeleteBooking(item._id)}>
                      <LinearGradient colors={[Colors.secondary, Colors.secondary]} style={ListBookingStyle.ButtonUserPerfil}>
                        <Text style={ListBookingStyle.ButtonText}>CANCELAR</Text>
                      </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>validateSeeApartment(item.apartamento)}>
                      <LinearGradient colors={[Colors.secondary, Colors.secondary]} style={ListBookingStyle.ButtonUserPerfil}>
                        <Text style={ListBookingStyle.ButtonText}>APARTAMENTO</Text>
                      </LinearGradient>
                  </TouchableOpacity>
              </View>
          </TouchableOpacity>}>
        </FlatList>
        </View>
      </View>
    </View>
}catch (e){
    console.log("error datapicker")
}
};

export default ListBookingsScreen;