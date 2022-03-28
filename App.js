import React, {useState} from "react";
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from "./components/Header";
import ListItem from './components/ListItem'
import AddItem from "./components/AddItem";
import {v1 as uuidv1} from 'uuid'


const App = () => {
  const [items, setItems] = useState([
    {
      id: uuidv1(), 
      text: 'Milk'
    },
    {
      id: uuidv1(), 
      text: 'Banana'
    },
    {
      id:uuidv1(), 
      text: 'Apple'
    },

    {
      id: uuidv1(), 
      text: 'Orange'
    }
  ])

  const deleteItem =(id) => {
    setItems(previtems => {
      return previtems.filter(item => item.id != id)
    })
  }

  const addItem= (text) => {
    if(text.trim().length < 1) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}])
    }
    else {
      setItems(prevItems => {
        return [...prevItems, {id: uuidv1(), text}]
      })
    }

   
  }
  return (
    <View style={styles.container}>
    
    <Header title="Shopping List"></Header>
    <AddItem addItem={addItem} />
    <FlatList data={items} renderItem={({item}) =>  <ListItem item={item} deleteItem={deleteItem}></ListItem>} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  
})

export default App;