import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthTela } from '../constants/dimensions'

export default Item = ({ text, onPress, id }) => {
  return (
    <TouchableOpacity onPress={() => onPress(id)}>
      <View style={styles.square}>
        <Text style={styles.squareText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: widthTela * 0.4, 
    height: 100,
    backgroundColor: 'white', 
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#038B4E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareText: {
    fontSize: 16,
    color: '#22402F',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

