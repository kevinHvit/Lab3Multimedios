   
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import app from "../config";
import { addDoc, collection, getFirestore } from "firebase/firestore";


export default function Registro() {

  const navigation = useNavigation();
  const db = getFirestore(app);

  //se puede hacer si esto en el UseState se inicia en 0
  const DatosUsuario = {
    Nombre: '',
    Correo: '',
    Contraseña: '',
    ConfirmarContraseña: '',

  };

  const [EstadoUsuario, setEstado] = useState(DatosUsuario);

  const HandleChangeText = (value, name) => {
  
      setEstado({ ...EstadoUsuario, [name]: value });
 
   
  };


  const EnviarDatosFirebase = async () => {
    try {


    alert("Registro del producto exitoso")
      const docRef = await addDoc(collection(db, "usuario"), EstadoUsuario);  
      navigation.navigate("Login");
      
    } catch (e) {
      console.error("No se pudo agregar los datos a la base de datos", e);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.ImageLog} source={require("../images/image.png")} />

      <Text style={styles.txtTitulo}>Registro</Text>

      <TextInput
        placeholder="Nombre"
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value, 'Nombre')}
        value={EstadoUsuario.Nombre}
      ></TextInput>

      <TextInput
        placeholder="Correo"
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value, 'Correo')}
        value={EstadoUsuario.Correo}
      ></TextInput>

      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value, 'Contraseña')}
        value={EstadoUsuario.Contraseña}
      ></TextInput> 
      <TextInput
        placeholder="Confirmar contraseña"
        secureTextEntry={true}
        style={styles.txtInput}
        onChangeText={(value) => HandleChangeText(value, 'ConfirmarContraseña')}
        value={EstadoUsuario.ConfirmarContraseña}
      ></TextInput> 


      <TouchableOpacity onPress={EnviarDatosFirebase}>
        <LinearGradient
          colors={["#00C1BB", "#005B58"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.btnLogin}
        >
          <Text style={styles.txtLogin}>Guardar</Text>
        </LinearGradient>
      </TouchableOpacity>

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#837B7B",
    height: "100%",
  },
  ImageLog: {
    height: "30%",
    width: "100%",
    
  },
  txtTitulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#34434D",
    textAlign: "left",
    paddingLeft: 30,
  },
  txtSubtitulo: {
    fontSize: 20,
    fontWeight: "light",
    color: "gray",
    textAlign: "left",
    paddingLeft: 30,
    marginTop: 20,
  },
  txtInput: {
    width: "85%",
    height: 50,
    borderRadius: 30,
    paddingLeft: 30,
    marginTop: 10,
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
    marginTop: 20,
  },
  txtPass: {
    textAlign: "right",
    marginTop: 20,
    marginRight: 50,
    color: "#00C1BB",
    fontSize: 18,
  },
  btnLogin: {
    borderRadius: 30,
    width: 219,
    height: 53,
    marginTop: 30,
    marginLeft: 100,
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
    textAlign: "center",
    color: "#00C1BB",
    fontSize: 15,
    alignItems: "center",
    fontWeight: "bold",
  },
});
