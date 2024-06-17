import axios from "axios"

export default async function handleUpdate( route, navigation, name, email, password ){
    const { userId } = route.params || {}

    axios.put(`http://192.168.0.67:3000/users/${userId}`, { name, email, password }).then(response => { // Pega o ID do usuário e seus parâmetros
        alert('Usuário atualizado com sucesso!')
        navigation.goBack() // Volta para a página "inicial"
    })
    .catch(error => {
        console.error('Erro ao atualizar usuário: ', error)
    })
}