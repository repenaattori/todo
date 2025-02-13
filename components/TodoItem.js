import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Checkbox, Chip, IconButton, MD3LightTheme, Text } from "react-native-paper";

export default function TodoItem({todoItem}){

    const [done, setDone] = useState(todoItem.done);

    function onCheck(){
        setDone(!done);
    }    

    const chipStyle ={
        flex: 1,
        backgroundColor: done ? MD3LightTheme.colors.primaryContainer : MD3LightTheme.colors.onTertiary,
        borderWidth: 2,
        paddingVertical: 2
    }


    return(
        <View style={styles.todoItem}>
            <Checkbox
                status={done ? 'checked' : 'unchecked'}
                onPress={onCheck}
            />
            <Chip style={chipStyle}>{todoItem.todoText}</Chip>
            <IconButton disabled={!done} icon={'trash-can'} iconColor='black'/>
        </View>
    )
}

const styles = StyleSheet.create({
   todoItem:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 5
   }
})