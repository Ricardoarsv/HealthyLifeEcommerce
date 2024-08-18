# HealthyLife API REST

Backend del aplicativo web HealthyLife, que envia los productos de un ecommerce, los perfiles de usuario y gestiona recomendaciones para el usuario.

## Project Structure

root/  
│  
├── src/  
│ ├── controllers/  
│ │ └── preferences.controller.js  
│ │ └── product.controllerr.js  
│ │ └── profile.controller.js  
│ ├── JSON/  
│ │ └── defaultProfiles.json  
│ │ └── EcommerceProducts.json  
│ ├── models/  
│ │ └── preferences.model.js  
│ │ └── product.model.js  
│ │ └── profile.model.js  
│ │ └── server.model.js  
│ ├── routes/  
│ │ └── preferences.routes.js  
│ │ └── product.routes.js  
│ │ └── product.routes.js  
│ ├── utils/  
│ │ └── proccessPreferences.js  
│ │ └── ApiUrl.js  
├── .env  
├── index.js  
├── package.json  
└── README.md

## Installation

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Ricardoarsv/HealthyLifeEcommerce.git
   cd HealthyLife-Backend
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Establece las variables de entorno**:
   Create a `.env` file in the root directory and configure your environment variables. For example:

   ```env
       PORT=3000
   ```

4. **Ejecuta el comando para correr el servidor en modo desarrollo**:
   ```bash
   npm run dev
   ```

## Scripts

- **`npm run dev`**: Inicia el servidor con nodemon, para observar los cambios en archivos.

## Usage

**Rutas disponibles**

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

- **express**: Framework de node.js.
- **picocolors**: Libreria para llenar de vida la consola.
- **dotenv**: Modulo para cargar los archivos `.env`.
- **cors**: Middleware para habilitar las (CORS).

## Dev Dependencies

- **nodemon**: Reinicia automaticamente el servidor al detectar cambios en archivos.
- **standard**: Guia standar de formato de codigo JavaScript.

---

Desarrollado por **RicardoArsv**.
