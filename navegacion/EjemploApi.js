import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Pressable, ActivityIndicator, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from "@react-navigation/native";


export default function EjemploApi() {

    const navigation = useNavigation();

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();
            console.log(data);
            setData(json.movies);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);
    
    
    return (

    
            <View style={{ flex: 1, padding: 24, marginTop: 70,}}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <Text>
                                {item.title}, {item.releaseYear}
                            </Text>
                        )}
                    />
                )}
                <StatusBar style="auto" />
            </View>
          
       
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingBottom: 290,
    },

    containerSvg: {
        alignItems: 'center',
    },

    txtTitulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#34434D',
        textAlign: 'left',
        paddingLeft: 30,

    },
    txtSubtitulo: {
        fontSize: 20,
        fontWeight: 'light',
        color: 'gray',
        textAlign: 'left',
        paddingLeft: 30,
        marginTop: 20,
    },

    txtInput: {
        width: '80%',
        height: 50,
        borderRadius: 30,
        paddingLeft: 30,
        marginTop: 20,
        marginLeft: 30,
        borderColor: 'gray',
        color: '#000000',
        backgroundColor: '#F5F5F5',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 4,
        shadowRadius: 10,
        elevation: 10,
    },

    txtPass: {
        textAlign: 'right',
        paddingTop: 10,
        marginRight: 50,
        color: '#00C1BB',
        fontSize: 15,
    },

    btnLogin: {
        borderRadius: 10,
        width: 219,
        height: 53,
        marginTop: 35,
        marginLeft: 80,
        paddingTop: 10,
    },

    txtLogin: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },

    txtCuenta: {
        textAlign: 'center',
        paddingTop: 10,
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
    },

    txtRegistrarse: {
        textAlign: 'center',
        color: '#00C1BB',
        fontSize: 15,
        alignItems: 'center',
        fontWeight: 'bold',
    },

});