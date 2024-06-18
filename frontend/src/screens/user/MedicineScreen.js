import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from '../../constants/styles/stylesHome'
import TopArea from '../../components/TopArea/TopArea'

export default function MedicineScreen({ route, navigation }) {
  // extrai os parâmetros passados pela navegação
  const { medicineId, medicineName, medicineDescription, medicinePrice, medicineBula, medicineImage } = route.params

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>

        <TopArea />

       
        <View style={styles.descriptionContainer}>
          <Text style={styles.categoryText}>{medicineName}</Text>   
          <Text style={styles.description}>Descrição: </Text>
          <Text style={styles.description}>{medicineDescription}</Text>

          <Text style={styles.description}>Preço: R${medicinePrice}</Text>
          <TouchableOpacity style={styles.bula} onPress={() => navigation.navigate({medicineBula})}>
            <Text style={styles.bulaText}> ABRIR BULA </Text>
          </TouchableOpacity>
        </View>
      </View>

        <View style={styles.bottomContainer}>
        </View>   

        <View style={styles.footer}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.footerText}> Início </Text>
              </TouchableOpacity>
            
              <TouchableOpacity onPress={() => navigation.navigate('UserMenu')}>
              <Text style={styles.footerText}> Menu </Text>
            </TouchableOpacity>
          </View>

    </SafeAreaView>
  )
}
