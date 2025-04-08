// Importamos React
import React from "react";
// Importamos componentes para construir nuestra interfaz
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Importacion de iconos del paquete @expo.
import { FontAwesome } from "@expo/vector-icons";
// Importamos los componentes que creamos para nuestro login.
import Logo from "../components/Logo";
import PhoneInput from "../components/PhoneInput";
import GoogleButton from "../components/GoogleButton";

// Declaramos nuestro componente Login.
export default function LoginScreen() {
    return (
        //Contenedor Principal.
      <View style={styles.container}>
        <Logo />

        <Text style={styles.title}>Iniciar Sesión o Registrarse</Text>

        <PhoneInput />

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => console.log("Continuar")}
        >
          <Text style={styles.buttonText}>Continuar</Text> 
          <FontAwesome name="arrow-right" size={20} color="white" /> 
        </TouchableOpacity>
  
        <GoogleButton />
      </View>
    );
  }

  const styles = StyleSheet.create({
    // Estilamos todo el contenedor.
    container: {
      flex: 1,
      backgroundColor: "#000",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    // Estilo para el titulo.
    title: {
      color: "#fff",
      fontSize: 16,
      marginBottom: 20,
    },
    // Estilamos el boton continuar.
    continueButton: {
      backgroundColor: "#666",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 10,
    },
    // Estilamos el texto del botom
    buttonText: {
      color: "#fff",
      fontSize: 16,
    },
  });