import { View, Text } from 'react-native'
import styles from '../../constants/styles/stylesHome'

export default function BottomArea() {
  return(
    <View style={styles.footer}>
      <Text style={styles.footerText}> Início </Text>
      <Text style={styles.footerText}> Menu </Text>
    </View>
  )
}