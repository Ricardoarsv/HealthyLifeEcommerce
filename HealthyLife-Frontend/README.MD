# NutriChatAI Front

Frontend del aplicativo web NutriChatAI, que te permite hacer solicitudes http al servidor, para comunicarte con una IA, en forma de preguntas relacionadas a la nutricion.

## Project Structure

root/  
│  
├── src/  
│ ├── assets/  
│ │ └── fonts/
│ │ │ └── AdventureScript.ttf  
│ ├── components/  
│ │ └── Filters.jsx  
│ │ └── Header.jsx  
│ │ └── Pagination.jsx  
│ │ └── Product.modal.jsx  
│ │ └── Products.jsx  
│ ├── pages/  
│ │ └── Home.jsx  
│ ├── UI/  
│ │ └── Alert.modal.jsx  
│ │ └── Products.skeleton.jsx  
│ │ └── ProductsCard.jsx  
│ │ └── RecomendationCard.jsx  
│ ├── utils/  
│ │ └── getApiUrl.jsx  
│ ├── app.jsx  
│ ├── index.css  
│ └── Main.jsx  
├── .prettierignore  
├── .prettierrc  
├── index.html  
├── package.json  
├── postcss.config.cjs  
├── tailwind.config.js  
└── README.md

## Installation

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Ricardoarsv/HealthyLifeEcommerce.git
   cd HealthyLife-Frontend
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Ejecuta el comando para correr el servidor en modo desarrollo**:
   ```bash
   npm run dev
   ```

## Usage:
- En un entorno de **desarrollo** recordar cambiar la URL a localhost en src/utils/getApiUrl.jsx 

## Scripts

- **`npm run dev`**: Inicia el servidor con vite, para observar los cambios en archivos.

## Dependencies

- **fortawesome/free-solid-svg-icons:**: Iconos sólidos gratuitos de FontAwesome.
- **fortawesome/react-fontawesome**: Componentes de React para usar iconos de FontAwesome.
- **autoprefixer**: Herramienta para agregar prefijos específicos del navegador a CSS.
- **framer-motion**: Librería para animaciones en React.
- **react-dom**: Paquete para trabajar con el DOM en React.
- **react-router-dom:**: Enrutador para aplicaciones React.
- **react-select**: select custom de React.
- **tailwindcss**: Framework de CSS para diseño rápido.

---

Desarrollado por **RicardoArsv**.
