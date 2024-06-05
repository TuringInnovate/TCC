import { SafeAreaView, View } from 'react-native';
import TopArea from '../components/TopArea/TopArea'
import BottomArea from '../components/BottomArea/BottomArea'
import MiddleArea from '../components/MiddleArea/MiddleArea'
import styles from '../constants/styles/stylesHome';

export default function GeralScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
          <TopArea />
          <MiddleArea />
      </View>
      <View style={styles.bottomContainer}>
      </View>
        <BottomArea />

    </SafeAreaView>
  );
} 