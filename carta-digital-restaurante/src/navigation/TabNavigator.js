import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MenuStackNavigator from './MenuStackNavigator';
import CartScreen from '../screens/CartScreen';
import AboutScreen from '../screens/AboutScreen';
import { COLORS } from '../constants/colors';
import { useCartContext } from '../context/CartContext';
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

/**
 * Navegación principal por pestañas (Tabs):
 * - Carta: contiene el Stack de Home/Menu/Detail
 * - Carrito: muestra el badge con la cantidad de productos
 * - Acerca de: información del restaurante
 */
export default function TabNavigator() {
  const { totalItems } = useCartContext();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textLight,
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Carta: 'restaurant-outline',
            Carrito: 'cart-outline',
            'Acerca de': 'information-circle-outline',
          };
          return <Ionicons name={icons[route.name]} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Carta" component={MenuStackNavigator} />
      <Tab.Screen
        name="Carrito"
        component={CartScreen}
        options={{
          headerShown: true,
          tabBarBadge: totalItems > 0 ? totalItems : undefined,
        }}
      />
      <Tab.Screen name="Acerca de" component={AboutScreen} options={{ headerShown: true }} />
    </Tab.Navigator>
  );
}
