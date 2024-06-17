import { StyleSheet } from 'react-native'
import { heightTela, widthTela } from '../dimensions'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    width: widthTela,
    height: heightTela
  },
  topContainer: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#038B4E'
  },
  label1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  label2: {
    fontSize: 16,
    color: '#555',
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#038B4E',
    marginTop: 40,
  },
  list: {
    marginTop: 20,
    borderColor: '#038B4E',
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: '#038B4E',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#038B4E',
    borderRadius: 15,
    padding: 12,
  },
  textButton: {
    fontSize: 15,
    color: '#fff'
  }
})