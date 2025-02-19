import { Button, MD3LightTheme, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { TodoList } from '../components/TodoList';
import { useState } from "react";
import { useFireTodos } from "../firebase/FirestoreController";
import { StyleSheet } from "react-native";

export default function Todos() {

    const [todo, setTodo] = useState('');
    const todos = useFireTodos();
  
    function removeAllAlert(){
      Alert.alert('Todolist', 'Remove all todo item?', [
        {text: 'Cancel'},
        {text:'OK', onPress: removeAllTodos}
      ])
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text variant='headlineMedium'>Todolist ({todos ? todos.length : 0})</Text>
            <TextInput
                label={'New todo'}
                value={todo}
                onChangeText={setTodo}
                right={
                    <TextInput.Icon
                        icon={'plus-circle'}
                        onPress={() => addTodo(todo)}
                        size={32}
                        color={MD3LightTheme.colors.primary}
                    />
                }
            />
            <TodoList todos={todos} />
            <Button mode='contained' onPress={removeAllAlert}>Remove all</Button>
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
