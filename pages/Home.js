import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}><Text>Navegar para os detalhes</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
