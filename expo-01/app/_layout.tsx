import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#007AFF' }, headerTintColor: '#fff' }}>
      <Stack.Screen name="index" options={{ title: 'Início' }} />
      <Stack.Screen name="sobre" options={{ title: 'Sobre' }} />
      <Stack.Screen name="academica" options={{ title: 'Formação Académica' }} />
      <Stack.Screen name="profissional" options={{ title: 'Experiência Profissional' }} />
      <Stack.Screen name="projetos" options={{ title: 'Projetos' }} />
    </Stack>
  );
}