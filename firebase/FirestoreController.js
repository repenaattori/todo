import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, TODOS_REF } from "./Config";

/**
 * Hook for listening the changes in Firestore todos collections
 * If changes, the whole colleciton is set to state ==> rerendering the calling component
 */
export function useFireTodos(){
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        const q = query(collection(db, TODOS_REF), orderBy('todoText'));

        onSnapshot(q, querySnaphot => {
            setTodos( querySnaphot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }));
        } );
    }, []);

    return todos;
}

/**
 * Adding new todo into the Firestore colletion (initiates onsnapshot call)
 */
export function addTodo(todoText){
    addDoc( collection(db, TODOS_REF), {done: false, todoText } )
        .catch(error => console.log(error.message));
}

/**
 * Removing single todo item from Firestore by id
 */
export function removeTodo(id){
    deleteDoc(doc(db, TODOS_REF, id))
        .catch(error => console.log(error.message));
}

/**
 * Removes all the todo items from Firestore
 */
export function removeAllTodos(){
    getDocs( collection(db, TODOS_REF) )
        .then( docs => docs.forEach(doc => removeTodo(doc.id)))
        .catch(error => console.log(error.message));
}

/**
 * Updates single todo with id and new data
 */
export function updateTodo(id, data){
    updateDoc(doc(db, TODOS_REF, id), data)
        .catch( error => console.log(error.message));
}