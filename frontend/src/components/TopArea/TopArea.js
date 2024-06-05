import {View, Text, TextInput, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import styles from '../../constants/styles/stylesHome'

export default function TopArea() {
  return (
    <View style={styles.topContainer}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assests/logo.png')} style={styles.logo} />

        <View style={styles.userInfoContainer}>
        <Text style={styles.userText}> Olá, usuário</Text>
        </View>

      </View>

      <View style={styles.searchBarContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
          style={styles.searchInput}
          placeholder="Procure aqui!"
          placeholderTextColor="#22402F"
          />
          <AntDesign name="search1" size={20} color="#22402F" style={styles.searchIcon} />
        </View>
      </View>
         
    </View>
  )
}