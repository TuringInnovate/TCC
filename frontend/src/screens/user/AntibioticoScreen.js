import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import styles from '../../constants/styles/stylesHome'
import Item from '../../components/Item'
import TopArea from '../../components/TopArea/TopArea'

export default function Antibiotico  ({ navigation }) {
  const telasRemedios = (ItemId) => {
    navigation.navigate('DynamicScreenCategory', { ItemId })
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <TopArea />

          <Text style={styles.categoryText}> Categoria </Text>
          <View style={styles.quadradosStyle}>
            <View style={styles.squareContainer}>
              <Item text="Anti Alérgico" id="1" onPress={telasRemedios} />
              <Item text="Antibióticos" id="2" onPress={telasRemedios} />
            </View>

            <View style={styles.squareContainer}>
              <Item text="Anti Inflamatório" id="3" onPress={telasRemedios} />
              <Item text="Dor Muscular" id="4" onPress={telasRemedios} />
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