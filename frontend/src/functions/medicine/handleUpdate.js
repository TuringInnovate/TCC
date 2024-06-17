import axios from "axios"

export default async function handleUpdate( route, navigation, image, name, category, description, bula, price ){
    const { medicineId } = route.params || {}

    try {
        const response = await axios.put(`http://192.168.0.67:3000/medicine/${medicineId}`, {image, name,category, description, bula, price})
        if (response.status === 200) {
            alert('Remédio atualizado com sucesso!');
            navigation.goBack(); // Volta para a página "inicial"
        }
        else {
            throw new Error('Erro ao atualizar remédio');
        }
    }
    catch (error) {
        console.error('Erro ao atualizar remédio: ', error);
    }
}