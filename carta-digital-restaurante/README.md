# 🍽️ Carta Digital - Restaurante "Sabores del Quindío"

Aplicación móvil desarrollada en **React Native + Expo** que digitaliza la carta de un
restaurante, permitiendo a los clientes explorar el menú por categorías, ver el detalle de
cada plato y armar un pedido mediante un carrito de compras interactivo.

Proyecto desarrollado como **Entregable de Evaluación Final** — Programa de Formación
Desarrollo de Aplicaciones Móviles (ADSO), SENA - Centro de Comercio y Turismo, Regional
Quindío. Instructor: Edwin Rozo Gómez.

---

## 📌 Tabla de contenido

- [Definición del problema y justificación](#-definición-del-problema-y-justificación)
- [Características principales](#-características-principales)
- [Arquitectura del proyecto](#-arquitectura-del-proyecto)
- [Requisitos previos](#-requisitos-previos)
- [Instalación y ejecución](#-instalación-y-ejecución)
- [Ejecución en Web](#-ejecución-en-web)
- [Ejecución en dispositivo físico (Expo Go)](#-ejecución-en-dispositivo-físico-expo-go)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Estructura de carpetas](#-estructura-de-carpetas)

---

## 📋 Definición del problema y justificación

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

## ✨ Características principales

- 🗂️ Navegación por **categorías → menú → detalle del plato** (React Navigation, Stack).
- 📑 Navegación inferior por **pestañas (Tabs)**: Carta, Carrito, Acerca de.
- 🛒 **Carrito de compras** con hook personalizado (`useCart`) y contexto global
  (`CartContext`), sin prop-drilling entre pantallas.
- ⏳ Manejo de estado de carga (`loading`) con `useEffect` al filtrar platos por categoría.
- 🎨 Estilos 100% mediante `StyleSheet` de React Native (sin estilos en línea).
- 🧩 Componentes modulares y reutilizables (`CategoryCard`, `DishCard`, `CartItem`, `Header`).
- 📱 Compatible con ejecución en **Web**, **Android**, **iOS** y **Expo Go**.

---

## 🏗️ Arquitectura del proyecto

```
Home (Categorías)
   └──> Menu (platos filtrados por categoría) — recibe categoryId/categoryName
            └──> Detail (ficha del plato) — recibe el objeto dish completo
Carrito (Tab) — accede al estado global del carrito vía Context
Acerca de (Tab) — información estática del restaurante
```

El estado del carrito se gestiona con el hook personalizado `useCart`, expuesto a toda la
app mediante `CartContext`, separando completamente la **lógica de negocio** (agregar,
quitar, calcular total) de los **componentes visuales** (que solo reciben props y disparan
callbacks).

---

## ✅ Requisitos previos

Antes de clonar el proyecto, asegúrate de tener instalado:

| Herramienta | Versión recomendada |
|---|---|
| Node.js | v18.x o v20.x (LTS) |
| npm | v9 o superior (incluido con Node) |
| Expo CLI | Se instala automáticamente vía `npx`, no requiere instalación global |
| Expo Go (opcional, solo para celular físico) | Última versión disponible en Play Store / App Store |
| Git | Cualquier versión reciente |

> 💡 Puedes verificar tu versión de Node con `node -v` y la de npm con `npm -v`.

---

## ⚙️ Instalación y ejecución

Sigue estos pasos en orden, en una terminal, dentro de un directorio limpio:

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/carta-digital-restaurante.git

# 2. Entrar a la carpeta del proyecto
cd carta-digital-restaurante

# 3. Instalar las dependencias del proyecto
npm install

# 4. Iniciar el servidor de desarrollo de Expo
npx expo start
```

Al ejecutar `npx expo start` se abrirá una terminal interactiva con un **código QR** y un
menú de opciones (presionar `w` para web, `a` para Android, `i` para iOS, `r` para
recargar).

---

## 🌐 Ejecución en Web

Para abrir la aplicación directamente en el navegador:

```bash
npm run web
```

Esto iniciará el bundler de Metro y abrirá automáticamente `http://localhost:8081` (o el
puerto disponible) en tu navegador predeterminado.

---

## 📱 Ejecución en dispositivo físico (Expo Go)

1. Instala la aplicación **Expo Go** desde Play Store (Android) o App Store (iOS) en tu
   celular.
2. Asegúrate de que tu celular y tu computador estén conectados a la **misma red Wi-Fi**.
3. Ejecuta en la terminal:
   ```bash
   npx expo start
   ```
4. Escanea el **código QR** que aparece en la terminal o en el navegador:
   - **Android:** abre la app Expo Go y selecciona "Scan QR code".
   - **iOS:** abre la app nativa de Cámara y apunta al código QR; aparecerá una notificación
     para abrir en Expo Go.
5. La aplicación se compilará y cargará automáticamente en tu dispositivo.

---

## 🛠️ Tecnologías utilizadas

- [React Native](https://reactnative.dev/) `0.74`
- [Expo](https://expo.dev/) `SDK 51`
- [React Navigation](https://reactnavigation.org/) (Native Stack + Bottom Tabs)
- React Hooks (`useState`, `useEffect`, `useContext`, hook personalizado `useCart`)
- `StyleSheet` API nativa de React Native

---

## 📂 Estructura de carpetas

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

---

## 👤 Autor

Proyecto desarrollado por **[Tu Nombre Aquí]** — Aprendiz del Programa ADSO, SENA Regional
Quindío.

## 📄 Licencia

Proyecto de uso académico, desarrollado con fines educativos para la evaluación final del
programa de formación.
