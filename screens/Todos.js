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