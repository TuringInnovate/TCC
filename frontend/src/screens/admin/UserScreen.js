import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios'
import styles from '../../constants/styles/stylesList'
import TopArea from '../../components/TopArea/TopArea'


export default function UserListScreen ({ navigation }) {
  const [users, setUsers] = useState([])

  // useEffect para buscar a lista de usuários
  useEffect(() => {
    axios.get('http://192.168.0.67:3000/users/list').then(response => {
      setUsers(response.data) // atualiza com a lista de usuários
    })
    .catch(error => {
      console.error('Erro ao buscar usuários:', error); 
    })
  }, []); // array vazio garante que a requisição só seja feita uma vez

  return (
    <ScrollView> 
      <View style={styles.container}>
        <View style={styles.topContainer}>

          <TopArea /> 

          <Text style={styles.categoryText}> Lista de Usuários </Text>
    
          <FlatList data={users} keyExtractor={(item) => item._id} renderItem={({ item }) => ( // Função para retornar cada item da lista
              // vai para a tela de detalhes do usuário
              <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('UserDetail', { userId: item._id })} >
                <Text style={styles.name}>{item.name}</Text> 
                <Text style={styles.email}>{item.email}</Text>
              </TouchableOpacity>

          )}/>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> CADASTRAR USUÁRIO </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}
