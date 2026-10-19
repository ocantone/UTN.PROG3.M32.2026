import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  // Función para abrir la URL externa
  const abrirSitioWeb = async () => {
    const url = 'https://utn.edu.ar';
    
    // Verificamos si el dispositivo puede abrir la URL antes de intentarlo
    const sePuedeAbrir = await Linking.canOpenURL(url);

    if (sePuedeAbrir) {
      await Linking.openURL(url);
    } else {
      console.log("No se puede abrir la URL: " + url);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Image 
        source={require('./images/logo.png')} 
        style={styles.imagenLocal} 
      />

      <Text style={styles.titulo}>¡Hola Mundo!</Text>
      <Text style={styles.subtitulo}>Mi primera app en React Native + Expo</Text>

      {/* Botón/Link interactivo */}
      <TouchableOpacity style={styles.botonLink} onPress={abrirSitioWeb}>
        <Text style={styles.textoLink}>Visitar redes1b.com.ar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagenLocal: {
    width: 120,
    height: 120,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 30,
  },
  botonLink: {
    backgroundColor: '#3498db',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginTop: 30,
  },
  textoLink: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});