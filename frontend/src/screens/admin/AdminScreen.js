import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import TopArea from '../../components/TopArea/TopArea'
import styles from '../../constants/styles/stylesHome'
import Item from '../../components/Item'

export default function AdminScreen  ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TopArea />
        
          <Text style={styles.categoryText}> Cadastros </Text>
          <View style={styles.quadradosStyle}>
            <View style={styles.squareContainer}>
              <Item text="USUÁRIO" onPress={() => navigation.navigate('User')} />
              <Item text="MEDICAMENTOS" onPress={() => navigation.navigate('Medicine')} />
            </View>

        </View>
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
  );
} 