import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HistoryItem = (props) =>
  <TouchableOpacity>
    <View style = { styles.historyItem }>
      <Text>{ props.itemName }</Text>
    </View>
  </TouchableOpacity>

const styles = StyleSheet.create({
  historyItem: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee'
  }
})

export default HistoryItem
