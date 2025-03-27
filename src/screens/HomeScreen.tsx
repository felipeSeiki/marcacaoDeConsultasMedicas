import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView, FlatList, Alert, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { HeaderContainer, HeaderTitle } from '../components/Header';

const HomeScreen = () => {
    const [texto, setTexto] = useState('');
    const [items, setItems] = useState([
        { id: '1', texto: 'Felipe'},
        { id: '2', texto: 'Augusto'},
        { id: '3', texto: 'Matheus'},
    ]);

    const [idItem, setIdItem] = useState('');

    const addItem = () => {
        if (texto.trim()) {
            setItems([...items, { id: Date.now().toString(), texto}]);
            setTexto('');
        }
    }

    const removeItem = (id: string) => {
        if (id){
            const listaAtualizada = items.filter((item) => item.id !== id);
            setItems(listaAtualizada);
        }
    }

    return(
        <Container>
        <HeaderContainer>
          <HeaderTitle>Meu Primeiro App</HeaderTitle>
        </HeaderContainer>
  
        <Content>
          <Input
            placeholder="Escreva seu nome"
            onChangeText={setTexto}
            value={texto}
          />
  
          <AddButton onPress={addItem}>
            <ButtonText>Adicionar</ButtonText>
          </AddButton>
  
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ListItem>
                    <ListItemText>{item.texto}</ListItemText>
                    <TouchableOpacity onPress={() => removeItem(item.id)}>
                        <AntDesign name="delete" size={24} color="black" />        
                    </TouchableOpacity>
                </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  };
  
  const Container = styled.ScrollView`
    flex: 1;
    background-color: #f8f9fa;
  `;
  
  const Content = styled.View`
    padding: 20px;
  `;
  
  const Input = styled.TextInput`
    height: 40px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
  `;
  
  const AddButton = styled.TouchableOpacity`
    background-color: #28a745;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
    align-items: center;
  `;
  
  const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
  `;
  
  const ListItem = styled.View`
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    elevation: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  
  const ListItemText = styled.Text`
    font-size: 16px;
  `;
  
  export default HomeScreen;