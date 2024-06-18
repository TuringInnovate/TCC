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
    bottomContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 40, 
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    logo: {
      width: 100, 
      height: 60, 
    },
    userInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    searchBarContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 35
    },
    searchInputContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#038B4E',
      borderRadius: 20,
      paddingHorizontal: 10,
    },
    searchInput: {
      flex: 1,
      height: 40,
      color: '#22402F',
    },
    searchIcon: {
      marginLeft: 10,
    },
    userText: {
      fontSize: 16,
      color: '#22402F',
      marginLeft: 5, 
    },
    categoryText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#038B4E',
      marginTop: 40,
    },
    quadradosStyle: {
      marginTop: 30,
    },
    squareContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    footer: {
      backgroundColor: '#038B4E',
      padding: 25, 
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    footerText: {
      color: 'white',
      fontSize: 14,
    },
    descriptionContainer: {
      marginTop: 5,
      marginBottom: 15,
    },
    description:{
      marginTop: 15,
      fontSize: 18,
      marginTop: 5,
    },
    bula:{
      backgroundColor: "#038B4E",
      padding: 12,
      marginTop: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center', 
    },
    bulaText:{
      color: "white",
      fontSize: 16,
      fontWeight: 'bold',
    },
    listMedicine:{
      marginTop: 3,
      justifyContent: 'space-between',
    },
    listMedicineText:{
      fontSize: 20,
      fontWeight: 'bold',
      color: "#038B4E",
      paddingLeft: 10,
    },
    list:{
      borderColor: "#038B4E",
      borderWidth: 2,
      borderRadius: 15,
      marginTop: 15,
      padding: 10
    }
})