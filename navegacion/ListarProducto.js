import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import app from "../config";
import { collection, getFirestore, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const db = getFirestore(app);

export default function ListadoProducto(props) {
  const navigation = useNavigation();
  const [listar, setListar] = useState([]);

  useEffect(() => {
    const getListar = async () => {
      try {
        const qyCollection = await getDocs(collection(db, "producto"));
        const productos = [];
        qyCollection.forEach((producto) => {
          const { Codigo, Cantidad, Nombre, Fecha } = producto.data();
          productos.push({
            id: producto.id,
            Codigo,
            Cantidad,
            Nombre,
            Fecha,
          });
        });
        setListar(productos);
      } catch (error) {
        console.log(error);
      }
    };
    getListar();
  }, []);

  const handleDelete = (id) => {
    Alert.alert(
      "Eliminar Producto",
      "¿Estás seguro de que deseas eliminar este producto?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: async () => {
            try {
              await deleteDoc(doc(db, "producto", id));
              setListar(listar.filter(producto => producto.id !== id));
              Alert.alert("Producto eliminado");
            } catch (error) {
              console.error("Error al eliminar el producto: ", error);
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleEdit = (producto) => {
    navigation.navigate("EditarProducto", { producto });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.txtTitulo}>Listado de Productos</Text>
        <View>
          {listar.map((lista) => (
            <View key={lista.id} style={styles.productItem}>
              <Text style={styles.productName}>{lista.Nombre}</Text>
              <Text style={styles.productDetails}>Código: {lista.Codigo}</Text>
              <Text style={styles.productDetails}>Cantidad: {lista.Cantidad}</Text>
              <Text style={styles.productDetails}>Fecha: {lista.Fecha}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.btnEdit}
                  onPress={() => handleEdit(lista)}
                >
                  <Text style={styles.txtButton}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btnDelete}
                  onPress={() => handleDelete(lista.id)}
                >
                  <Text style={styles.txtButton}>Eliminar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate("Principal")}>
          <Text style={styles.txtBack}>Volver</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  txtTitulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#34434D",
    textAlign: "center",
    marginVertical: 20,
  },
  productItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34434D",
  },
  productDetails: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  btnEdit: {
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnDelete: {
    backgroundColor: "#FF6347",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  txtButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnBack: {
    backgroundColor: "#871F1F",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    marginTop: 20,
  },
  txtBack: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
