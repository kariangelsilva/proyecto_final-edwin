import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { COLORS } from '../constants/colors';

/**
 * Pantalla informativa con datos del restaurante: horarios,
 * ubicación y contacto. Contenido estático parametrizable.
 */
export default function AboutScreen() {
  const handleOpenMaps = () => {
    Linking.openURL('https://maps.google.com/?q=Armenia,Quindio,Colombia');
  };

  return (
    <View style={styles.container}>
      <Header title="Acerca del Restaurante" />

      <Text style={styles.text}>
        Sabores del Quindío es un restaurante familiar dedicado a la cocina tradicional
        colombiana, preparada con ingredientes frescos de la región.
      </Text>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>Horario de atención</Text>
        <Text style={styles.value}>Lunes a Domingo · 11:00 a.m. - 9:00 p.m.</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>Teléfono</Text>
        <Text style={styles.value}>+57 300 000 0000</Text>
      </View>

      <TouchableOpacity style={styles.mapButton} onPress={handleOpenMaps}>
        <Text style={styles.mapButtonText}>Ver ubicación en el mapa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 16,
  },
  text: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 20,
    marginBottom: 20,
  },
  infoBlock: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: COLORS.textLight,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: '600',
    marginTop: 2,
  },
  mapButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 12,
  },
  mapButtonText: {
    color: COLORS.white,
    fontWeight: '700',
  },
});
