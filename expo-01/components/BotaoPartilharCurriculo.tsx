import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

export default function BotaoPartilharCurriculo() {
  
  const gerarEPartilharPDF = async () => {
    const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Helvetica, sans-serif; padding: 20px; }
            h1 { color: #2c3e50; }
            h2 { color: #34495e; border-bottom: 2px solid #ecf0f1; padding-bottom: 5px; }
            p { font-size: 14px; line-height: 1.5; color: #333; }
            .section { margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <h1>O Teu Nome</h1>
          <p>Estudante de Sistemas para a Internet | Desenvolvedor Full-Stack</p>
          
          <div class="section">
            <h2>Experiência Profissional</h2>
            <p><strong>RTECH Soluções (Estágio Administrativo)</strong><br/>
            Monitorização de sistemas de serviço, reuniões semanais de progresso com clientes, elaboração de relatórios técnicos, emissão de faturas e gestão de pagamentos.</p>
          </div>

          <div class="section">
            <h2>Formação Acadêmica</h2>
            <p><strong>Universidade Católica de Pernambuco (UNICAP)</strong><br/>
            Sistemas para a Internet (Início em Março de 2025)</p>
            <p><strong>Instituto Federal de Pernambuco (IFPE)</strong><br/>
            Técnico em Telecomunicações (Concluído em Novembro de 2024)</p>
          </div>

          <div class="section">
            <h2>Projetos de Destaque</h2>
            <p><strong>EstoqueSenior:</strong> Aplicação web em Java Spring Boot para gestão de inventário com modo simplificado de acessibilidade.</p>
            <p><strong>API de Perfis:</strong> Serviço RESTful em Node.js, Express e PostgreSQL (NeonDB) alojado na Vercel.</p>
          </div>
        </body>
      </html>
    `;

    try {

      const { uri } = await Print.printToFileAsync({ html: htmlContent });
      
      
      const isAvailable = await Sharing.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert("Erro", "A partilha não está disponível neste dispositivo.");
        return;
      }

   
      await Sharing.shareAsync(uri, {
        mimeType: 'application/pdf',
        dialogTitle: 'Partilhar Currículo',
        UTI: 'com.adobe.pdf'
      });

    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um problema ao gerar o PDF.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={gerarEPartilharPDF}>
        <Text style={styles.textoBotao}>Partilhar Currículo (PDF)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, // sombra para Android
    shadowColor: '#000', // sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});