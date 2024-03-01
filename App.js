import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 36,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Header;




