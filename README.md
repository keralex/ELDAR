# Challenge Técnico - Eldar

Este proyecto es un challenge técnico para Eldar, donde se simula un sistema de login y un CRUD de posts utilizando una API externa.

## Descripción del Proyecto

El proyecto consiste en:

1. Simular un sistema de login.
2. Implementar un CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar posts.
3. Simular llamadas a una API para manejar los datos de los usuarios y posts.

La API utilizada para simular los datos es [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## Tecnologías Utilizadas

- **Vite**: Para la creación y configuración del proyecto.
- **React**: Biblioteca para la construcción de la interfaz de usuario.
- **Material UI**: Framework de componentes de interfaz de usuario para React.
- **React Router**: Para la gestión de rutas en la aplicación.
- **TypeScript**: Para asegurar la tipificación estática y mejorar el desarrollo.

## Instalación y Ejecución

Para probar la aplicación, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>

2. Instala las dependencias:
   ```bash
   npm install

3. Inicia la aplicación:
   ```bash
    npm run dev

## Simulación de Login

Para poder loguearse en la aplicación, utiliza uno de los usuarios disponibles en la API simulada.

**Ejemplo de usuarios:**

- **Administrador**:
  Email: Sincere@april.biz , los ID impar tienen permisos para ver, agregar, editar y eliminar posts.
- **Usuario Normal:**: Email: Shanna@melissa.tv , Los ID par solo pueden ver los posts, no tiene permisos para agregar, editar o eliminar).

## Api utilizada

La aplicación utiliza JSONPlaceholder para simular la base de datos de usuarios y posts.
