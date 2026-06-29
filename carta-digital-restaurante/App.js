import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigator from './src/navigation/TabNavigator';
import { CartProvider } from './src/context/CartContext';

/**
 * Punto de entrada de la aplicación.
 * Envuelve toda la app con el CartProvider (estado global del carrito)
 * y el NavigationContainer (gestión de rutas).
 */
export default function App() {
  return (
    <SafeAreaProvider>
      <CartProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <TabNavigator />
        </NavigationContainer>
      </CartProvider>
    </SafeAreaProvider>
  );
}
