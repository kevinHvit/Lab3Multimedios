import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";


export default function Login() {
  const navigation = useNavigation();

  return (

    
    <ImageBackground
      source={require("../images/image.png")} 
      style={styles.background}
    >
    
      <View style={styles.overlay} />
      
      <View style={styles.container}>
       

        <TextInput
          placeholder="Correo Electronico"
          style={styles.txtInput}
        ></TextInput>
        <TextInput
          placeholder="contraseña"
          secureTextEntry={true}
          style={styles.txtInput}
        ></TextInput>

        
        <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
          <LinearGradient
            colors={["#871F1F", "#871F1F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.btnLogin}
          >
            <Text style={styles.txtLogin}>Ingresar</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
          <Text style={styles.txtRegistrarse}>No tienes una cuenta Registrarse</Text>
        </TouchableOpacity>


        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageLog: {
    height: 130,
    width: 130,

  },
  txtInput: {
    width: "85%",
    height: 60,
    borderRadius: 30,
    paddingLeft: 30,
    marginTop: 50,
    marginLeft: 35,
    borderColor: "gray",
    color: "#000000",
    backgroundColor: "#F5F5F5",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 4,
    fontSize: 17,
  },
  txtPass: {
    textAlign: "right",
    marginTop: 20,
    marginRight: 40,
    color: "#00C1BB",
    fontSize: 14,
  },
  btnLogin: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop: 40,
    alignSelf: "center",
    paddingTop: 10,
  },
  txtLogin: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  txtCuenta: {
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
    color: "#00C1BB",
    fontSize: 15,
    alignItems: "center",
  },
  txtRegistrarse: {
    marginTop: 30,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 15,
    alignItems: "center",
    fontWeight: "bold",
  },
});
