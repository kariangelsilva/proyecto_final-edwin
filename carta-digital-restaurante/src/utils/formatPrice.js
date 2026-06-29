/**
 * Formatea un número como precio en pesos colombianos.
 * Ejemplo: formatPrice(12000) -> "$12.000"
 */
export function formatPrice(value) {
  return `$${value.toLocaleString('es-CO')}`;
}

export default formatPrice;
