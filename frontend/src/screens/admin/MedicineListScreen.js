import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios'
import styles from '../../constants/styles/stylesList'
import TopArea from '../../components/TopArea/TopArea'
import { api } from '../../lib/api';


export default function MedicineListScreen ({ navigation }) {
  const [medicine, setMedicine] = useState([])

  // useEffect para buscar a lista de remédio
  useEffect(() => {
    api.get('/medicine/list').then(response => {
      setMedicine(response.data) // atualiza com a lista de remédios
    })
    .catch(error => {
      console.error('Erro ao buscar remédios:', error)
    })
  }, []) // array vazio garante que a requisição só seja feita uma vez

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>
      
          <FlatList data={medicine} keyExtractor={(item) => item._id} renderItem={({ item }) => ( // Função para retornar cada item da lista
              // vai para a tela de detalhes do usuário
              <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('MedicineDetails', { medicineId: item._id })} >
                <Text style={styles.label1}>{item.name}</Text> 
                <Text style={styles.label2}>{item.category}</Text> 
                <Text style={styles.label2}>{item.description}</Text>
              </TouchableOpacity>
            )}
            scrollEnabled={false}
            ListHeaderComponent={
              <>
                <TopArea /> 

                <Text style={styles.categoryText}> Lista de Remédios </Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterMedicine')}>
                  <Text style={styles.textButton}> CADASTRAR REMÉDIO </Text>
                </TouchableOpacity>
              </>
            }
            />

        </View>
      </View>
    </ScrollView>
  )
}
