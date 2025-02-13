import { FlatList } from "react-native";
import TodoItem from "./TodoItem";

export function TodoList({todos}){
    return(
        <FlatList
            data={todos}
            renderItem={({item}) => <TodoItem todoItem={item}/>}
        />
    );
}