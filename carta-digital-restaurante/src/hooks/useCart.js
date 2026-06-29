import { useState, useCallback, useMemo } from 'react';

/**
 * Hook personalizado que encapsula toda la lógica de negocio del carrito
 * de compras, desacoplándola completamente de los componentes visuales.
 *
 * Responsabilidad única: gestionar el estado del carrito (agregar, quitar,
 * vaciar y calcular el total).
 */
export function useCart() {
  const [items, setItems] = useState([]);

  const addItem = useCallback((dish) => {
    setItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === dish.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...dish, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((dishId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== dishId));
  }, []);

  const decreaseItem = useCallback((dishId) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === dishId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  return {
    items,
    addItem,
    removeItem,
    decreaseItem,
    clearCart,
    total,
    totalItems,
  };
}

export default useCart;
