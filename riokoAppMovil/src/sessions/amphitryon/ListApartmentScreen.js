import React, { useEffect, useState } from 'react';
import {View, Text, StatusBar, Image, TextInput, Button, Alert, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import ListBookingStyle from './ListApartmentStyle';
import Colors from '../../shared/colors/colors';
import LinearGradient from 'react-native-linear-gradient';
import ListApartmentStyle from './ListApartmentStyle';
import ListBookingsScreen from '../invited/ListBookingsScreen';

const ListApartmentScreen = ({route, navigation}) => {

    const { idA } = route.params;
    const [apartments, setApartments] = useState();
    const [ID, setID] = useState("");

  let amphi = idA; 
  const getBookings = async () => {
    try{
      const response = await fetch(`https://travelnowapimoviles.herokuapp.com/buscarApartamento`);
      const dataResponse = await response.json();
      let result;
      result = dataResponse.mensaje.filter(function(anfitrion){
        return(anfitrion.cliente==amphi)
      })
      setApartments(result);
      // setApartments(dataResponse.mensaje);
      console.log(dataResponse.mensaje);
    }catch (e){
      console.log("error indefinido en el query")
    }  
  }

  const deleteApartment = async () => {
    try {
        const response = await fetch(`https://travelnowapimoviles.herokuapp.com/eliminarApartamento/${ID}`, {
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
        Alert.alert("Hubo un error inesperado, vuelva a intentarlo más tarde");
    }
  }

  const validateDeleteApartment = (item) =>{
    Alert.alert(
      "CUIDADO",
      "¿Seguro que desea eliminar el apartamento?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            setID(item);
            deleteApartment();
            getBookings();
          } 
        }
      ]
    );
  }

  const validateUpdateApartment = (item) =>{
    Alert.alert(
      "Info",
      "¿Seguro que desea modificar el apartamento?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          navigation.navigate("UpdateApartment", {
            idAp: item._id,
            addressAp: item.direccion,
            cityAp: item.ciudad,
            countryAp: item.pais,
            imgAp: item.urlImagen,
            amphitryonAp: item.cliente,
          });
          } 
        }
      ]
    );
  }

  useEffect(()=>{
      getBookings();
  });

try{
  return <View style={ListApartmentStyle.container}>
      <View>
        <StatusBar backgroundColor={Colors.secondary}></StatusBar>
        <View>
          <Text style={ListBookingStyle.Tittle}>Mis apartamentos</Text>
        </View>

        <View style={ListBookingStyle.ContainerList}>
        <FlatList 
          data={apartments}
          keyExtractor={item => item._id}
          renderItem={({item})=><TouchableOpacity style={ListBookingStyle.ItemList}>
              <View style={ListBookingStyle.ContainerImage}>
                <Image source={{ uri: item.urlImagen }} style={{ width: 100, height: 100}}/>
              </View>
              <View style={ListBookingStyle.ContainerApartmentData}>
                <Text style={ListBookingStyle.TextId}>{item._id}</Text>
                <Text><Text style={ListBookingStyle.SubTitleItem}>Pais: </Text> {item.pais}</Text>
                <Text><Text style={ListBookingStyle.SubTitleItem}>Ciudad:</Text> {item.ciudad}</Text>
                <Text><Text style={ListBookingStyle.SubTitleItem}>Dirección:</Text> {item.direccion}</Text>
                <Text><Text style={ListBookingStyle.SubTitleItem}>Precio x noche:</Text> 120.000</Text>

                <View style={ListBookingStyle.ContainerOptions}>
                <TouchableOpacity onPress={() =>validateUpdateApartment(item)}>
                    <LinearGradient colors={[Colors.primary, Colors.primary]} style={ListBookingStyle.ButtonUserPerfil}>
                      <Text style={ListBookingStyle.ButtonText}>EDITAR</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>validateDeleteApartment(item._id)}>
                    <LinearGradient colors={[Colors.secondary, Colors.secondary]} style={ListBookingStyle.ButtonUserPerfil}>
                      <Text style={ListBookingStyle.ButtonText}>ELIMINAR</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </View>
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

export default ListApartmentScreen;