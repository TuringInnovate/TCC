import axios from "axios"

export default async function handleDelete(route, navigation){
    const { medicineId } = route.params || {}

    axios.delete(`http://192.168.0.67:3000/medicine/${medicineId}`).then(response => { // Pega o ID do usuário
        alert('Remédio deletado com sucesso!')
        navigation.goBack() // Volta para a página "inicial"
    })
    .catch(error => {
        console.error('Erro ao deletar remédio: ', error)
    })
}