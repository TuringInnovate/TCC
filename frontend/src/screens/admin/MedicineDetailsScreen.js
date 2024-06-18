import { useEffect, useState } from 'react'
import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import axios from 'axios'
import styles from '../../constants/styles/stylesList'
import handleUpdate from '../../functions/medicine/handleUpdate'
import handleDelete from '../../functions/medicine/handleDelete'
import { api } from '../../lib/api'

export default function MedicineDetailsScreen ({ route, navigation }) {
  const { medicineId } = route.params || {}
  const [medicine, setMedicine] = useState(null)
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [bula, setBula] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    api.get(`/medicine/${medicineId}`).then(response => { // Busca o remédio com base no ID
        setMedicine(response.data)
        setImage(response.data.image)
        setName(response.data.name)
        setCategory(response.data.category)
        setDescription(response.data.description)
        setBula(response.data.bula)
        setPrice(response.data.price)
    })
    .catch(error => {
        console.error('Erro ao buscar remédio:', error) // Caso não encontre o remédio
    })
  }, [medicineId])


  const onUpdate = () => {
    handleUpdate(route, navigation, image, name, category, description, bula, price)
  }

  const onDelete = () => {
    handleDelete(route, navigation)
  }
    

  if (!medicine) {
    return <Text>Carregando...</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>

        <Text style={styles.label}> Nome do Remédio: </Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}> Imagem: </Text>
        <TextInput style={styles.input} value={image} onChangeText={setImage} />

        <Text style={styles.label}> Categoria do Remédio: </Text>
        <TextInput style={styles.input} value={category} onChangeText={setCategory} />

        <Text style={styles.label}> Descrição: </Text>
        <TextInput style={styles.input} value={description} onChangeText={setDescription} />

        <Text style={styles.label}> Bula: </Text>
        <TextInput style={styles.input} value={bula} onChangeText={setBula} />

        <Text style={styles.label}> Preço: </Text>
        <TextInput style={styles.input} value={price} onChangeText={setPrice} />

        <TouchableOpacity style={styles.button} onPress={onUpdate} >
          <Text style={styles.textButton}> Atualizar Remédio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onDelete} >
          <Text style={styles.textButton}> Deletar Remédio</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}


