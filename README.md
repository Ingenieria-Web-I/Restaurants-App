# Restaurants App

Una aplicación para gestionar y explorar un directorio de restaurantes. Permite agregar nuevos restaurantes, eliminarlos y restaurar los datos predeterminados. Además, puedes buscar restaurantes en el directorio.

## Características

- **Visualización de Restaurantes:** Muestra un listado de restaurantes con su nombre, descripción, dirección y una imagen.
- **Agregar Restaurantes:** Permite agregar nuevos restaurantes al directorio.
- **Eliminar Restaurantes:** Ofrece una opción para eliminar restaurantes del directorio.
- **Restablecer Datos:** Permite restaurar los datos predeterminados del directorio.
- **Búsqueda de Restaurantes:** Función para buscar restaurantes dentro del directorio.
- **Notificaciones:** Utiliza **SweetAlert2** para mostrar alertas interactivas (como confirmaciones y mensajes de éxito).

## Instalación

1. **Clonar el repositorio:**

```bash
https://github.com/Ingenieria-Web-I/Restaurants-App.git
cd restaurant-app
````

2. **Instalar las dependencias:**

```bash
npm install
```

3. **Ejecutar la aplicación:**

```bash
npm start
```

Esto abrirá la aplicación en tu navegador

## Estructura del Proyecto

```plaintext
restaurant-app/
│
├── public/                # Archivos estáticos (imágenes, favicon, etc.)
│
├── src/
│   ├── components/        # Componentes reutilizables como Navbar y Footer
│   ├── data/              # Datos predeterminados de los restaurantes
│   ├── pages/             # Páginas de la aplicación como Home, Search y NewRestaurant
│   ├── App.js             # Componente principal de la aplicación
│   ├── App.css            # Estilos globales de la aplicación
│   └── index.js           # Punto de entrada de la aplicación
│
└── package.json           # Información sobre las dependencias y scripts de NPM
```

## Dependencias

* **React**: Librería de JavaScript para construir interfaces de usuario.
* **React Router**: Para la navegación entre páginas.
* **Tailwind CSS**: Framework de CSS para diseño responsivo y moderno.
* **SweetAlert2**: Librería para mostrar alertas modales personalizadas.
* **Framer Motion**: Para animaciones avanzadas en React.
* **React Router DOM**: Biblioteca para manejar la navegación de páginas en la aplicación.

## Funcionalidad

### 1. **Inicio (Home)**

En la página de inicio, los usuarios pueden ver el directorio de restaurantes. Cada restaurante tiene una imagen, nombre, descripción y dirección. Los usuarios también pueden eliminar restaurantes y ver una alerta de confirmación al hacerlo.

### 2. **Buscar Restaurantes (Search)**

Permite buscar restaurantes en el directorio utilizando un campo de búsqueda.

### 3. **Agregar Nuevo Restaurante (NewRestaurant)**

Los usuarios pueden agregar nuevos restaurantes al directorio proporcionando el nombre, descripción, dirección e imagen.

### 4. **Restablecer Datos**

El botón de "Restablecer datos" permite restaurar los datos predeterminados de los restaurantes por defecto.

### 5. **Footer**

Al final de la página se incluye un pie de página con los enlaces a los perfiles de GitHub de los desarrolladores del proyecto:

* [Jair Moreno - GitHub](https://github.com/JairMorenolml)
* [Geronimo Bedoya - GitHub](https://github.com/ProyectosDesarrollo97)

## Tecnologías Usadas

* **React** para la creación de componentes dinámicos.
* **Tailwind CSS** para la creación de una interfaz moderna y responsiva.
* **SweetAlert2** para las alertas interactivas.
* **Framer Motion** para animaciones de transición suaves.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un **fork** del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-caracteristica`).
3. Realiza tus cambios y haz un **commit** de tus modificaciones (`git commit -am 'Añadir nueva característica'`).
4. Haz **push** a la rama (`git push origin feature-nueva-caracteristica`).
5. Abre un **pull request** para que podamos revisar y fusionar los cambios.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

## Autor

* **Jair Moreno** - [GitHub](https://github.com/JairMorenolml)
* **Geronimo Bedoya** - [GitHub](https://github.com/ProyectosDesarrollo97)