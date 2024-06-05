import { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import InputField from '../components/Input';
import styles from '../constants/styles/stylesLogin';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para conectar no backend
  const handleLogin = async () => {
    // Verifica se os campos estão preenchidos
    if (!email || !password) {
        Alert.alert('Por favor, preencha todos os campos'); // Alert é como se fosse um pop-up
        return;
    }

    try {
      // Conecta no backend e procura o usuario
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();
      // Se conseguir conectar e achar o usuario no banco
      if (response.ok) {
        navigation.navigate('HomeScreen')
      }
      else {
        // Se nao conseguir
        Alert.alert('Email ou Senha inválidos');
      }
    }

    catch (error) {
      console.log('Erro ao conectar ao servidor:', error);
      Alert.alert('Erro ao conectar ao servidor'); // Caso não consiga conectar no backend
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Olá!{'\n'}Faça seu
          <Text style={{ color: '#038B4E' }}> LOGIN </Text>
        </Text>
          
        <InputField
          placeholder="Digite seu email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <InputField
          placeholder="Digite sua senha"
          keyboardType="password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
          
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Esqueceu sua senha?')}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Ainda não possui uma conta? <Text style={{ color: '#22402F' }}>Faça seu cadastro.</Text></Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image source={require('../assests/logo.png')} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
}
