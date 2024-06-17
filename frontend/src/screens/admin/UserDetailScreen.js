import { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import axios from 'axios'
import styles from '../../constants/styles/stylesList'
import handleUpdate from '../../functions/users/handleUptade'
import handleDelete from '../../functions/users/handleDelete'

export default function UserDetailScreen ({ route, navigation }) {
  const { userId } = route.params || {}
  const [user, setUser] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    axios.get(`http://192.168.0.67:3000/users/${userId}`).then(response => { // Busca o usuário com base no ID
        setUser(response.data)
        setName(response.data.name)
        setEmail(response.data.email)
        setPassword(response.data.password)
    })
    .catch(error => {
        console.error('Erro ao buscar usuário:', error) // Caso não encontre o usuário
    })
  }, [userId])


  const onUpdate = () => {
    handleUpdate(name, email, password, navigation, route)
  }

  const onDelete = () => {
    handleDelete(route, navigation)
  }
    

  if (!user) {
    return <Text>Carregando...</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>

        <Text style={styles.label}> Nome do Usuário: </Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}> Email: </Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />

        <Text style={styles.label}> Senha: </Text>
        <TextInput style={styles.input} value={password} onChangeText={setPassword} />

        <TouchableOpacity style={styles.button} onPress={onUpdate} >
          <Text style={styles.textButton}> Atualizar Usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onDelete} >
          <Text style={styles.textButton}> Deletar Usuário</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}


