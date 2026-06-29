 ## Carta Digital - Restaurante "Sabores del Quindío"
 
Aplicación móvil desarrollada en **React Native + Expo** que digitaliza la carta de un
restaurante, permitiendo a los clientes explorar el menú por categorías, ver el detalle de
cada plato y armar un pedido mediante un carrito de compras interactivo.

Proyecto desarrollado como **Entregable de Evaluación Final** — Programa de Formación
Desarrollo de Aplicaciones Móviles (ADSO), SENA - Centro de Comercio y Turismo, Regional
Quindío. Instructor: Edwin Rozo Gómez.

---

 ## Definición del problema y justificación

Muchos restaurantes pequeños y medianos en la región siguen utilizando cartas físicas o
archivos PDF estáticos que son difíciles y costosos de actualizar (cambios de precio,
agotados, nuevos platos, promociones). Esto genera fricción tanto para el negocio como
para el cliente, que no siempre tiene una experiencia visual atractiva ni un proceso claro
para armar su pedido antes de hacerlo formal con el mesero.

**Carta Digital** resuelve este problema ofreciendo:
- Un menú organizado por categorías, fácil de navegar desde el celular del cliente.
- Fichas de detalle por plato con imagen, descripción y precio.
- Un carrito de compras donde el cliente puede armar su pedido antes de confirmarlo,
  reduciendo errores de comunicación y tiempos de atención.

**Alcance de la aplicación:** la versión actual trabaja con datos locales de ejemplo
(`src/data/menuData.js`), pensados para que el restaurante los reemplace fácilmente con su
propio menú. No incluye pasarela de pagos ni backend remoto: el "Confirmar pedido" simula
el envío a cocina, dejando la puerta abierta para una futura integración con una API real.

---

 ## Características principales

- Navegación por **categorías → menú → detalle del plato** (React Navigation, Stack).
- Navegación inferior por **pestañas (Tabs)**: Carta, Carrito, Acerca de.
- **Carrito de compras** con hook personalizado (`useCart`) y contexto global
  (`CartContext`), sin prop-drilling entre pantallas.
- Manejo de estado de carga (`loading`) con `useEffect` al filtrar platos por categoría.
- Estilos 100% mediante `StyleSheet` de React Native (sin estilos en línea).
- Componentes modulares y reutilizables (`CategoryCard`, `DishCard`, `CartItem`, `Header`).
- Compatible con ejecución en **Web**, **Android**, **iOS** y **Expo Go**.


## Arquitectura del proyecto


```
carta-digital-restaurante/
├── App.js
├── app.json
├── package.json
├── assets/
└── src/
    ├── components/        # Componentes visuales reutilizables
    │   ├── CategoryCard.js
    │   ├── DishCard.js
    │   ├── CartItem.js
    │   └── Header.js
    ├── screens/           # Pantallas de la aplicación
    │   ├── HomeScreen.js
    │   ├── MenuScreen.js
    │   ├── DetailScreen.js
    │   ├── CartScreen.js
    │   └── AboutScreen.js
    ├── navigation/        # Configuración de rutas
    │   ├── MenuStackNavigator.js
    │   └── TabNavigator.js
    ├── context/           # Contexto global (carrito)
    │   └── CartContext.js
    ├── hooks/             # Hooks personalizados
    │   └── useCart.js
    ├── data/              # Datos estáticos de ejemplo
    │   └── menuData.js
    ├── utils/             # Funciones auxiliares
    │   └── formatPrice.js
    ├── styles/            # Estilos y tema compartido
    │   └── theme.js
    └── constants/         # Constantes globales
        └── colors.js
```


 ## Requisitos previos

Antes de clonar el proyecto, asegúrate de tener instalado:

 Node.js: v18.x o v20.x (LTS) 
 npm  v9 o superior (incluido con Node) 
 Expo CLI: Se instala automáticamente vía `npx`, no requiere instalación global.
 Expo Go (opcional, solo para celular físico), ultima versión disponible en Play Storel, App Store.



## Instalación y ejecución

Sigue estos pasos en orden, en una terminal, dentro de un directorio limpio:
bash
1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/carta-digital-restaurante.git

2. Entrar a la carpeta del proyecto
cd carta-digital-restaurante

3. Instalar las dependencias del proyecto
npm install

4. Iniciar el servidor de desarrollo de Expo
npx expo start



 ## Ejecución en Web

npm run web



## Ejecución en dispositivo físico (Expo Go)

1. Ejecuta npm start.
2. Se abrirá una terminal con un código QR.
3. Abre la app Expo Go en tu celular y escanea el código QR (Android: opción "Scan QR code"; iOS: usa la cámara nativa).
4. La app se compilará y abrirá automáticamente en tu dispositivo.
5. La aplicación se compilará y cargará automáticamente en tu dispositivo.

## Autor

Proyecto desarrollado por **[Kariangel Silva]** — Aprendiz del Programa ADSO, SENA Regional
Quindío.
