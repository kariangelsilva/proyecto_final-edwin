import React, { createContext, useContext } from 'react';
import { useCart } from '../hooks/useCart';

const CartContext = createContext(null);

/**
 * Provider que expone el hook useCart a toda la aplicación,
 * evitando tener que pasar props manualmente entre pantallas.
 */
export function CartProvider({ children }) {
  const cart = useCart();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext debe usarse dentro de un CartProvider');
  }
  return context;
}

export default CartContext;
