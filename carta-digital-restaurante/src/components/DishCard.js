import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { formatPrice } from '../utils/formatPrice';

/**
 * Tarjeta que representa un plato dentro de una lista de menú.
 * Componente puramente visual: toda la información llega vía props.
 */
export default function DishCard({ dish, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(dish)} activeOpacity={0.85}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}>{formatPrice(dish.price)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
  },
  info: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.text,
  },
  description: {
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
    marginTop: 6,
  },
});
