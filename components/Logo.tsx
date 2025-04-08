//Importamos React 
import React from "react";
//Importamos Modulos de  React Native, Imagenes, & StyleSheet: Para los estilos en formato Js.
import { Image, StyleSheet } from "react-native";

// Exportamos y Definimos Componente Logo
export default function Logo() {
    return (
      <Image
        source={require("../assets/images/LogoDriks.png")}
        style={styles.logo} // Aplica Estilos en un objeto styles.
        resizeMode="contain" // Aseguramos que la imagen escale para encajar dentro del contenedor.
      />
    );
  }

// Creamos la constante styles para definir los estilos aplicados al logo.
  const styles = StyleSheet.create({
    logo: {
      width: 250,
      height: 150,
      marginBottom: 20,
    },
  });