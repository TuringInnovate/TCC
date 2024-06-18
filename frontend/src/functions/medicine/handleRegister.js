import axios from 'axios'
import { Alert } from 'react-native'

export default async function handleRegister ( navigation, image, name, category, description, bula, price ) {
    if (!name || !category || !description) {
        Alert.alert('Por favor, preencha todos os campos')
        return
    }

    try {
        const response = await fetch('http://192.168.106.30:3000/medicine/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, category, description}),
          })

        const result = await response.json()

        if (response.ok) {
            Alert.alert('Remédio cadastrado com sucesso')
            navigation.goBack() // Navegue para a tela de login ou outra tela conforme necessário
        }
        else {
            Alert.alert(result.msg || 'Erro ao cadastrar remédio')
            console.log('Erro ao cadastrar remédio: ', result.msg)
        }
    }
    catch(error){
    console.log('Erro ao conectar ao servidor:', error)
    Alert.alert('Erro ao conectar ao servidor')
    }
}
