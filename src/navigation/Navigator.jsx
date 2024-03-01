import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './Categories';
import Products from './Products';
import CartStack from './CartStack';
import Search from './Search';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} options={{ title: 'Categorías' }} />
        <Stack.Screen name="Products" component={Products} options={{ title: 'Productos' }} />
        <Stack.Screen name="CartStack" component={CartStack} options={{ title: 'Carrito de compras' }} />
        <Stack.Screen name="Search" component={Search} options={{ title: 'Búsqueda' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
