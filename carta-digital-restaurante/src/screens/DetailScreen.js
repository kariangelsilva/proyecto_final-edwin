import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { COLORS } from '../constants/colors';
import { formatPrice } from '../utils/formatPrice';
import { useCartContext } from '../context/CartContext';

/**
 * Pantalla de detalle de un plato. Recibe el objeto "dish" completo
 * como parámetro de navegación (paso seguro de parámetros entre rutas).
 */
export default function DetailScreen({ route, navigation }) {
  const { dish } = route.params;
  const { addItem } = useCartContext();

  const handleAddToCart = () => {
    addItem(dish);
    Alert.alert('Agregado', `${dish.name} se agregó al carrito.`, [
      { text: 'Seguir viendo el menú', style: 'cancel' },
      { text: 'Ir al carrito', onPress: () => navigation.navigate('Cart') },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.price}>{formatPrice(dish.price)}</Text>
        <Text style={styles.description}>{dish.description}</Text>

        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    width: '100%',
    height: 220,
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: COLORS.textLight,
    marginTop: 12,
    lineHeight: 20,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  addButtonText: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
  },
});
