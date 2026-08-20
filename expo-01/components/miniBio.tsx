// components/MiniBio.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from './Profile';

export default function MiniBio() {
  return (
    <View style={styles.container}>
      <Profile />
      <Text style={styles.bio}>
        Estudante de Sistemas para Internet na UNICAP, que visa o desenvolvimento web e tecnologias de redes, como principal atuação.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    fontStyle: 'italic',
    marginTop: 5,
  }
});