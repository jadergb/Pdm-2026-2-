// components/Profile.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('expo-01/assets/images/minha-foto.png')} 
        style={styles.image}
      />
      <Text style={styles.name}>Jader Silva</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  }
});