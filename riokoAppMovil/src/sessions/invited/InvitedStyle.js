import {Dimensions, StyleSheet} from 'react-native';

const InvitedStyle = StyleSheet.create({
    container:{
        backgroundColor: "black",
        flex: 1,
    },
    ContainerTitle:{
        alignItems: "center",
        height: Dimensions.get("screen").height*0.4,
    },
    Tittle:{
        fontWeight: "bold",
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: 10,
    },
    SubTittle:{
        fontWeight: "bold",
        color: "white",
        fontSize: 20,
        textAlign: "center",
        marginTop: 20,
    },
    Text:{
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
        textAlign: "center",
        marginTop: 6,
    },
    Logo:{
        marginTop: 10,
        width: 100,
        height: 100,
    },
    ButtonSearch:{
        textAlign: "center",
        marginTop: 13,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: Dimensions.get("screen").width*0.8,
        height: 35,
    },
    ButtonText:{
        fontWeight: "bold",
        color: "white",
        fontSize: 17,
    },
    ContainerInput:{
        alignItems: "center",
    },
    InputData:{
        marginTop: 13,
        fontSize: 13,
        backgroundColor: "white",
        padding: 4,
        fontWeight: "700",
        textAlign: "center",
        borderRadius: 100,
        width: Dimensions.get("screen").width*0.8,
    },
    ContainerOptions:{
        alignItems: "center",
        flexDirection: "row",
    },
    ButtonEdit:{
        alignItems: "center",
        marginTop: 20,
        width: Dimensions.get("screen").width*0.38,
        borderRadius: 20,
        backgroundColor: "#e65100",
    },
    ButtonSave:{
        alignItems: "center",
        marginTop: 20,
        width: Dimensions.get("screen").width*0.38,
        marginLeft: 10,
        borderRadius: 20,
        backgroundColor: "#e65100",
    },
    TextButtonOptions:{
        padding: 9,
        color: "white",
        fontWeight: "700",
    }
});

export default InvitedStyle;