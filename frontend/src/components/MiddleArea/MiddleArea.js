import { View, Text } from 'react-native'
import Item from '../Item'
import styles from '../../constants/styles/stylesHome'

export default MiddleArea = ({ navigation }) => {
  const telasCategorias = (ItemId) => {
    navigation.navigate('DynamicScreenCategory', { ItemId })
  }
  return (
    <View>
      <Text style={styles.categoryText}> Categoria </Text>

        <View style={styles.quadradosStyle}>

          <View style={styles.squareContainer}>
            <Item text="Anti Alérgico" id="1" onPress={telasCategorias} />
            <Item text="Antibióticos" id="2" onPress={telasCategorias} />
          </View>

          <View style={styles.squareContainer}>
              <Item text="Anti Inflamatório" id="3" onPress={telasCategorias} />
              <Item text="Dor Muscular" id="4" onPress={telasCategorias} />
            </View>

        </View>
    </View>
  )
}