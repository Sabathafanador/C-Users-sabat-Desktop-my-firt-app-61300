import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProductList = () => {
  // Datos de ejemplo para los productos
  const products = [
    { id: 1, name: 'Producto 1', price: '$10' },
    { id: 2, name: 'Producto 2', price: '$20' },
    { id: 3, name: 'Producto 3', price: '$30' },
    { id: 4, name: 'Producto 4', price: '$40' },
  ];

  // Función para renderizar cada elemento de la lista
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});

export default ProductList;
