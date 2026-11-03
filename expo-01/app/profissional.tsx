import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Profissional() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>

      <View style={styles.item}>
        <Text style={styles.empresa}>RTECH Soluções</Text>
        <Text style={styles.cargo}>Estágio Administrativo</Text>
        <Text style={styles.desc}>Monitoramento de sistemas de serviço, reuniões semanais de progresso com clientes, elaboração de relatórios técnicos e planilhas, emissão de notas fiscais, pagamento de contas e compra de materiais.</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.empresa}>Voicecorp Telecomunicações LTDA</Text>
        <Text style={styles.cargo}>Suporte Técnico VOIP (Jul 2022 - Fev 2023)</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.empresa}>LIDER TELECOM</Text>
        <Text style={styles.cargo}>Analista de Sistemas / Assistente Administrativo (Dez 2019 - Jun 2022)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#2c3e50' },
  item: { marginBottom: 20, paddingBottom: 15, borderBottomWidth: 1, borderBottomColor: '#eee' },
  empresa: { fontSize: 18, fontWeight: 'bold' },
  cargo: { fontSize: 16, color: '#34495e', marginTop: 4 },
  desc: { fontSize: 14, color: '#555', marginTop: 6, lineHeight: 20 }
});