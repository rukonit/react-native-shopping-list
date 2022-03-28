import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Header({title}) {

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
  
  
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'darkslateblue'
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    paddingTop: 10
  
  
}
}
)
