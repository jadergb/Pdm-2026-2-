import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import MiniBio from '../components/miniBio'; 
import BotaoPartilharCurriculo from '../components/BotaoPartilharCurriculo'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portfólio Pessoal</Text>
      
      <MiniBio />
      
      <View style={styles.navContainer}>
        <Link href="/sobre" asChild>
          <TouchableOpacity style={styles.navButton}><Text style={styles.navText}>Sobre</Text></TouchableOpacity>
        </Link>
        <Link href="/academica" asChild>
          <TouchableOpacity style={styles.navButton}><Text style={styles.navText}>Formação Académica</Text></TouchableOpacity>
        </Link>
        <Link href="/profissional" asChild>
          <TouchableOpacity style={styles.navButton}><Text style={styles.navText}>Experiência Profissional</Text></TouchableOpacity>
        </Link>
        <Link href="/projetos" asChild>
          <TouchableOpacity style={styles.navButton}><Text style={styles.navText}>Projetos</Text></TouchableOpacity>
        </Link>
      </View>

      <BotaoPartilharCurriculo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  navContainer: { width: '100%', marginVertical: 20, gap: 10 },
  navButton: { backgroundColor: '#34495e', padding: 15, borderRadius: 8, alignItems: 'center' },
  navText: { color: '#fff', fontWeight: 'bold' }
});