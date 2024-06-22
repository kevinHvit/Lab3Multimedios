import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Componentes de las paginas
import Login from './navegacion/Login';
import Registro from "./navegacion/Registro";
import Producto from "./navegacion/Producto";
import ListadoUsuarios from "./navegacion/ListadoUsuarios";
import EjemploApi from "./navegacion/EjemploApi";
import Principal from "./navegacion/Principal";
import ListarProducto from "./navegacion/ListarProducto";
import Aprender from "./navegacion/Aprender";



const Stack = createStackNavigator();

function Controlrutas() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

            <Stack.Screen
                name="Registro"
                component={Registro}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />
            <Stack.Screen
                name="Producto"
                component={Producto}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

            <Stack.Screen
                name="EjemploApi"
                component={EjemploApi}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />
            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />

            <Stack.Screen
                name="ListadoUsuarios"
                component={ListadoUsuarios}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />
            <Stack.Screen

                name="ListarProducto"
                component={ListarProducto}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            /><Stack.Screen

                name="Aprender"
                component={Aprender}
                options={{ headerBackTitleVisible: false, headerShown: false }}
            />




        </Stack.Navigator>
    );
}

export default function Navegacion() {
    return (
        <NavigationContainer>
            <Controlrutas />
        </NavigationContainer>
    );
}