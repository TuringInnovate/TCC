import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import TopArea from '../../components/TopArea/TopArea'
import styles from '../../constants/styles/stylesHome'
import Item from '../../components/Item'

export default function MedicineScreen  ({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TopArea />
        
          <Text style={styles.categoryText}> Remédios </Text>
          <View style={styles.quadradosStyle}>
            <View style={styles.squareContainer}>
              <Item text="LISTA DE REMÉDIOS"  />
              <Item text="ATUALIZAR REMÉDIO" />
            </View>

            <View style={styles.squareContainer}>
              <Item text="EXCLUIR REMÉDIO"  />
              <Item text="CADASTRAR REMÉDIO" />
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