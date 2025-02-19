import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { use, useEffect, useState } from 'react';
import { Button, Divider, MD2LightTheme, MD3LightTheme, PaperProvider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addTodo, removeAllTodos, useFireTodos } from './firebase/FirestoreController';
import TodoItem from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { logoutUser, signUpUser, useFireAuth } from './firebase/FirebaseAuthConroller';
import Login from './screens/Login';

export default function App() {

  const user = useFireAuth();

  return (
    <PaperProvider >
      { user ? <Todos/> : <Login/>}
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
