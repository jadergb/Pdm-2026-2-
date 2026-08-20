import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import miniBio from 'expo-01/components/miniBio'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>
      
      <MiniBio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#1a1a1a',
  }
});