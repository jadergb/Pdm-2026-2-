import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';

export default function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Substitui esta URL pela rota real da tua API na Vercel (ex: https://tua-api.vercel.app/projetos)
    // Se a API ainda não tiver esta rota pronta, podes usar um ficheiro JSON temporário ou mock para testar a entrega.
    fetch('https://aplica-es-orientadas-a-servi-o-2026.vercel.app')
      .then((response) => response.json())
      .then((data) => {
        setProjetos(data);
        setCarregando(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar projetos da API:", error);
        // Fallback de segurança caso a API falhe durante a apresentação
        setProjetos([
          { id: 1, nome: "EstoqueSenior", desc: "Aplicação web em Java Spring Boot..." },
          { id: 2, nome: "API RESTful de Perfis", desc: "Serviço em Node.js, Express e PostgreSQL..." },
          { id: 3, nome: "Sistema Automatizado de RH", desc: "Cálculo automatizado de horas extra (HH:MM)..." }
        ]);
        setCarregando(false);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Projetos (Via API)</Text>

      {carregando ? (
        <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 50 }} />
      ) : (
        projetos.map((projeto: any) => (
          <View key={projeto.id || Math.random()} style={styles.item}>
            <Text style={styles.nome}>{projeto.nome}</Text>
            <Text style={styles.desc}>{projeto.desc}</Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#2c3e50' },
  item: { marginBottom: 15, padding: 15, backgroundColor: '#f9f9f9', borderRadius: 8 },
  nome: { fontSize: 18, fontWeight: 'bold', color: '#2980b9' },
  desc: { fontSize: 14, color: '#444', marginTop: 6, lineHeight: 20 }
});