import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { signInWithCredential, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../constants/firebaseConfig'; // Importamos el auth desde constants

WebBrowser.maybeCompleteAuthSession();

// Hook personalizado para iniciar sesión con Google
export function useGoogleAuth(onLogin: (user: any) => void) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "120073174751-l6ir4uf9t73i1svivjbad7qocd5tre1t.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success" && response.authentication?.idToken) {
      const credential = GoogleAuthProvider.credential(response.authentication.idToken);
      signInWithCredential(auth, credential).then((result) => {
        onLogin(result.user);
      });
    }
  }, [response]);

  return {
    promptAsync,
    request,
  };
}
