# 🍽️ API de Recetas por Ingredientes

Este es un proyecto backend que hice usando **Node.js**, **Express** y **MongoDB**. La idea es simple pero útil: una API donde puedes guardar recetas con sus ingredientes y luego buscar recetas según lo que tengas en tu cocina.

---

## 🛠️ Tecnologías utilizadas

- **Node.js** + **Express** para el servidor  
- **MongoDB Atlas** para la base de datos  
- **TypeScript** para mantener el código más organizado y seguro  
- **Postman** para probar todos los endpoints  

---

## 📌 ¿Qué puedes hacer con esta API?

- Guardar nuevas recetas con nombre, descripción e ingredientes  
- Ver todas las recetas guardadas  
- Buscar recetas por los ingredientes que tengas disponibles  
- Ver una receta específica por su ID  
- Editar una receta existente  
- Eliminar recetas  

---

## 📁 Estructura del proyecto

```
src/
├── config/        # Conexión a la base de datos
├── controllers/   # Lógica para manejar cada petición
├── models/        # Modelo de Receta (Mongoose)
├── routes/        # Rutas de la API
├── services/      # Lógica separada para manejar la base de datos
├── index.ts       # Archivo principal donde arranca todo
```

---

## 🚀 Cómo probarlo

1. Clona el repositorio.  
2. Instala las dependencias con:

```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con tu conexión de MongoDB Atlas:

```env
MONGODB_URI=tu_ruta_de_conexion
PORT=3000
```

4. Ejecuta el servidor con:

```bash
npm run dev
```

5. Abre Postman y prueba los endpoints.

---

## 🔍 Endpoints disponibles

| Método | Ruta                             | Descripción                                 |
|--------|----------------------------------|---------------------------------------------|
| POST   | `/api`                           | Crear una nueva receta                      |
| GET    | `/api`                           | Obtener todas las recetas                   |
| GET    | `/api/:id`                       | Obtener una receta por su ID                |
| PUT    | `/api/:id`                       | Actualizar una receta existente             |
| DELETE | `/api/:id`                       | Eliminar una receta                         |
| GET    | `/api/search?ingredients=x,y,z`  | Buscar recetas que contengan ciertos ingredientes |

---

## 📸 Ejemplo de búsqueda

```http
GET /api/search?ingredients=huevo,arroz
```

Esto devuelve todas las recetas que tengan `huevo` y `arroz` en sus ingredientes.

---

## 🎯 Objetivo del proyecto

Este proyecto lo hice para practicar cómo construir una API REST completa usando Express y MongoDB, trabajar con filtros personalizados y organizar el backend de forma modular.

---

## ✨ Futuro del proyecto

Me gustaría agregarle un frontend simple más adelante para poder interactuar visualmente con las recetas.