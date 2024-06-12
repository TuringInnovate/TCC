import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  topContainer: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  userItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
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
  button: {
    backgroundColor: '#038B4E',
    margin: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    padding: 10,
    fontWeight: 'bold',
  }
})