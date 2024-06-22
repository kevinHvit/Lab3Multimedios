import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

export default function Aprender() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const getProducto = async () => {
    try {
      const response = await fetch('https://www.fruityvice.com/api/fruit/all');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  const handleFavoriteToggle = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id) ? prevFavorites.filter((favId) => favId !== id) : [...prevFavorites, id]
    );
  };

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitulo}>Lista de Frutas</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por nombre"
        value={search}
        onChangeText={setSearch}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#00C1BB" />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.itemHeader}>
                <Text style={styles.itemName}>{item.name}</Text>
                <TouchableOpacity onPress={() => handleFavoriteToggle(item.id)}>
                  <AntDesign
                    name={favorites.includes(item.id) ? "heart" : "hearto"}
                    size={24}
                    color={favorites.includes(item.id) ? "red" : "gray"}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.itemDetails}>Family: {item.family}</Text>
              <Text style={styles.itemDetails}>Genus: {item.genus}</Text>
              <Text style={styles.itemDetails}>Order: {item.order}</Text>
            </View>
          )}
        />
      )}
      <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
        <Text style={styles.txtBack}>Volver</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    paddingTop: 50,
  },
  txtTitulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#34434D',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34434D',
  },
  itemDetails: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  btnBack: {
    backgroundColor: '#871F1F',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  txtBack: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
