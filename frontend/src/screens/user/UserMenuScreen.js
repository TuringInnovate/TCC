import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../../constants/styles/stylesHome'
import Item from '../../components/Item'
import TopArea from '../../components/TopArea/TopArea'

export default function UserMenuScreen  ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TopArea />
          <Text style={styles.categoryText}> Usuário </Text>
          <View style={styles.quadradosStyle}>
            <View style={styles.squareContainer}>
              <Item text="ATUALIZAR INFORMAÇÕES" onPress={() => navigation.navigate('User')} />
            </View>

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
  );
} 