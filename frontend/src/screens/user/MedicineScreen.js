import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function MedicineScreen({ route, navigation }) {
  // extrai os parâmetros passados pela navegação
  const { medicineId, medicineName, medicineDescription, medicinePrice } = route.params

  return (
    <View style={{ padding: 20 }}>

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{medicineName}</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>{medicineDescription}</Text>
      <Text style={{ fontSize: 16 }}>Preço: R${medicinePrice}</Text>

      <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#eee', padding: 10 }} onPress={() => navigation.goBack()}>
        <Text style={{ textAlign: 'center' }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}
