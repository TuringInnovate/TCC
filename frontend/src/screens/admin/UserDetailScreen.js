import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import axios from 'axios'

export default function UserDetailScreen ({ route, navigation }) {
  const { userId } = route.params
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    axios.get(`http://192.168.0.67:3000/users/${userId}`).then(response => { // Busca o usuário com base no ID
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
    })
    .catch(error => {
        console.error('Erro ao buscar usuário:', error) // Caso não encontre o usuário
    })
  }, [userId])

  // Função para atualizar usuário no frontend
  const handleUpdate = () => {
    axios.put(`http://192.168.0.67:3000/users/${userId}`, { name, email, password }).then(response => { // Pega o ID do usuário e seus parâmetros
        alert('Usuário atualizado com sucesso!')
        navigation.goBack() // Volta para a página "inicial"
      })
      .catch(error => {
        console.error('Erro ao atualizar usuário:', error)
      });
  };

  // Função para deletar usuário no frontend
  const handleDelete = () => {
    axios.delete(`http://192.168.0.67:3000/users/${userId}`).then(response => { // Pega o ID do usuário
        alert('Usuário deletado com sucesso!')
        navigation.goBack() // Volta para a página "inicial"
    })
    .catch(error => {
        console.error('Erro ao deletar usuário:', error)
    })
  }

  if (!user) {
    return <Text>Carregando...</Text>
  }

  return (
    <View style={styles.container}>

      <Text style={styles.label}> Nome do Usuário: </Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.label}> Email: </Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />

      <Text style={styles.label}> Senha: </Text>
      <TextInput style={styles.input} value={password} onChangeText={setPassword} />

      <Button title="Atualizar Usuário" onPress={handleUpdate} />
      <Button title="Deletar Usuário" onPress={handleDelete} color="red" />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});


