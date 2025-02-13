import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TodoItem from './components/TodoItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { Button, Divider, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFireTodos } from './firebase/FirestoreController';

export default function App() {

  const todos = useFireTodos();
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <TextInput
        label={'Todo'}
        value={todo}
        onChangeText={setTodo}
        right={<TextInput.Icon icon={'plus-thick'} onPress={addTodo}/>}
      />
      <Button mode='contained' onPress={removeTodos}>Remove selected</Button>
      <FlatList
        data={items}
        renderItem={({item}) => <TodoItem text={item.text} checked={item.checked} onCheck={checked=>todoChecked(item, checked)}/>}
        ItemSeparatorComponent={<Divider bold={true}/>}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    gap: 5
  },
});
