import { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'
import InputField from '../../components/Input'
import styles from '../../constants/styles/stylesLogin'
import handleRegister  from '../../functions/medicine/handleRegister'

export default function RegisterMedicineScreen({ navigation }) {
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [bula, setBula] = useState('')
    const [price, setPrice] = useState('')

  const onRegister = () => {
    handleRegister( navigation, image, name, category, description, bula, price )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}> Cadastro do Remédio </Text>

         <InputField
          placeholder="Digite o nome"
          keyboardType="default"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <InputField
          placeholder="Digite o categoria"
          keyboardType="default"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />

        <InputField
          placeholder="Digite a descrição"
          keyboardType="default"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />

        <InputField
          placeholder="Digite o preço"
          keyboardType="default"
          value={price}
          onChangeText={(text) => setPrice(text)}
        />

        <InputField
          placeholder="Envie a imagem"
          keyboardType="default"
          value={image}
          onChangeText={(text) => setImage(text)}
        />

        <InputField
          placeholder="Envie a bula"
          keyboardType="default"
          value={bula}
          onChangeText={(text) => setBula(text)}
        />
          
        <TouchableOpacity style={styles.button} onPress={onRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image source={require('../../assests/logo.png')} style={styles.image} />
        </View>

      </View>
    </SafeAreaView>
  )
}



