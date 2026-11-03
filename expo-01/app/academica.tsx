import { View, Text, StyleSheet } from 'react-native';

export default function Academica() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formação Académica</Text>
      
      <View style={styles.item}>
        <Text style={styles.inst}>Universidade Católica de Pernambuco</Text>
        <Text style={styles.curso}>Sistemas para a Internet</Text>
        <Text style={styles.periodo}>Início: Março de 2025</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.inst}>Instituto Federal de Pernambuco (IFPE)</Text>
        <Text style={styles.curso}>Técnico em Telecomunicações</Text>
        <Text style={styles.periodo}>Concluído em: Novembro de 2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#2c3e50' },
  item: { marginBottom: 15, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  inst: { fontSize: 18, fontWeight: 'bold' },
  curso: { fontSize: 16, color: '#34495e', marginTop: 4 },
  periodo: { fontSize: 14, color: '#7f8c8d', marginTop: 4 }
});