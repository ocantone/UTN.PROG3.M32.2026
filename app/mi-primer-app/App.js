import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
 return (
 <View style={styles.container}>
 <StatusBar barStyle="dark-content" />
 <Text style={styles.titulo}>¡Hola Mundo!</Text>
 <Text style={styles.subtitulo}>Mi primera app en React Native + Expo</Text>
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
 },
});