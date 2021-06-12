import {Dimensions, StyleSheet} from 'react-native';

const CreateStyle = StyleSheet.create({
    container:{
        backgroundColor: "black",
        flex: 1,
    },
    LogoContainer:{
        top: 80,
        backgroundColor: "black",
        height: Dimensions.get("screen").height*0.26,
        justifyContent: "center",
        alignItems: "center",
    },
    logo:{
        width: 130,
        height: 130,
    },
    inputContainer:{
        marginTop: 80,
        alignItems: "center",
    },
    inputData:{
        marginTop: 26,
        fontSize: 13,
        backgroundColor: "white",
        padding: 4,
        fontWeight: "700",
        textAlign: "center",
        borderRadius: 100,
        width: Dimensions.get("screen").width*0.70,
    },
    CreateContainer:{
        alignItems: "center",
        marginTop: 90,
        backgroundColor: "#e65100",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    TextCreate: {
        textAlign: "center",
        borderRadius: 20,
        padding: 10,
        fontSize: 17,
        marginTop: 12,
        color: "white",
        fontWeight: "700",
        width: Dimensions.get("screen").width*0.75,
    },
    ButtonTypeInvited:{
        alignItems: "center",
        marginTop: 20,
        width: Dimensions.get("screen").width*0.33,
        borderRadius: 20,
        backgroundColor: "#e65100",
    },
    ButtonTypeAmphitryon:{
        alignItems: "center",
        marginTop: 20,
        width: Dimensions.get("screen").width*0.33,
        marginLeft: 10,
        borderRadius: 20,
        backgroundColor: "#e65100",
    },
    TextType:{
        padding: 9,
        color: "white",
        fontWeight: "700",
    }
});

export default CreateStyle;