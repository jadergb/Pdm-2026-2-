import { View, Text } from 'react-native';

export default function Sobre() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Tecnologias utilizadas: React Native, Expo Router.</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>Funcionalidade extra: Geração e partilha de Currículo em PDF.</Text>
    </View>
  );
}