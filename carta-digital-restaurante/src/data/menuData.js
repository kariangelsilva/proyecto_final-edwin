// Datos estáticos del menú. En una versión futura esto podría
// reemplazarse por una llamada a una API real (fetch / Axios).

export const CATEGORIES = [
  { id: 'entradas', name: 'Entradas', icon: '🥗' },
  { id: 'platos-fuertes', name: 'Platos Fuertes', icon: '🍛' },
  { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
  { id: 'postres', name: 'Postres', icon: '🍰' },
];

export const DISHES = [
  {
    id: '1',
    categoryId: 'entradas',
    name: 'Patacones con Hogao',
    description: 'Plátano verde frito acompañado de salsa criolla de tomate y cebolla.',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
  },
  {
    id: '2',
    categoryId: 'entradas',
    name: 'Empanadas Vallunas',
    description: 'Empanadas de maíz rellenas de carne y papa, servidas con ají casero.',
    price: 9000,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950',
  },
  {
    id: '3',
    categoryId: 'platos-fuertes',
    name: 'Bandeja Paisa',
    description: 'Frijoles, arroz, carne molida, chicharrón, chorizo, huevo y arepa.',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1604908554007-3d3e1a3c8e9e',
  },
  {
    id: '4',
    categoryId: 'platos-fuertes',
    name: 'Trucha al Ajillo',
    description: 'Trucha fresca del Quindío en salsa de ajo, acompañada de arroz y ensalada.',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
  },
  {
    id: '5',
    categoryId: 'bebidas',
    name: 'Limonada de Coco',
    description: 'Limonada natural batida con coco fresco.',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8',
  },
  {
    id: '6',
    categoryId: 'bebidas',
    name: 'Jugo en Leche de Lulo',
    description: 'Jugo natural de lulo preparado con leche.',
    price: 7500,
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8',
  },
  {
    id: '7',
    categoryId: 'postres',
    name: 'Obleas con Arequipe',
    description: 'Obleas tradicionales rellenas de arequipe, queso y mermelada.',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
  },
  {
    id: '8',
    categoryId: 'postres',
    name: 'Postre de Natas',
    description: 'Postre típico colombiano elaborado con leche, panela y canela.',
    price: 6500,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307',
  },
];

export default { CATEGORIES, DISHES };
