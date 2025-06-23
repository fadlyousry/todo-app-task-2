import { StatusBar } from 'expo-status-bar';
import { Text, View ,TouchableOpacity} from 'react-native';
import { styles } from './styles';
import TodoForm from './src/component/TodoForm';
import Todos from './src/component/Todos';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = async (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    await AsyncStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };
  


const handleDeleteTodo = async (id) => {
  const updatedTodos = todos.filter(todo => todo.id !== id);
  setTodos(updatedTodos);
  await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
};





useEffect(() => {
  const loadTodos = async () => {
      const savedTodos = await AsyncStorage.getItem('todos');
      if (savedTodos !== null) {
        setTodos(JSON.parse(savedTodos));
      }

  };

  loadTodos();
}, []);


  return (
<View style={[styles.container, { justifyContent: todos.length === 0 ? 'center' : 'flex-start' }]}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>TODO APP</Text>
      <TodoForm onSubmit={handleAddTodo} />
      <View style={styles.dividerLine} />
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn} >
          <Text style={styles.filterText}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} >
          <Text style={styles.filterText}>
            Compleated
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} >
          <Text style={styles.filterText}>
            Done
          </Text>
        </TouchableOpacity>
      </View>

      {todos.length > 0 && (<Todos todos={todos} onDelete={handleDeleteTodo}/>)}
    </View>
  );
}

