// Importamos React & Componentes.
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
// Importamos libreria Para mostrar la bandera segun su codigo. ("CO": Colombia)
import CountryFlag from "react-native-country-flag";

/* Exportamos & Definimos una funcion para crear un campo de entrada para un numero Telefonico
Acompañado de la bandera del pais */

export default function PhoneInput() {
    return (
      <View style = {styles.inputContainer}> 
        <CountryFlag isoCode="CO" size={20}/> 
        <Text style = {styles.countryCode}> +57 </Text>
        <TextInput
          keyboardType = "phone-pad" // Teclado numerico para telefonos.
          style = {styles.input}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    // estilos para el contenedor general
    inputContainer: {
        flexDirection: "row",              // Acomoda los elementos horizontalmente (bandera + código + input)
        backgroundColor: "#D9D9D9",        // Color de fondo gris claro
        paddingHorizontal: 10,             // Espaciado horizontal interno
        alignItems: "center",              // Centra verticalmente la bandera, el texto y el input
        borderRadius: 10,                  // Bordes redondeados
        width: "100%",                     // Ocupa todo el ancho del contenedor padre
        height: 50,                        // Altura fija del input
      },
      
      // estilos para la bandera
      countryCode: {
        marginLeft: 10,                    // Espacio entre la bandera y el código
        fontSize: 16,                      // Tamaño de texto decente
        color: "#333",                     // Color oscuro, buena legibilidad
      },
      
      // estilo para el campo de entrada de texto.
      input: {
        flex: 1,                           // Ocupa el espacio restante
        fontSize: 16,                      // Texto legible
        paddingHorizontal: 10,            // Espacio interno para que el texto no esté pegado al borde
      },
      
  });
