import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import Header from '../components/Header';
import DishCard from '../components/DishCard';
import { DISHES } from '../data/menuData';
import { COLORS } from '../constants/colors';

/**
 * Pantalla que lista los platos de una categoría específica.
 * Recibe categoryId y categoryName como parámetros de navegación.
 * Usa useEffect para simular una carga de datos (loading state),
 * demostrando el manejo de ciclo de vida sin bloquear la interfaz.
 */
export default function MenuScreen({ route, navigation }) {
  const { categoryId, categoryName } = route.params;
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const loadDishes = async () => {
      setLoading(true);
      // Simulación de una carga asíncrona (ej. fetch a una API)
      await new Promise((resolve) => setTimeout(resolve, 400));
      if (isActive) {
        const filtered = DISHES.filter((dish) => dish.categoryId === categoryId);
        setDishes(filtered);
        setLoading(false);
      }
    };

    loadDishes();

    // Limpieza para evitar actualizar estado de un componente desmontado
    return () => {
      isActive = false;
    };
  }, [categoryId]);

  const handleSelectDish = (dish) => {
    navigation.navigate('Detail', { dish });
  };

  return (
    <View style={styles.container}>
      <Header title={categoryName} subtitle={`${dishes.length} platos disponibles`} />

      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} style={styles.loader} />
      ) : (
        <FlatList
          data={dishes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DishCard dish={item} onPress={handleSelectDish} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  loader: {
    marginTop: 40,
  },
});
