import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import app from "../config";
import { collection, getFirestore, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export default function ListadoUsuarios(props) {
  const navigation = useNavigation();
  const [listar, setListar] = useState([]);

  useEffect(() => {
    const getListar = async () => {
      try {
        const qyCollection = await getDocs(collection(db, "usuario"));
        const usuarios = [];
        qyCollection.forEach((usuario) => {
          const { Contraseña, Correo, Nombre, ConfirmarContraseña } = usuario.data();
          usuarios.push({
            id: usuario.id,
            Nombre,
            Correo,
            Contraseña,
            ConfirmarContraseña,
          });
        });
        setListar(usuarios);
      } catch (error) {
        console.log(error);
      }
    };
    getListar();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.txtTitulo}>Listado de Usuarios</Text>
        <View>
          {listar.map((lista) => (
            <TouchableOpacity
              key={lista.id}
              style={styles.txtSubtitulo}
              onPress={() =>
                props.navigation.navigate("MostrarUsuarios", {
                  usuariosId: lista.id,
                })
              }
            >
              <Text>{lista.Nombre}</Text>
              <Text>{lista.Correo}</Text>
              <Text>{lista.Contraseña}</Text>
              <Text>{lista.ConfirmarContraseña}</Text>
            
            </TouchableOpacity>

            
          ))}

<TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.txtRegistrarse}>volver</Text>
        </TouchableOpacity>

        
        </View>

        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#837B7B",
    height: "100%",
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
    fontWeight: "300",
    color: "gray",
    textAlign: "left",
    paddingLeft: 30,
    marginTop: 20,
  },
});
