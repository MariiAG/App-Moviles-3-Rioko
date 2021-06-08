import {Dimensions, StyleSheet} from 'react-native';

const LoginStyle = StyleSheet.create({
    container:{
        flex: 1,
    },
    logoContainer:{
        top: 20,
        backgroundColor: "black",
        height: Dimensions.get("screen").height*0.5,
        borderBottomLeftRadius: 300.8,
        borderBottomEndRadius: 300.8,
        borderTopRightRadius: 300.8,
        borderTopLeftRadius: 300.8,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        
        elevation: 22,
        
    },
    logo:{
        width: 150,
        height: 150,
    },
    title:{
        position: "absolute",
        fontWeight: "700",
        fontFamily: "",
        bottom: 42,
        padding: 30, 
        fontSize: 22,
        color: "white",
    },
    subtitle:{
        position: "absolute",
        fontFamily: "",
        bottom: 15,
        padding: 30, 
        fontSize: 15,
        color: "white",
    },
    inputContainer:{
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
        backgroundColor: "black",
        top: 40,
        height: Dimensions.get("screen").height*0.22,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 22,
    },
    inputData:{
        marginTop: 18,
        fontSize: 15,
        backgroundColor: "white",
        padding: 5,
        color: "orangered",
        fontWeight: "700",
        textAlign: "center",
        borderRadius: 20,
        width: Dimensions.get("screen").width*0.75,

    },
    LoginButton:{
        borderRadius: 20,
        width: Dimensions.get("screen").width*0.75,
        marginTop: 25,
        padding: 10,
        alignItems: "center",
    },
    TextButton:{
        fontSize: 15,
        color: "white",
        fontWeight: "700",
    },
    Label:{
        marginBottom: 3,
        alignItems: "flex-start",
        marginTop: 3,
        fontWeight: "700",
        color: "white",
    },
    CreateContainer:{
        alignItems: "center",
        marginTop: 40,
        backgroundColor: "#e65100",
        height: Dimensions.get("screen").height*0.15,
    },
    CreateAccount:{
        borderRadius: 20,
        backgroundColor: "black",
        alignItems: "center",
        width: Dimensions.get("screen").width*0.75,
        padding: 10,
        // borderStyle: "dashed",
        // borderWidth: 3,
        // borderColor: "black",
        marginTop: 35,
    },
    TextCreate: {
        color: "white",
        fontWeight: "700",
    }
});

export default LoginStyle;