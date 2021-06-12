import {Dimensions, StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
    container:{
        backgroundColor: "black",
        flex: 1,
    },
    TextId:{
        color: "transparent"
    },
    ContainerTitle:{
        alignItems: "center",
        height: Dimensions.get("screen").height*0.25,
    },
    Tittle:{
        fontWeight: "bold",
        color: "white",
        fontSize: 35,
        textAlign: "center",
        marginTop: 15,
    },
    logo:{
        marginTop: 30,
        width: 100,
        height: 100,
    },
    ContainerList:{
        alignItems: "center",
        marginTop: 30,
        backgroundColor: "#e65100",
        height: Dimensions.get("screen").height*0.63,
    },
    ItemList:{
        backgroundColor: "white",
        padding: 14,
        marginTop: 13,
        fontSize: 18,
        borderRadius: 10,
        width: Dimensions.get("screen").width*0.9,
        shadowColor: "black",
        shadowColor: "black",
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 2.62,
        
        elevation: 5,
    },
    SubTitleItem:{
        fontWeight: "bold",
        color: "#e65100",
    },
    ButtonUserPerfil:{
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: Dimensions.get("screen").width*0.9,
        height: 55,
    },
    ButtonText:{
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
    },
    ContainerBooking:{
        padding: 7,
        alignItems: "center",
        marginTop: 30,
    },
    DatePickerStyle: {
        width: 200,
        marginTop: 20,
    },
    TextBooking:{
        marginTop: 10,
        color: "white",
        fontSize: 20,
    },
    ButtonBooking:{
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: Dimensions.get("screen").width*0.6,
        height: 45,
    },
});

export default HomeStyle;