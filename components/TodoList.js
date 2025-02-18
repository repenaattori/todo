import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import TodoItem from "./TodoItem";
import { IconButton, MD3DarkTheme, MD3LightTheme, Text } from "react-native-paper";
import { useState } from "react";

export function TodoList({todos}){
    const [uncheckOpen, setUncheckOpen] = useState(false);
    const [checkOpen, setCheckOpen] = useState(false);

    const doneTodos = [];
    const undoneTodos = [];

    todos.forEach( t => t.done ? doneTodos.push(t) : undoneTodos.push(t) );


    return(
        <ScrollView>
            <View style={styles.header}>
                <Text variant="titleMedium">Unchecked ({undoneTodos.length})</Text>
                <IconButton 
                    icon={ uncheckOpen ? 'arrow-up-bold-box' : 'arrow-down-bold-box'}
                    iconColor={MD3LightTheme.colors.primary}
                    onPress={()=>setUncheckOpen(prev => !prev)}
                />
            </View>
            { uncheckOpen &&
                undoneTodos.map(t => <TodoItem key={t.id} todoItem={t}/>)
            }
            <View style={styles.header}>
                <Text variant="titleMedium">Checked ({doneTodos.length})</Text>
                <IconButton 
                    icon={ checkOpen ? 'arrow-up-bold-box' : 'arrow-down-bold-box'}
                    iconColor={MD3LightTheme.colors.primary}
                    onPress={()=>setCheckOpen(prev => !prev)}
                />
            </View>
            { checkOpen &&
                doneTodos.map(t => <TodoItem key={t.id} todoItem={t}/>)
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
   header:{
    flexDirection: 'row',
    alignItems: 'center'
   }
})