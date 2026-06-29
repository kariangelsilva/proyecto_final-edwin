import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../data/menuData';
import { COLORS } from '../constants/colors';

/**
 * Pantalla principal: muestra las categorías del menú.
 * Al seleccionar una, navega a MenuScreen pasando el id de categoría como parámetro.
 */
export default function HomeScreen({ navigation }) {
  const handleSelectCategory = (category) => {
    navigation.navigate('Menu', { categoryId: category.id, categoryName: category.name });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Carta Digital"
        subtitle="Selecciona una categoría para ver los platos"
      />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryCard category={item} onPress={handleSelectCategory} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
});
