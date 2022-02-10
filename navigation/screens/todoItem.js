import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function TodoItem({ pressHandler, item }) {
    return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    item: {
      padding: 15,
      marginTop: 15,
      borderRadius: 10,
      backgroundColor: 'white'
    }
  });