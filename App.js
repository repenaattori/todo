import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { use, useEffect, useState } from 'react';
import { Button, Divider, MD2LightTheme, PaperProvider, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addTodo, useFireTodos } from './firebase/FirestoreController';
import TodoItem from './components/TodoItem';
import { TodoList } from './components/TodoList';

export default function App() {

  const [todo, setTodo] = useState('');
  const todos = useFireTodos();

  return (
    <PaperProvider >
    <SafeAreaView style={styles.container}>
      <TextInput
        label={'New todo'}
        value={todo}
        onChangeText={setTodo}
        right={<TextInput.Icon icon={'plus-circle'} onPress={()=>addTodo(todo)} size={32}/>}
      />
      <TodoList todos={todos}/>
      <Button mode='contained'>Remove all</Button>
    </SafeAreaView>
    </PaperProvider>
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
