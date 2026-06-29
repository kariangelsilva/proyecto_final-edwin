import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import DetailScreen from '../screens/DetailScreen';
import { COLORS } from '../constants/colors';

const Stack = createNativeStackNavigator();

/**
 * Stack de navegación para el flujo principal del menú:
 * Home -> Menu (por categoría) -> Detail (plato seleccionado)
 */
export default function MenuStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Carta Digital' }} />
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={({ route }) => ({ title: route.params?.categoryName ?? 'Menú' })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({ title: route.params?.dish?.name ?? 'Detalle' })}
      />
    </Stack.Navigator>
  );
}
