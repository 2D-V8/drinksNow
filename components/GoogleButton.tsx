
// Importamos React y el hook useEffect
import React, { useEffect } from "react";
// Importamos los componentes de React Native
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import * as AuthSession from "expo-auth-session";

// Alerta
import { Alert } from "react-native";

// Importamos los módulos necesarios para la autenticación con Google
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

// Importamos funciones de Firebase para autenticación
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
// Importamos nuestra instancia de auth desde el archivo de configuración
import { auth } from "../constants/firebaseConfig";

// Esta línea es necesaria para que funcione correctamente el flujo de autenticación
WebBrowser.maybeCompleteAuthSession();

/* Exportamos y declaramos un componente funcional GoogleButton */
export default function GoogleButton() {
  // Hook para configurar la autenticación con Google
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "120073174751-l6ir4uf9t73i1svivjbad7qocd5tre1t.apps.googleusercontent.com", 
  });

  /* Efecto que se ejecuta cuando cambia la respuesta del login */
  useEffect(() => {
    if (response?.type === "success" && response.authentication?.idToken) {
      const credential = GoogleAuthProvider.credential(response.authentication.idToken);
  
      signInWithCredential(auth, credential)
        .then((result) => {
          console.log("Usuario autenticado:", result.user);
  
          //  Mostramos mensaje de éxito
          Alert.alert(
            "¡Inicio de sesión exitoso!",
            `Bienvenido, ${result.user.displayName} `
          );
        })
        .catch((error) => {
          console.error("Error al autenticar con Google:", error);
        });
    }
  }, [response]);

  return (
    // Botón táctil con estilo que ejecuta promptAsync al presionarlo
    <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
      <Image
        source={require("../assets/images/LogoGoogle.png")} // Ruta al logo de Google
        style={styles.googleIcon}
      />
    </TouchableOpacity>
  );
}

// Definimos los estilos a aplicar a nuestro componente
const styles = StyleSheet.create({
  // Estilo para el botón que contiene el icono
  googleButton: {
    marginTop: 20,
  },

  // Estilo para el icono de Google
  googleIcon: {
    width: 40,
    height: 40,
  },
});
