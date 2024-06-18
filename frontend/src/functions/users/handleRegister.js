import axios from 'axios'
import { Alert } from 'react-native'

export default async function handleRegister (name, email, password, navigation) {
    if (!name || !email || !password) {
    Alert.alert('Por favor, preencha todos os campos')
    return
    }

    try {
        const response = await fetch('http://192.168.106.30:3000/users/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
          })

        const result = await response.json()

        if (response.ok) {
            Alert.alert('Usuário registrado com sucesso')
            navigation.goBack() // Navegue para a tela de login ou outra tela conforme necessário
        }
        else {
            Alert.alert(result.msg || 'Erro ao registrar usuário')
            console.log('Erro ao registrar usuário: ', result.msg)
        }
    }
    catch(error){
    console.log('Erro ao conectar ao servidor:', error)
    Alert.alert('Erro ao conectar ao servidor')
    }
}
