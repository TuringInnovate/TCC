import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import axios from 'axios'

export default function HomeScreen({ navigation }) {
  const [medicines, setMedicines] = useState([]) // armazena a lista de remédios

  useEffect(() => {
    axios.get('http://192.168.0.67:3000/medicine/list').then(response => {
      setMedicines(response.data) // atualiza com os remédios obtidos
    })
    .catch(error => {
      console.error('Erro ao buscar remédios:', error)
    })
  },[])

  // navega para os detalhes do remédio ao ser pressionado
  const viewMedicineDetails = (medicineId, medicineName, medicineDescription, medicinePrice) => {
    navigation.navigate('MedicineDetails', { medicineId, medicineName, medicineDescription, medicinePrice });
  };

  return (
    <View>
      <FlatList
        data={medicines} keyExtractor={(item) => item._id.toString()} renderItem={({ item }) => ( 
          <TouchableOpacity style={{ padding: 20 }} onPress={() => viewMedicineDetails(item._id, item.name, item.description, item.price)}>
            <Text>{item.name}</Text> 
            <Text>{item.description}</Text> 
            <Text>R${item.price}</Text> 
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
