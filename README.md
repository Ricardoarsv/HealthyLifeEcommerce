# HealthyLifeEcommerce

HealthyLife es un sistema integrado con plataformas de comercio electrónico que proporciona recomendaciones de alimentos basadas en las preferencias seleccionadas por el usuario.

## Project Structure

root/  
├── HealthyLife-Backend/  
│ ├── src/  
│ │ ├── controllers/  
│ │ │ ├── preferences.controller.js  
│ │ │ ├── product.controllerr.js  
│ │ │ └── profile.controller.js  
│ │ ├── JSON/  
│ │ │ ├── defaultProfiles.json  
│ │ │ └── EcommerceProducts.json  
│ │ ├── models/  
│ │ │ ├── preferences.model.js  
│ │ │ ├── product.model.js  
│ │ │ ├── profile.model.js  
│ │ │ └── server.model.js  
│ │ ├── routes/  
│ │ │ ├── preferences.routes.js  
│ │ │ └── product.routes.js  
│ │ ├── utils/  
│ │ │ ├── proccessPreferences.js  
│ │ │ └── ApiUrl.js  
│ │ ├── .env  
│ │ ├── index.js  
│ │ └── package.json  
│ └── README.md  
├── HealthyLife-Frontend/  
│ ├── src/  
│ │ ├── assets/  
│ │ │ └── fonts/  
│ │ │ └── AdventureScript.ttf  
│ │ ├── components/  
│ │ │ ├── Filters.jsx  
│ │ │ ├── Header.jsx  
│ │ │ ├── Pagination.jsx  
│ │ │ ├── Product.modal.jsx  
│ │ │ └── Products.jsx  
│ │ ├── pages/  
│ │ │ └── Home.jsx  
│ │ ├── UI/  
│ │ │ ├── Alert.modal.jsx  
│ │ │ ├── Products.skeleton.jsx  
│ │ │ ├── ProductsCard.jsx  
│ │ │ └── RecomendationCard.jsx  
│ │ ├── utils/  
│ │ │ └── getApiUrl.jsx  
│ │ ├── app.jsx  
│ │ ├── index.css  
│ │ └── Main.jsx  
│ ├── .prettierignore  
│ ├── .prettierrc  
│ ├── index.html  
│ ├── package.json  
│ ├── postcss.config.cjs  
│ ├── tailwind.config.js  
│ └── README.md  
├── .eslint.cjs  
└── README.md

## Installation

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Ricardoarsv/HealthyLifeEcommerce.git
   ```

2. **abre 2 terminales y en cada una accede a la carpeta del proyecto**:

   ```bash
   cd HealthyLife-Backend
   ```

   ```bash
   cd HealthyLife-Frontend
   ```

3. **Instala las dependencias en ambos terminales**:

   ```bash
   npm install
   ```

4. **Establece las variables de entorno para el backend**:
   Create a `.env` file in the root directory and configure your environment variables. For example:

   ```env
        PORT=3000
   ```

5. **Ejecuta el comando para correr el servidor en modo desarrollo en ambos terminales**:
   ```bash
   npm run dev
   ```

## Scripts

- **`npm run dev`**: En backend Inicia el servidor con nodemon, para observar los cambios en archivos.
- **`npm run dev`**: En frontend Inicia el servidor con vite, para observar los cambios en archivos.

## Usage:
- En un entorno de **desarrollo** recordar cambiar la URL a localhost en src/utils/getApiUrl.jsx en el frontEnd del aplicativo Asi como activar el PORT comentado en el server.model.js

## Backend Routes:

- **POST preferences**: https:/ApiURl/api/preferences/getRecomendations  
  Recibe un objeto con la siguiente estructura:

```
{
  user_id: '5',
  preferences: { gluten_free: true or false, macronutrient: 'Protein' o 'Fat' o 'Carbs'  }
}
```

- **GET products**: https:/ApiURl/api/products/getProducts
- **GET express**:https:/ApiURl/api/profiles/getProfiles

## Dependencies

**Backend**

- **express**: Framework de node.js.
- **picocolors**: Libreria para llenar de vida la consola.
- **dotenv**: Modulo para cargar los archivos `.env`.
- **cors**: Middleware para habilitar las (CORS).

**Frontend**

- **fortawesome/free-solid-svg-icons:**: Iconos sólidos gratuitos de FontAwesome.
- **fortawesome/react-fontawesome**: Componentes de React para usar iconos de FontAwesome.
- **autoprefixer**: Herramienta para agregar prefijos específicos del navegador a CSS.
- **framer-motion**: Librería para animaciones en React.
- **react-dom**: Paquete para trabajar con el DOM en React.
- **react-select**: select custom de React.
- **react-router-dom:**: Enrutador para aplicaciones React.
- **tailwindcss**: Framework de CSS para diseño rápido.

## Dev Dependencies

- **nodemon**: Reinicia automaticamente el servidor al detectar cambios en archivos.
- **standard**: Guia standar de formato de codigo JavaScript.

---

Desarrollado por **RicardoArsv**.
