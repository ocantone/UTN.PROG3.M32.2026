import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
 return (
 <View style={styles.container}>
 <StatusBar barStyle="dark-content" />
 <Text style={styles.titulo}>PROGRAMACIÓN III 2026</Text>
 <Text style={styles.subtitulo}>Desarrollo de apps en React Native + Expo</Text>
 </View>
 );
}

const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#0000FF',
 alignItems: 'center',
 justifyContent: 'center',
 padding: 20,
 },
 titulo: {
 fontSize: 32,
 fontWeight: 'bold',
 color: '#ffff00',
 marginBottom: 10,
 },
 subtitulo: {
 fontSize: 22,
 color: '#7f8c8d',
 textAlign: 'center',
 },
});