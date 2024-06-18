import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import { api } from '../../lib/api'
import TopArea from '../../components/TopArea/TopArea'
import styles from '../../constants/styles/stylesHome'

export default function AdminHomeScreen({ navigation }) {
  const [medicines, setMedicines] = useState([]) // armazena a lista de remédios

  useEffect(() => {
    api.get('/medicine/list').then(response => {
      setMedicines(response.data) // atualiza com os remédios obtidos
    })
    .catch(error => {
      console.error('Erro ao buscar remédios:', error)
    })
  },[])

  // navega para os detalhes do remédio ao ser pressionado
  const viewMedicineDetails = (medicineId, medicineImage, medicineName, medicineDescription, medicinePrice) => {
    navigation.navigate('AdminMedicine', { medicineId, medicineImage, medicineName, medicineDescription, medicinePrice });
  };

 console.log(medicines);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TopArea />
          <FlatList
            data={medicines} keyExtractor={(item) => item._id.toString()} renderItem={({ item }) => ( 
              <TouchableOpacity style={styles.listMedicine} onPress={() => viewMedicineDetails(item._id, item.name, item.image, item.description, item.price)}>
                {/* <Image style={{
                  width: "100%"
                }} source={{
                  uri: item.image
                }} /> */}
                <View style={styles.list}>
                  <Text style={styles.listMedicineText}>{item.name}</Text> 
                  <Text style={styles.description}>{item.description}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
          </View>

        <View style={styles.bottomContainer}>
        </View> 

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('AdminHome')}>
              <Text style={styles.footerText}> Início </Text>
            </TouchableOpacity>
          
            <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
            <Text style={styles.footerText}> Menu </Text>
          </TouchableOpacity>
        </View>

  </SafeAreaView>
  )
}
