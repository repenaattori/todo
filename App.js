import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { useFireAuth } from './firebase/FirebaseAuthConroller';
import Login from './screens/Login';
import Todos from './screens/Todos';

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
