import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
 return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.titulo}>Programación III</Text>
        <Text style={styles.subtitulo}>Desarrollo de apps en React Native + Expo</Text>
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
 color: '#272929',    //  000000   a FFFFFF  (24 bits = 16 millones colores).
 textAlign: 'center',
 },
});