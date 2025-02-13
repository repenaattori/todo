import { addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
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
 * Adding new todo into the Firestore colletion (iniates onsnapshot call)
 */
export function addTodo(todoText){
    addDoc( collection(db, TODOS_REF), {done: false, todoText } )
        .catch(error => console.log(error.message))
}