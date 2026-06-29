import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { formatPrice } from '../utils/formatPrice';

/**
 * Representa una línea del carrito con controles para aumentar,
 * disminuir o eliminar el producto. Lógica delegada al padre vía callbacks.
 */
export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <View style={styles.row}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{formatPrice(item.price)} c/u</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity onPress={() => onDecrease(item.id)} style={styles.btn}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => onIncrease(item)} style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Text style={styles.remove}>Quitar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  info: { flex: 1 },
  name: { fontSize: 14, fontWeight: '600', color: COLORS.text },
  price: { fontSize: 12, color: COLORS.textLight, marginTop: 2 },
  controls: { flexDirection: 'row', alignItems: 'center', marginRight: 12 },
  btn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: { fontSize: 16, color: COLORS.primary, fontWeight: '700' },
  quantity: { marginHorizontal: 8, fontSize: 14, fontWeight: '600' },
  remove: { color: COLORS.primary, fontSize: 12, fontWeight: '600' },
});
