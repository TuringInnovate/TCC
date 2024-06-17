import axios from "axios"

export default async function handleDelete(route, navigation){
    const { userId } = route.params || {}

    axios.delete(`http://192.168.0.67:3000/users/${userId}`).then(response => { // Pega o ID do usuário
        alert('Usuário deletado com sucesso!')
        navigation.goBack() // Volta para a página "inicial"
    })
    .catch(error => {
        console.error('Erro ao deletar usuário: ', error)
    })
}