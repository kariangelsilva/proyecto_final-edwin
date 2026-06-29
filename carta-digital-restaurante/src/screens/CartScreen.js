import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { COLORS } from '../constants/colors';
import { formatPrice } from '../utils/formatPrice';
import { useCartContext } from '../context/CartContext';

/**
 * Pantalla del carrito: muestra los productos agregados, permite
 * modificar cantidades y calcula el total mediante el hook useCart.
 */
export default function CartScreen() {
  const { items, addItem, decreaseItem, removeItem, clearCart, total } = useCartContext();

  const handleConfirmOrder = () => {
    if (items.length === 0) return;
    Alert.alert('Pedido confirmado', 'Tu pedido fue enviado a cocina. ¡Gracias!', [
      { text: 'OK', onPress: clearCart },
    ]);
  };

  if (items.length === 0) {
    return (
      <View style={styles.container}>
        <Header title="Tu Carrito" subtitle="Aún no has agregado productos" />
        <Text style={styles.empty}>Explora el menú y agrega tus platos favoritos 🍽️</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Tu Carrito" subtitle={`${items.length} productos`} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onIncrease={addItem}
            onDecrease={decreaseItem}
            onRemove={removeItem}
          />
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.totalLabel}>Total a pagar</Text>
        <Text style={styles.totalValue}>{formatPrice(total)}</Text>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
          <Text style={styles.confirmText}>Confirmar pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  empty: {
    textAlign: 'center',
    color: COLORS.textLight,
    marginTop: 40,
    fontSize: 14,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 13,
    color: COLORS.textLight,
  },
  totalValue: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },
  confirmButton: {
    backgroundColor: COLORS.success,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  confirmText: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 15,
  },
});
