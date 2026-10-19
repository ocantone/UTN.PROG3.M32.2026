import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.contenedor}>
    <Image 
        source={require('./images/logo.png')} 
        style={styles.imagenLocal} 
      />



      <Text style={styles.miTexto}> PROGRALibre</Text>

      <Image 
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
              style={styles.imagenRemota} 
            />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miTexto: {
   fontSize: 32,
   fontWeight: 'bold',
   color: '#0000FF',
   marginBottom: 10,
  },
   imagenLocal: {
    width: 120,
    height: 120,
    marginBottom: 15,
    resizeMode: 'contain', // Mantiene la proporción de la imagen sin deformarla
  },
  imagenRemota: {
    width: 120,
    height: 120,
    marginTop: 20,
    resizeMode: 'contain',
  },
});
