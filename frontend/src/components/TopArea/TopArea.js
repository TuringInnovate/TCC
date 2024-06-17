import React, { useState } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import styles from '../../constants/styles/stylesHome';

export default function TopArea() {
  const [queryPesquisa, setQueryPesquisa] = useState('')
  const [resultadosPesquisa, setResultadosPesquisa] = useState([])

  const handleSearch = async (query) => {
    setQueryPesquisa(query);
    if (query.length >= 3) {
      try {
        const response = await axios.get(`http://192.168.0.67:3000/users/search?name=${query}`);
        setResultadosPesquisa(response.data);
      } catch (error) {
        console.error('Erro ao buscar resultados:', error);
      }
    } else {
      setResultadosPesquisa([]);
    }
  };

  return (
    <View>
      <View style={styles.logoContainer}>
        <Image source={require('../../assests/logo.png')} style={styles.logo} />
        <View style={styles.userInfoContainer}>
        <Text style={styles.userText}> Olá, Usuário </Text>
        </View>
      </View>

      <View style={styles.searchBarContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Procure aqui!"
            placeholderTextColor="#22402F"
            value={queryPesquisa}
            onChangeText={handleSearch}
          />
          <AntDesign name="search1" size={20} color="#22402F" style={styles.searchIcon} />
        </View>
      </View>

      <FlatList
        data={resultadosPesquisa}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <Text style={styles.resultText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id.toString()}
        style={styles.searchResultsContainer}
      />
    </View>
  );
}
