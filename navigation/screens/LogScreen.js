import React, {useState} from 'react';

import { StyleSheet, View, FlatList, Alert, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from './todoItem';
import AddTodo from './addTodo';

export default function LogScreen({ navigation }) {
    const [todos, setTodos] = useState([
        { text: '3x12 Bench press', key: '1' },
        { text: '3x12 Overhead press', key: '2' },
        { text: '3x12 Dips', key: '3' },
      ]);
    
      const pressHandler = (key) => {
        setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.key != key);
        });
      };
    
      const submitHandler = (text) => {
          setTodos(prevTodos => {
            return [
              { text, key: Math.random().toString() },
              ...prevTodos
            ];
        })
      }
    
      return (
        <ScrollView style={{backgroundColor: '#15202B'}}>
        <View style={styles.container}>
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
        </ScrollView> 
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#15202B',
      },
      content: {
        padding: 80,
        marginTop: 40,
        color: '#f4f4f4'
      },
      list: {
        marginTop: 50,
      },
    });