import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const pressHandler = () => {
    submitHandler(text);
    setText('');
  }

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder=' Add Exercise...'
        placeholderTextColor="grey"
        onChangeText={changeHandler} 
        value={text} 
      />
      <Button color='#1D9BF0' onPress={pressHandler} title='add exercise' />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    borderBottomWidth: 50,
    borderBottomColor: 'white',
  },
});